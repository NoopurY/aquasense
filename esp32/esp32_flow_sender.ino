#include <WiFi.h>
#include <HTTPClient.h>

/* ---------------- WIFI SETTINGS ---------------- */
const char* WIFI_SSID = "NOOPUR Y";
const char* WIFI_PASSWORD = "1206NOOPUR";

/* ---------------- CLOUD SETTINGS ---------------- */
// Use your laptop/server LAN IP where AquaSense Next.js runs.
// Example: http://192.168.137.1:3000/api/telemetry/ingest
const char* TELEMETRY_URL = "http://192.168.137.1:3000/api/telemetry/ingest";

// Required by AquaSense ingest route as x-device-token or Bearer token.
const char* DEVICE_TOKEN = "f8db8f2e0f7b4054b54619535c2454eb";

/* ---------------- PIN DEFINITIONS ---------------- */
#define FLOW_SENSOR_PIN 27
#define RELAY_PIN 26
#define BUTTON_PIN 25

/* ---------------- FLOW VARIABLES ---------------- */
volatile uint32_t totalPulses = 0;
volatile uint32_t windowPulses = 0;
volatile uint32_t lastPulseMicros = 0;

float flowRateLMin = 0.0f;
float totalLiters = 0.0f;
float litersThisCycle = 0.0f;

unsigned long previousFlowMillis = 0;
const unsigned long flowIntervalMs = 1000;
const unsigned long wifiRetryIntervalMs = 15000;
const unsigned long wifiConnectTimeoutMs = 12000;
unsigned long lastWiFiBeginMs = 0;
unsigned long wifiAttemptStartMs = 0;
bool wifiConnectInProgress = false;

// YF-S201 pulses per liter. Tune for your sensor.
float calibrationFactor = 450.0f;

float targetVolume = 0.5f;

bool filling = false;
uint32_t cycleStartPulses = 0;
unsigned long lastFillLogMs = 0;

/* ---------------- BUTTON DEBOUNCE ---------------- */
bool lastButtonReading = HIGH;
bool stableButtonState = HIGH;
unsigned long lastDebounceMs = 0;
const unsigned long debounceMs = 40;

/* ---------------- INTERRUPT ---------------- */
void IRAM_ATTR pulseCounter() {
  // Ignore sub-millisecond spikes caused by electrical noise.
  uint32_t nowUs = micros();
  if (nowUs - lastPulseMicros < 800) {
    return;
  }
  lastPulseMicros = nowUs;

  totalPulses++;
  windowPulses++;
}

/* ---------------- HELPERS ---------------- */
uint32_t readTotalPulses() {
  noInterrupts();
  uint32_t p = totalPulses;
  interrupts();
  return p;
}

uint32_t readAndResetWindowPulses() {
  noInterrupts();
  uint32_t p = windowPulses;
  windowPulses = 0;
  interrupts();
  return p;
}

void setPump(bool on) {
  // If your relay module is active-LOW, invert this.
  digitalWrite(RELAY_PIN, on ? HIGH : LOW);
}

void connectWiFi() {
  wl_status_t status = WiFi.status();

  if (status == WL_CONNECTED) {
    wifiConnectInProgress = false;
    return;
  }

  unsigned long now = millis();

  // If a connect attempt is in progress, wait for success or timeout.
  if (wifiConnectInProgress) {
    if (status == WL_CONNECTED) {
      wifiConnectInProgress = false;
      return;
    }

    if (now - wifiAttemptStartMs < wifiConnectTimeoutMs) {
      return;
    }

    Serial.println("WiFi connect timeout");
    wifiConnectInProgress = false;
    WiFi.disconnect();
  }

  if (now - lastWiFiBeginMs < wifiRetryIntervalMs) {
    return;
  }

  lastWiFiBeginMs = now;
  wifiAttemptStartMs = now;
  wifiConnectInProgress = true;

  Serial.print("Connecting WiFi to ");
  Serial.println(WIFI_SSID);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
}

