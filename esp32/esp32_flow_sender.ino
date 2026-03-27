#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <time.h>

// ===== WiFi Configuration =====
const char* WIFI_SSID = "NOOPUR Y";
const char* WIFI_PASSWORD = "1206NOOPUR";

// ===== Azure IoT Hub Configuration =====
// Get this from Azure Portal: IoT Hub -> Devices -> ESP32-b330671e -> Connection String (primary)
// Format: HostName=aquasense-hub-unique.azure-devices.net;DeviceId=ESP32-b330671e;SharedAccessKey=xxxxx
const char* IOT_HUB_HOST = "aquasense-hub-unique.azure-devices.net";
const char* DEVICE_ID = "ESP32-b330671e";
const char* DEVICE_KEY = "8rGQRnkIQ1I/eW+flPtDh4QwcFdlZg7/EBY/9x9656U="; // Extract from connection string

// ===== Flow Sensor Configuration =====
const int FLOW_SENSOR_PIN = 4;
const unsigned long SEND_INTERVAL_MS = 5000; // Send every 5 seconds

// ===== Global Variables =====
volatile unsigned long pulseCount = 0;
unsigned long lastSendAt = 0;
WiFiClientSecure wifiClient;
PubSubClient mqttClient(wifiClient);
char mqttTopic[128];
char mqttClientId[128];

// ===== Interrupt Handler =====
void IRAM_ATTR onPulse() {
  pulseCount++;
}

// ===== WiFi Connection =====
void connectWiFi() {
  Serial.print("Connecting to WiFi: ");
  Serial.println(WIFI_SSID);
  
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  
  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 20) {
    delay(500);
    Serial.print(".");
    attempts++;
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nWiFi Connected!");
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\nFailed to connect to WiFi");
  }
}

// ===== MQTT Connection =====
void connectToAzureIoT() {
  Serial.println("Connecting to Azure IoT Hub...");
  
  // Set time for SSL verification
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");
  time_t now = time(nullptr);
  while (now < 24 * 3600) {
    delay(100);
    now = time(nullptr);
  }
  Serial.print("Time set to: ");
  Serial.println(ctime(&now));
  
  // Use Azure public cert
  wifiClient.setInsecure(); // For development; use proper cert in production
  
  // Setup MQTT client
  snprintf(mqttClientId, sizeof(mqttClientId), "%s/%s/", IOT_HUB_HOST, DEVICE_ID);
  snprintf(mqttTopic, sizeof(mqttTopic), "devices/%s/messages/events/", DEVICE_ID);
  
  mqttClient.setServer(IOT_HUB_HOST, 8883);
  
  // Generate SAS token (simplified - should use proper SAS token generation)
  // For now, we'll use the device key directly with Azure format
  String username = IOT_HUB_HOST;
  username += "/";
  username += DEVICE_ID;
  username += "/?api-version=2021-04-12";
  
  if (mqttClient.connect(mqttClientId, username.c_str(), DEVICE_KEY)) {
    Serial.println("Connected to Azure IoT Hub!");
    return;
  }
  
  Serial.print("Failed to connect. Code: ");
  Serial.println(mqttClient.state());
}

// ===== Send Telemetry to Azure =====
void sendTelemetry(unsigned long pulses) {
  if (WiFi.status() != WL_CONNECTED) {
    connectWiFi();
  }
  
  if (!mqttClient.connected()) {
    connectToAzureIoT();
  }
  
  if (mqttClient.connected()) {
    // Create JSON payload
    StaticJsonDocument<256> doc;
    doc["deviceId"] = DEVICE_ID;
    doc["pulses"] = pulses;
    doc["flowRate"] = pulses * 0.133f; // Approximation for demo UX
    doc["timestamp"] = millis() / 1000;
    
    // Serialize to string
    String payload;
    serializeJson(doc, payload);
    
    // Publish to Azure IoT Hub
    bool success = mqttClient.publish(mqttTopic, payload.c_str());
    
    Serial.print("Telemetry sent: ");
    Serial.print(success ? "✓" : "✗");
    Serial.print(" | Pulses: ");
    Serial.print(pulses);
    Serial.print(" | Payload: ");
    Serial.println(payload);
  } else {
    Serial.println("MQTT not connected, cannot send telemetry");
  }
}

// ===== Setup =====
void setup() {
  Serial.begin(115200);
  delay(1000);
  
  Serial.println("\n\nAquaSense ESP32 - Azure IoT Hub Edition");
  Serial.println("=========================================");
  
  // Setup flow sensor
  pinMode(FLOW_SENSOR_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(FLOW_SENSOR_PIN), onPulse, FALLING);
  
  Serial.println("Flow sensor initialized on GPIO " + String(FLOW_SENSOR_PIN));
  
  // Connect to WiFi
  connectWiFi();
  
  // Connect to Azure IoT Hub
  delay(1000);
  connectToAzureIoT();
}

// ===== Main Loop =====
void loop() {
  // Keep MQTT connection alive
  if (!mqttClient.connected()) {
    delay(1000);
    connectToAzureIoT();
  }
  mqttClient.loop();
  
  unsigned long now = millis();
  
  // Send telemetry at intervals
  if (now - lastSendAt >= SEND_INTERVAL_MS) {
    noInterrupts();
    unsigned long pulses = pulseCount;
    pulseCount = 0;
    interrupts();
    
    if (pulses > 0 || lastSendAt == 0) { // Send even if 0 pulses on first send
      sendTelemetry(pulses);
    }
    
    lastSendAt = now;
  }
  
  delay(10);
}
