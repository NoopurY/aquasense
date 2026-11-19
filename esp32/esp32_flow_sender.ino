#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

/* ---------------- WIFI SETTINGS ---------------- */
const char* WIFI_SSID = "NOOPUR Y.";
const char* WIFI_PASSWORD = "1206NOOPUR";

/* ---------------- CLOUD SETTINGS ---------------- */
const char* TELEMETRY_URL = "https://aquasense-teal.vercel.app/api/telemetry/ingest";
const char* DEVICE_TOKEN = "603e982158244cdd8298c9a9b14a5198";

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

enum CloudSendResult {
  CLOUD_SEND_OK,
  CLOUD_SEND_NO_WIFI,
  CLOUD_SEND_HTTP_ERROR
};

// YF-S201 pulses per liter. Tune if needed.
float calibrationFactor = 450.0f;
float targetVolume = 0.5f;

bool filling = false;
uint32_t cycleStartPulses = 0;
unsigned long lastFillLogMs = 0;
unsigned long lastCloudSendMs = 0;
uint32_t lastCloudSentTotalPulses = 0;
const unsigned long cloudSendIntervalMs = 5000;
const unsigned long noWiFiLogIntervalMs = 30000;
unsigned long lastNoWiFiLogMs = 0;

/* ---------------- BUTTON DEBOUNCE ---------------- */
bool lastButtonReading = HIGH;
bool stableButtonState = HIGH;
unsigned long lastDebounceMs = 0;
const unsigned long debounceMs = 40;

/* ---------------- INTERRUPT ---------------- */
void IRAM_ATTR pulseCounter() {
  // Ignore very fast spikes from electrical noise
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
  // If your relay module is active-LOW, invert this line
  digitalWrite(RELAY_PIN, on ? HIGH : LOW);
}

void connectWiFi() {
  wl_status_t status = WiFi.status();

  if (status == WL_CONNECTED) {
    wifiConnectInProgress = false;
    return;
  }

  unsigned long now = millis();

  // Wait for current attempt to finish or timeout
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

  // Allow the very first WiFi.begin immediately after boot.
  if (lastWiFiBeginMs != 0 && now - lastWiFiBeginMs < wifiRetryIntervalMs) {
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

CloudSendResult sendDataToCloud(uint32_t pulsesDelta) {
  connectWiFi();
  if (WiFi.status() != WL_CONNECTED) {
    unsigned long now = millis();
    if (lastNoWiFiLogMs == 0 || now - lastNoWiFiLogMs >= noWiFiLogIntervalMs) {
      Serial.println("Telemetry skipped: WiFi unavailable");
      lastNoWiFiLogMs = now;
    }
    return CLOUD_SEND_NO_WIFI;
  }

  lastNoWiFiLogMs = 0;

  HTTPClient http;
  bool beginOk = false;

  if (String(TELEMETRY_URL).startsWith("https://")) {
    // Vercel endpoint uses TLS; allow connection without storing cert on device.
    static WiFiClientSecure secureClient;
    secureClient.setInsecure();
    beginOk = http.begin(secureClient, TELEMETRY_URL);
  } else {
    beginOk = http.begin(TELEMETRY_URL);
  }

  if (!beginOk) {
    Serial.println("HTTP begin failed");
    return CLOUD_SEND_HTTP_ERROR;
  }

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
  if (code >= 200 && code < 300) {
    return CLOUD_SEND_OK;
  }
  return CLOUD_SEND_HTTP_ERROR;
}

void sendTelemetryIfDue() {
  unsigned long now = millis();
  if (now - lastCloudSendMs < cloudSendIntervalMs) {
    return;
  }

  uint32_t currentTotal = readTotalPulses();
  uint32_t deltaPulses = currentTotal - lastCloudSentTotalPulses;

  // Skip empty packets unless currently filling.
  if (deltaPulses == 0 && !filling) {
    lastCloudSendMs = now;
    return;
  }

  CloudSendResult result = sendDataToCloud(deltaPulses);
  if (result == CLOUD_SEND_OK) {
    lastCloudSentTotalPulses = currentTotal;
    lastCloudSendMs = now;
    Serial.print("Cloud sync ok. Pulses sent: ");
    Serial.println((unsigned long)deltaPulses);
  } else if (result == CLOUD_SEND_HTTP_ERROR) {
    Serial.println("Cloud sync failed. Will retry.");
  }
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

  // Print pulse activity even if filling is not started by button
  if (pulses > 0) {
    Serial.print("Pulse/s: ");
    Serial.print((unsigned long)pulses);
    Serial.print(" | Flow Rate: ");
    Serial.print(flowRateLMin, 3);
    Serial.println(" L/min");
  } else if (filling) {
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
  lastCloudSendMs = millis();
  lastCloudSentTotalPulses = readTotalPulses();

  Serial.println("AquaSense ESP32 ready");
  Serial.println("Press button on GPIO25 to start automatic filling cycle");
  Serial.println("If motor is started manually, Pulse/s logs appear when pulses are detected");
}

/* ---------------- LOOP ---------------- */
void loop() {
  handleButton();
  updateFlowRate();
  updateFilling();
  sendTelemetryIfDue();

  static unsigned long lastReconnectCheck = 0;
  unsigned long now = millis();
  if (now - lastReconnectCheck > 5000) {
    lastReconnectCheck = now;
    connectWiFi();
    logWiFiStatus();
  }

  delay(20);
}