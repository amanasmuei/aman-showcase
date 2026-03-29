# Getting Started with Aman IoT

## What You're Setting Up

You're connecting IoT devices (ESP32, Raspberry Pi, Arduino) to send sensor data directly to a Telegram bot. Aman IoT receives that data, learns your environment's normal patterns, and alerts you when something is wrong.

No cloud platform. No dashboard login. Just your devices, Telegram, and an AI that understands your environment.

---

## Step 1: Set Up Your Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Follow the prompts — choose a name and username for your bot
4. BotFather will give you a **bot token** — looks like `7284930214:AAHx...` — save this
5. Start a conversation with your new bot (search for it by username, hit Start)
6. Get your **chat ID**: message `@userinfobot` in Telegram, it will reply with your chat ID

You now have:
- `TELEGRAM_BOT_TOKEN` — the bot token from BotFather
- `TELEGRAM_CHAT_ID` — your personal chat ID

---

## Step 2: Connect Your IoT Device

Your device just needs to send a text message to the Telegram Bot API. That's it.

### ESP32 (Arduino IDE)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* botToken = "YOUR_BOT_TOKEN";
const char* chatId = "YOUR_CHAT_ID";

DHT dht(4, DHT22);  // DHT22 sensor on GPIO 4

void sendToTelegram(String message) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = "https://api.telegram.org/bot" + String(botToken) +
                 "/sendMessage?chat_id=" + String(chatId) +
                 "&text=" + message;
    http.begin(url);
    int httpCode = http.GET();
    http.end();
  }
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (!isnan(temp) && !isnan(humidity)) {
    String msg = "sensor:living-room-01 temp:" + String(temp, 1) +
                 " humidity:" + String(humidity, 1);
    sendToTelegram(msg);
    Serial.println("Sent: " + msg);
  }

  delay(300000);  // Send every 5 minutes
}
```

Required libraries (install via Arduino Library Manager):
- `DHT sensor library` by Adafruit
- `Adafruit Unified Sensor`

### Raspberry Pi (Python 3)

```python
#!/usr/bin/env python3
import board
import adafruit_dht
import requests
import time
import logging

BOT_TOKEN = "YOUR_BOT_TOKEN"
CHAT_ID = "YOUR_CHAT_ID"
SENSOR_ID = "rpi-living-room-01"
INTERVAL = 300  # 5 minutes

logging.basicConfig(level=logging.INFO)
dht_device = adafruit_dht.DHT22(board.D4)

def send_to_telegram(message: str) -> None:
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    try:
        response = requests.post(url, data={"chat_id": CHAT_ID, "text": message}, timeout=10)
        response.raise_for_status()
        logging.info(f"Sent: {message}")
    except requests.RequestException as e:
        logging.error(f"Failed to send: {e}")

def read_sensor():
    try:
        temp = dht_device.temperature
        humidity = dht_device.humidity
        return temp, humidity
    except RuntimeError as e:
        logging.warning(f"Sensor read error: {e}")
        return None, None

if __name__ == "__main__":
    while True:
        temp, humidity = read_sensor()
        if temp is not None and humidity is not None:
            msg = f"sensor:{SENSOR_ID} temp:{temp:.1f} humidity:{humidity:.1f}"
            send_to_telegram(msg)
        time.sleep(INTERVAL)
```

Install dependencies:
```bash
pip3 install adafruit-circuitpython-dht requests
```

### Message Format

Just send text messages. All of these work:

```
# Simple
temp:28.5 humidity:75

# With sensor ID (recommended — helps Aman IoT track multiple devices)
sensor:living-room-01 temp:28.5 humidity:75

# Natural language
temperature 28.5 degrees, humidity 75 percent

# Multiple sensors in one message
device:esp32-farm soil:42 temp:31.2 light:680
```

---

## Step 3: Tell Aman IoT About Your Sensors

Once your device is sending data, tell the bot what it's measuring and where it is. Just send a message:

```
I just set up a temperature and humidity sensor in the living room
```

Or respond to the bot's first detection of your sensor:

```
Aman IoT: New sensor detected — no profile found for "esp32-01"
          Received: temp:28.5,humidity:75
          What does this sensor monitor and where is it located?

You: Living room — temperature and humidity. Alert if temp > 32°C.
```

That's it. The bot registers the sensor, sets your threshold, and starts learning patterns.

---

## Step 4: Set Alert Thresholds

You can set thresholds at any time by just telling the bot:

```
Alert if temperature exceeds 32°C
Warn me if humidity goes above 85%
Critical alert if water sensor triggers
Alert if server room temp > 27°C
```

The bot confirms each threshold and saves it.

---

## Step 5: Let It Learn

Aman IoT builds your environment's normal patterns automatically. After about 50 readings per sensor, it knows what's typical for each time of day. After a week, it knows day-of-week patterns. After a month, it's tuned to your environment.

You can ask at any time:

```
What's normal for the living room?
Show me patterns for all sensors
What's the server room usually at night?
```

---

## What to Do Next

- **Check status** anytime: "how's the house?" or "status"
- **Get a report**: "daily report" or "weekly summary"
- **Add more sensors**: just start sending data from them, the bot will prompt you
- **Adjust thresholds**: "change living room alert to 33°C"
- **View history**: "show me living room temperature over the last 7 days"

---

## Tips

- **Use sensor IDs** in your messages — even just `sensor:bedroom-01` makes it much easier to manage multiple devices
- **Send data regularly** — consistent intervals (every 5 min) build better patterns than irregular bursts
- **Don't tune out critical alerts** — if you're getting too many, adjust the threshold instead of ignoring the bot
- **Monsoon season**: if you're in Malaysia, expect high humidity readings during monsoon — set your thresholds accordingly and the bot will learn the seasonal baseline