void logWiFiStatus() {
  static wl_status_t lastStatus = WL_NO_SHIELD;
  wl_status_t status = WiFi.status();

  if (status == lastStatus) {
    return;
  }
  lastStatus = status;

  if (status == WL_CONNECTED) {
    Serial.println("WiFi Connected");
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.print("WiFi status changed: ");
    Serial.println((int)status);
  }
}

bool sendDataToCloud(uint32_t pulsesDelta) {
  connectWiFi();
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Telemetry skipped: WiFi unavailable");
    return false;
  }

  HTTPClient http;
  http.begin(TELEMETRY_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("x-device-token", DEVICE_TOKEN);

  String body = "{";
  body += "\"pulses\":";
  body += String((unsigned long)pulsesDelta);
  body += ",\"flowRate\":";
  body += String(flowRateLMin, 3);
  body += "}";

  int code = http.POST(body);

  Serial.print("POST code: ");
  Serial.println(code);

  if (code > 0) {
    String response = http.getString();
    Serial.print("Response: ");
    Serial.println(response);
  } else {
    Serial.print("HTTP error: ");
    Serial.println(http.errorToString(code));
  }

  http.end();
  return code >= 200 && code < 300;
}

void updateFlowRate() {
  unsigned long now = millis();
  unsigned long elapsed = now - previousFlowMillis;
  if (elapsed < flowIntervalMs) {
    return;
  }

  uint32_t pulses = readAndResetWindowPulses();
  previousFlowMillis = now;

  float litersInWindow = pulses / calibrationFactor;
  flowRateLMin = litersInWindow * (60000.0f / elapsed);

  // Show flow continuously only while filling to avoid idle confusion.
  if (filling) {
    Serial.print("Flow Rate: ");
    Serial.print(flowRateLMin, 3);
    Serial.println(" L/min");
  }
}

void handleButton() {
  bool reading = digitalRead(BUTTON_PIN);

  if (reading != lastButtonReading) {
    lastDebounceMs = millis();
    lastButtonReading = reading;
  }

  if ((millis() - lastDebounceMs) > debounceMs && reading != stableButtonState) {
    stableButtonState = reading;

    if (stableButtonState == LOW && !filling) {
      Serial.println("Filling Bottle...");
      cycleStartPulses = readTotalPulses();
      litersThisCycle = 0.0f;
      lastFillLogMs = 0;
      filling = true;
      setPump(true);
    }
  }
}

void updateFilling() {
  if (!filling) {
    return;
  }

  uint32_t current = readTotalPulses();
  uint32_t cyclePulses = current - cycleStartPulses;
  litersThisCycle = cyclePulses / calibrationFactor;

  unsigned long now = millis();
  if (now - lastFillLogMs >= 500) {
    lastFillLogMs = now;
    Serial.print("Pulses: ");
    Serial.print((unsigned long)cyclePulses);
    Serial.print(" | Filled: ");
    Serial.print(litersThisCycle, 3);
    Serial.println(" L");
  }

  if (litersThisCycle >= targetVolume) {
    setPump(false);
    filling = false;

    totalLiters = current / calibrationFactor;

    Serial.println("Bottle Filled!");
    Serial.print("Total Usage: ");
    Serial.print(totalLiters, 3);
    Serial.println(" L");

    sendDataToCloud(cyclePulses);
  }
}

/* ---------------- SETUP ---------------- */
void setup() {
  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  WiFi.persistent(false);
  WiFi.setAutoReconnect(true);

  pinMode(FLOW_SENSOR_PIN, INPUT_PULLUP);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  setPump(false);
  attachInterrupt(digitalPinToInterrupt(FLOW_SENSOR_PIN), pulseCounter, FALLING);

  connectWiFi();
  previousFlowMillis = millis();

  Serial.println("AquaSense ESP32 ready");
  Serial.println("Press button on GPIO25 to start motor and pulse counting");
}

/* ---------------- LOOP ---------------- */
void loop() {
  handleButton();
  updateFlowRate();
  updateFilling();

  // Lightweight reconnect checks.
  static unsigned long lastReconnectCheck = 0;
  unsigned long now = millis();
  if (now - lastReconnectCheck > 5000) {
    lastReconnectCheck = now;
    connectWiFi();
    logWiFiStatus();
  }

  delay(20);
}
