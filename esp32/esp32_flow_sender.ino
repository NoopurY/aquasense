#include <WiFi.h>
#include <HTTPClient.h>

// Replace these with your Wi-Fi credentials.
const char* WIFI_SSID = "YOUR_WIFI_SSID";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";

// Replace with your deployed backend URL and token from dashboard.
const char* API_URL = "http://YOUR_SERVER_IP:3000/api/telemetry/ingest";
const char* DEVICE_TOKEN = "YOUR_ESP32_DEVICE_TOKEN";

// YF-S201 style flowmeter pulse pin.
const int FLOW_SENSOR_PIN = 4;
const unsigned long SEND_INTERVAL_MS = 5000;

volatile unsigned long pulseCount = 0;
unsigned long lastSendAt = 0;

void IRAM_ATTR onPulse() {
  pulseCount++;
}

void connectWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(FLOW_SENSOR_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(FLOW_SENSOR_PIN), onPulse, FALLING);
  connectWiFi();
}

void sendTelemetry(unsigned long pulses) {
  if (WiFi.status() != WL_CONNECTED) {
    connectWiFi();
  }

  HTTPClient http;
  http.begin(API_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("x-device-token", DEVICE_TOKEN);

  float flowRateLpm = pulses * 0.133f; // Approximation for demo UX.

  String payload = "{";
  payload += "\"pulses\":" + String(pulses) + ",";
  payload += "\"flowRate\":" + String(flowRateLpm, 2);
  payload += "}";

  int code = http.POST(payload);
  String response = http.getString();

  Serial.print("HTTP Code: ");
  Serial.println(code);
  Serial.println(response);

  http.end();
}

void loop() {
  unsigned long now = millis();

  if (now - lastSendAt >= SEND_INTERVAL_MS) {
    noInterrupts();
    unsigned long pulses = pulseCount;
    pulseCount = 0;
    interrupts();

    sendTelemetry(pulses);
    lastSendAt = now;
  }

  delay(20);
}
