# Aman IoT — IoT Domain Expertise

## Common Sensors

### Environmental

| Sensor | Measures | Notes |
|--------|---------|-------|
| **DHT11** | Temperature + Humidity | ±2°C accuracy, cheap, good for indoor use |
| **DHT22** | Temperature + Humidity | ±0.5°C accuracy, wider range (-40 to 80°C), preferred |
| **BME280** | Temp + Humidity + Pressure | Most accurate environmental sensor, I2C/SPI |
| **DS18B20** | Temperature only | Waterproof probe version available, good for liquids |
| **LDR** | Light level (lux approximation) | Analog, simple brightness detection |
| **BH1750** | Light (lux, calibrated) | Digital, I2C, much more accurate than LDR |

### Motion & Presence

| Sensor | Measures | Notes |
|--------|---------|-------|
| **PIR (HC-SR501)** | Motion (passive infrared) | Detects body heat movement, 3-7m range |
| **Magnetic Reed Switch** | Door/window open/close | Binary — closed circuit when magnet aligned |
| **Ultrasonic (HC-SR04)** | Distance (2cm–400cm) | Good for liquid levels, object detection |

### Air Quality

| Sensor | Measures | Notes |
|--------|---------|-------|
| **MQ-2** | LPG, methane, smoke | Needs warm-up time, requires calibration |
| **MQ-135** | CO2, NH3, benzene, smoke | General air quality, common in indoor monitors |
| **MQ-7** | Carbon monoxide | Specific CO detection |
| **CCS811** | eCO2 + TVOC | Digital, I2C, better calibrated than MQ series |

### Water & Soil

| Sensor | Measures | Notes |
|--------|---------|-------|
| **Water level / flood** | Water presence or depth | Resistive or capacitive; simple binary or analog |
| **Soil moisture** | Volumetric water content | Capacitive sensors last longer than resistive |
| **pH sensor** | Water pH (0–14) | Requires calibration with buffer solutions |
| **Dissolved Oxygen (DO)** | mg/L oxygen in water | Temperature-dependent, needs compensation |
| **TDS/EC sensor** | Total dissolved solids | Good for hydroponic and aquaculture monitoring |

---

## IoT Boards

### ESP32
- **Best for**: WiFi-connected sensors, battery-powered nodes, cheap deployments
- **Key features**: Dual-core, built-in WiFi + Bluetooth, deep sleep mode (ultra-low power), Arduino-compatible
- **Flash size**: Typically 4MB; enough for OTA updates
- **Power**: 3.3V logic, 5V input via USB or VIN
- **Price**: ~$3–8 USD

### Raspberry Pi (3B+, 4, Zero W)
- **Best for**: Complex processing, camera integration, local data logging, running Python scripts
- **Key features**: Full Linux OS, GPIO pins, I2C/SPI/UART, USB, runs Python natively
- **Pi Zero W**: Tiny form factor, single-core, ~$15 — good for simple sensor nodes
- **Power**: 5V via USB-C; always use proper shutdown to avoid SD card corruption

### Arduino (Uno, Nano, Mega)
- **Best for**: Simple sensor reading, no WiFi needed (add ESP8266/ESP32 as WiFi module)
- **Key features**: Reliable, simple, 5V logic, extensive library support
- **WiFi**: Pair with ESP8266 shield or use Arduino Uno WiFi Rev2

### NodeMCU (ESP8266-based)
- **Best for**: Simple WiFi sensors, lower cost than ESP32
- **Key features**: Built-in WiFi, LUA scripting or Arduino IDE, 10-bit ADC
- **Limitation**: Single-core, less RAM than ESP32, only 1 ADC pin

---

## Sending Data to Telegram

### Method 1: ESP32 → HTTP → Telegram Bot API (simplest)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "your_wifi";
const char* password = "your_password";
const char* botToken = "your_bot_token";
const char* chatId = "your_chat_id";

DHT dht(4, DHT22);  // DHT22 on pin 4

void sendToTelegram(String message) {
  HTTPClient http;
  String url = "https://api.telegram.org/bot" + String(botToken) +
               "/sendMessage?chat_id=" + String(chatId) +
               "&text=" + message;
  http.begin(url);
  http.GET();
  http.end();
}

void setup() {
  WiFi.begin(ssid, password);
  dht.begin();
  while (WiFi.status() != WL_CONNECTED) delay(500);
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  String msg = "temp:" + String(temp) + ",humidity:" + String(humidity) + ",sensor:living-room-01";
  sendToTelegram(msg);
  delay(300000);  // every 5 minutes
}
```

### Method 2: Raspberry Pi → Python → Telegram

```python
import board
import adafruit_dht
import requests
import time

BOT_TOKEN = "your_bot_token"
CHAT_ID = "your_chat_id"
dht = adafruit_dht.DHT22(board.D4)

def send_to_telegram(message):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    requests.post(url, data={"chat_id": CHAT_ID, "text": message})

