# Sensor Setup Configurations

Common IoT deployment configurations with hardware recommendations, wiring guides, and data formats for Aman IoT.

---

## Smart Home

### What to Monitor
- Temperature and humidity in living areas
- Door and window open/close
- Motion in entry points and common areas
- Optional: air quality (CO2, VOC), water leak detection

### Hardware

| Sensor | Location | Purpose |
|--------|---------|---------|
| DHT22 | Living room, bedroom, kitchen | Temp + humidity |
| Magnetic reed switch | Main door, windows | Open/close detection |
| PIR (HC-SR501) | Hallway, front entrance | Motion detection |
| Water leak sensor | Kitchen floor, under washing machine, bathroom | Flood/leak detection |

### ESP32 Wiring — DHT22

```
ESP32 3.3V  → DHT22 Pin 1 (VCC)
ESP32 GND   → DHT22 Pin 4 (GND)
ESP32 GPIO4 → DHT22 Pin 2 (DATA)
10kΩ resistor between VCC and DATA (pull-up)
```

### ESP32 Wiring — Door Sensor (Magnetic Reed Switch)

```
ESP32 GPIO5 → Reed switch terminal 1
ESP32 GND   → Reed switch terminal 2
(Use INPUT_PULLUP in code — no external resistor needed)
```

### Data Formats

```
# Temperature + humidity (DHT22)
sensor:living-room-01 temp:27.2 humidity:68

# Door sensor (1 = open, 0 = closed)
sensor:main-door-01 state:open
sensor:main-door-01 state:closed

# Motion detected
sensor:hallway-pir-01 motion:detected

# Water leak
sensor:kitchen-floor-01 water:detected
```

### Recommended Thresholds

```
Alert if living room temperature > 32°C
Warn if living room humidity > 85%
Critical alert if kitchen-floor water sensor triggers
Alert if main door open for more than 30 minutes
```

### ESP32 Code (Smart Home Node)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHT_PIN 4
#define DOOR_PIN 5
#define PIR_PIN 6

DHT dht(DHT_PIN, DHT22);

// ... (WiFi and Telegram setup as in getting-started.md)

void loop() {
  // Read environmental sensors every 5 minutes
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  sendToTelegram("sensor:living-room-01 temp:" + String(temp,1) + " humidity:" + String(humidity,1));

  // Door state — send on change only
  static int lastDoorState = -1;
  int doorState = digitalRead(DOOR_PIN);
  if (doorState != lastDoorState) {
    String state = (doorState == HIGH) ? "open" : "closed";
    sendToTelegram("sensor:main-door-01 state:" + state);
    lastDoorState = doorState;
  }

  delay(300000);
}
```

---

## Smart Farm

### What to Monitor
- Soil moisture per planting bed or zone
- Ambient temperature and humidity
- Rain detection
- Light levels (for greenhouse or indoor grow)

### Hardware

| Sensor | Location | Purpose |
|--------|---------|---------|
| Capacitive soil moisture sensor | Each planting zone | Irrigation trigger |
| DHT22 | Outdoor/greenhouse | Ambient temp + humidity |
| Rain sensor (YL-83) | Outdoor | Rain detection |
| LDR or BH1750 | Greenhouse | Light level monitoring |

### Raspberry Pi Wiring — Capacitive Soil Sensor

```
Sensor VCC → RPi 3.3V (Pin 1)
Sensor GND → RPi GND (Pin 6)
Sensor AOUT → MCP3008 CH0 (need ADC for RPi — GPIO is digital only)
```

Note: Raspberry Pi has no built-in ADC. Use MCP3008 (SPI ADC) or ADS1115 (I2C ADC) to read analog sensors.

### ESP32 Wiring — Soil Moisture

```
Sensor VCC → ESP32 3.3V
Sensor GND → ESP32 GND
Sensor AOUT → ESP32 GPIO34 (ADC1_CH6)
```

ESP32 has built-in ADC — no extra chip needed.

### Data Formats

```
# Soil moisture (percentage — 0% dry, 100% saturated)
sensor:bed-a-soil-01 moisture:42

# Multiple zones in one message
device:esp32-farm soil_a:42 soil_b:38 soil_c:55 temp:31.2 humidity:78

# Rain detection
sensor:outdoor-rain-01 rain:detected
sensor:outdoor-rain-01 rain:clear

# Light level
sensor:greenhouse-light-01 light:680
```

### Recommended Thresholds

```
Alert if soil moisture (bed-a) < 30% — needs watering
Alert if soil moisture (bed-a) > 90% — overwatered
Warn if outdoor temperature > 35°C — crop stress risk
Alert if temperature > 38°C — critical crop stress
```

### Python Script (Smart Farm, Raspberry Pi)

```python
import spidev
import time
import requests

BOT_TOKEN = "YOUR_BOT_TOKEN"
CHAT_ID = "YOUR_CHAT_ID"

spi = spidev.SpiDev()
spi.open(0, 0)  # MCP3008