while True:
    temp = dht.temperature
    humidity = dht.humidity
    msg = f"temp:{temp:.1f},humidity:{humidity:.1f},sensor:rpi-bedroom-01"
    send_to_telegram(msg)
    time.sleep(300)  # every 5 minutes
```

### Method 3: MQTT → Bridge → Telegram

For larger deployments:
- Devices publish to MQTT broker (Mosquitto, HiveMQ)
- Bridge service (Node-RED, custom script) subscribes and forwards to Telegram
- Better for many devices, reduces direct API calls

---

## Smart Home Patterns

### Temperature Cycles
- **Day/night cycle**: Typical Malaysian home rises from ~25°C at 6am to ~30°C by 2pm, falls after sunset
- **AC pattern**: Sharp drop when AC turns on, gradual rise when off — correlates with time of day and occupancy
- **Anomaly indicators**: Temperature rising overnight, unusual spikes when no occupants home

### Humidity Patterns
- **Cooking**: Kitchen humidity spikes 10–20% during meal preparation (30–45 min duration)
- **Rain**: Outdoor humidity approaches 90–100%, indoor near windows rises sympathetically
- **AC operation**: AC room drops humidity below 60%, sometimes below 50% with extended use
- **Monsoon baseline**: Malaysian monsoon periods (Oct–Jan northeast coast, Apr–May southwest) → sustained high outdoor humidity

### Door/Motion Patterns
- **Leave/arrive times**: Door sensors capture routine schedule. Anomalies: door open at 3am, door open duration > 30 minutes
- **Motion occupancy**: Living room and kitchen motion correlate with waking hours. Anomaly: motion at 2am
- **Extended door open**: Correlation between door-open duration and temperature change in that zone

---

## Smart Farm Patterns

- **Soil moisture**: Drops after irrigation and watering, rises slowly between sessions. Alert when drops below crop-specific threshold
- **Crop stress temperature**: Most vegetables stress above 35°C. Fruiting crops affected by temperature swings
- **Rain detection**: Binary or capacitive rain sensor. Correlate with soil moisture — expected rise in moisture after rain
- **Light levels**: Grow light cycles (if indoor), cloud cover effects on outdoor crops, shade cloth impact

---

## Aquaculture

### Water Quality Targets

| Parameter | Normal Range | Critical |
|-----------|-------------|---------|
| pH | 6.5–8.5 (species-dependent) | < 6.0 or > 9.0 |
| Dissolved Oxygen | > 5 mg/L | < 3 mg/L |
| Temperature (tropical fish) | 24–28°C | < 18°C or > 32°C |
| Temperature (catfish/tilapia) | 25–32°C | < 20°C |
| Ammonia (NH3) | < 0.02 mg/L | > 0.1 mg/L |
| TDS (freshwater) | 50–200 ppm | Species-dependent |

- **pH swings**: More dangerous than stable slightly-out-of-range pH. Rapid swings cause stress even if both endpoints are acceptable
- **DO crash patterns**: Drops before dawn (plants/algae consume oxygen overnight), recovers after sunrise
- **Temperature-DO correlation**: Higher water temperature holds less dissolved oxygen — watch both together

---

## Server Room

- **Ideal temperature**: 18–27°C
- **Ideal humidity**: 40–60%
- **Warning threshold**: Temp > 27°C, humidity > 65% or < 35%
- **Critical threshold**: Temp > 30°C (immediate alert — hardware at risk), humidity > 75% (condensation risk)
- **Failure pattern**: Temperature rises slowly over hours (cooling failure) vs. sudden spike (local hot spot, equipment failure)
- **Correlation**: Server load spikes correlate with temperature rises — check if anomaly is load-driven

---

## Malaysian Climate Context

- **Typical outdoor temperature**: 24–34°C year-round
- **Typical outdoor humidity**: 70–90% (higher during monsoon seasons)
- **Northeast monsoon** (Oct–Mar, east coast): Heavy rain, high humidity, flooding risk → watch water sensors
- **Southwest monsoon** (May–Sep): More moderate, still humid
- **Urban heat island**: City sensors read 2–4°C higher than suburban/rural equivalents
- **AC prevalence**: Most Malaysian homes use split-unit ACs. Expect sharp temperature gradients between AC and non-AC rooms

---

## Anomaly Detection Patterns

| Type | Description | Example |
|------|-------------|---------|
| **Sudden spike** | Value jumps > 20% in one reading | Temp: 26°C → 38°C |
| **Gradual drift** | Slow trend in one direction over hours/days | Server room rising 0.5°C/day over a week |
| **Missing readings** | Expected report not received | Device offline, power failure, WiFi lost |
| **Time-of-day anomaly** | Normal value at wrong time | Motion detected at 3am in empty building |
| **Sensor correlation break** | Two correlated sensors diverge unexpectedly | Indoor/outdoor humidity usually track, now they don't |
| **Sustained out-of-range** | Brief exceedances are common; sustained is a problem | Humidity > 80% for 6 consecutive hours |
| **Physically implausible** | Value outside sensor's physical range | DHT22 reading -127°C = sensor failure |