def read_channel(channel):
    adc = spi.xfer2([1, (8 + channel) << 4, 0])
    data = ((adc[1] & 3) << 8) + adc[2]
    return data

def adc_to_percent(raw, dry=850, wet=300):
    percent = ((dry - raw) / (dry - wet)) * 100
    return max(0, min(100, percent))

def send_to_telegram(msg):
    requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
                  data={"chat_id": CHAT_ID, "text": msg})

while True:
    soil_raw = read_channel(0)
    soil_pct = adc_to_percent(soil_raw)
    msg = f"sensor:bed-a-soil-01 moisture:{soil_pct:.1f}"
    send_to_telegram(msg)
    time.sleep(600)  # every 10 minutes
```

---

## Aquarium / Aquaculture

### What to Monitor
- Water pH
- Water temperature
- Dissolved oxygen
- Water level (optional)

### Hardware

| Sensor | Notes |
|--------|-------|
| pH sensor (Atlas Scientific EZO-pH) | Industrial grade, accurate, I2C |
| DS18B20 waterproof probe | Accurate water temperature |
| Dissolved Oxygen sensor (Atlas Scientific EZO-DO) | Requires maintenance/calibration |
| Ultrasonic (HC-SR04) | Water level measurement |

Note: Consumer-grade pH sensors (with BNC connector) are cheaper but need frequent calibration (weekly). Atlas Scientific sensors are more accurate and easier to use with microcontrollers.

### ESP32 Wiring — pH Sensor (Atlas Scientific EZO)

```
EZO TX → ESP32 RX2 (GPIO16)
EZO RX → ESP32 TX2 (GPIO17)
EZO GND → ESP32 GND
EZO VCC → ESP32 3.3V
```

### Data Formats

```
# Full aquaculture reading
device:aqua-tank-01 ph:7.2 temp:27.5 do:6.8

# Individual sensors
sensor:aqua-ph-01 ph:7.2
sensor:aqua-temp-01 temp:27.5
sensor:aqua-do-01 do:6.8

# Water level (distance from sensor to water surface, in cm)
sensor:aqua-level-01 level:15
```

### Recommended Thresholds

```
# pH — tilapia/catfish
Alert if ph < 6.5
Alert if ph > 8.5
Warn if ph < 7.0 or ph > 8.0

# Dissolved oxygen
Critical alert if do < 3
Warn if do < 5

# Temperature — tropical species
Warn if temp > 30°C
Alert if temp > 32°C
Warn if temp < 24°C
Alert if temp < 20°C
```

### What to Know About DO Readings

Dissolved oxygen drops naturally before dawn — photosynthetic organisms consume it overnight and replenish it during the day. Expect lower readings at 5–6am. Set your critical threshold accordingly and note the time-of-day pattern when reviewing alerts.

---

## Server Room

### What to Monitor
- Temperature (primary concern)
- Humidity
- Optional: UPS status via SNMP or serial, door access

### Hardware

| Sensor | Notes |
|--------|-------|
| DHT22 | Temperature + humidity |
| Multiple DHT22 units | Monitor hot/cold aisles separately |
| Magnetic reed switch | Server room door access log |

### Placement Recommendations

- **Hot aisle**: at rack exhaust level — highest temperature point
- **Cold aisle**: at rack intake level — measures cooling effectiveness
- **Room ambient**: at chest height away from racks
- **Under raised floor**: if applicable, monitor plenum temperature

### Data Formats

```
# Server room with location specificity
device:server-room-01 temp_hot:27.1 temp_cold:21.3 temp_ambient:24.2 humidity:52

# Single sensor
sensor:hot-aisle-01 temp:27.1

# Door access
sensor:server-room-door state:open
sensor:server-room-door state:closed
```

### Recommended Thresholds

```
# Temperature — server room
Warn if hot aisle temp > 27°C
Critical alert if hot aisle temp > 30°C
Critical alert if ambient temp > 27°C

# Humidity
Warn if humidity > 65%
Critical alert if humidity > 75% (condensation risk)
Warn if humidity < 35% (static discharge risk)

# Door
Warn if server room door open for more than 5 minutes outside business hours
```

### ESP32 Multi-Point Code

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

DHT dht_hot(4, DHT22);     // Hot aisle sensor
DHT dht_cold(5, DHT22);    // Cold aisle sensor
DHT dht_ambient(6, DHT22); // Room ambient

void loop() {
  float t_hot = dht_hot.readTemperature();
  float t_cold = dht_cold.readTemperature();
  float t_amb = dht_ambient.readTemperature();
  float humidity = dht_ambient.readHumidity();

  String msg = "device:server-room-01"
               " temp_hot:" + String(t_hot, 1) +
               " temp_cold:" + String(t_cold, 1) +
               " temp_ambient:" + String(t_amb, 1) +
               " humidity:" + String(humidity, 1);

  sendToTelegram(msg);
  delay(120000);  // Every 2 minutes — more frequent for critical infrastructure
}
```
