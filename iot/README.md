<div align="center">

# Aman IoT

### Your AI-powered smart environment companion.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An AI companion that receives sensor data from IoT devices via Telegram, learns your environment's normal patterns, detects anomalies, and alerts you with context — not just numbers.

[Quick Start](#-quick-start) · [See It In Action](#-see-it-in-action) · [Use Cases](#-use-cases) · [Commands](#-commands-reference) · [How It Works](#-how-it-works)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase iot
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/iot)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

IoT devices generate data 24/7. Most people just see raw numbers.

Your ESP32 sends temperature readings every 5 minutes. Your phone shows graphs. But the graphs don't tell you if 31°C is normal or alarming. They don't know if your server room is trending toward failure. They don't notice that your soil moisture drops every Tuesday because someone forgets to water on Mondays.

No context. No patterns. No intelligence. Your ESP32 knows the temperature but doesn't know it's abnormal.

## The Solution

Send sensor data to Telegram. Aman IoT does the rest.

It learns what "normal" looks like for your environment — per sensor, per time of day, per season. It detects when something deviates. It alerts you with context: not "temperature is 35°C" but "temperature spiked to 35°C at 3am — 9°C above normal for this time."

**Works with any device that can send a Telegram message. That's your entire setup requirement.**

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## See It In Action

A routine reading with pattern context:

```
ESP32: temp:31.2 humidity:85

Aman IoT: 📡 Living Room Update
          🌡️ Temperature: 31.2°C (⚠️ 5°C above normal for 2pm)
          💧 Humidity: 85% (normal for current weather)

          Pattern: Usually 26°C at this time. AC might be off?
```

A critical safety alert:

```
Aman IoT: 🔴 CRITICAL ALERT — Water Sensor

          💧 Water detected in kitchen!
          Sensor: kitchen-floor-01
          Time: 3:42 AM

          This sensor has never triggered before.
          Possible pipe leak or appliance overflow.

          ⚡ Check immediately!
```

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where Aman IoT lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |
| IoT device | ESP32, Raspberry Pi, Arduino, or any device that can make HTTP requests |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/iot

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman IoT
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

Then flash this to your ESP32:

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";
const char* botToken = "YOUR_BOT_TOKEN";
const char* chatId = "YOUR_CHAT_ID";

DHT dht(4, DHT22);

void sendToTelegram(String msg) {
  HTTPClient http;
  String url = "https://api.telegram.org/bot" + String(botToken) +
               "/sendMessage?chat_id=" + String(chatId) + "&text=" + msg;
  http.begin(url);
  http.GET();
  http.end();
}

void setup() {
  dht.begin();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  sendToTelegram("sensor:living-room-01 temp:" + String(temp,1) + " humidity:" + String(humidity,1));
  delay(300000); // every 5 minutes
}
```

Your device is now sending data. Aman IoT starts learning your environment immediately.

---

## What Makes It Different

<table>
<tr>
<td width="50%">

### Pattern Learning
Not just thresholds — Aman IoT learns what "normal" looks like for each sensor at each time of day. Alerts come with context: "5°C above normal for 2pm" not just "temperature high."

</td>
<td width="50%">

### Anomaly Intelligence
Sudden spikes, gradual drift, missing readings, time-of-day anomalies, sensor correlations — multiple anomaly types detected automatically.

</td>
</tr>
<tr>
<td width="50%">

### Zero Infrastructure
No MQTT broker. No Grafana. No cloud dashboard. Your device sends a Telegram message. Aman IoT handles everything else.

</td>
<td width="50%">

### Daily Reports
Every morning: all sensors summarised, anomalies flagged, patterns learned, trends highlighted. One message to start the day informed.

</td>
</tr>
</table>

---

## Use Cases

<table>
<tr>
<td width="50%">

### Smart Home
Temperature and humidity in every room. Door and window sensors. Motion detection. Water leak alerts. Learn your home's normal — know when something is off.

</td>
<td width="50%">

### Smart Farm
Soil moisture per bed. Outdoor temperature. Rain detection. Know when to irrigate before your plants show stress. Detect patterns in moisture drop rates.

</td>
</tr>
<tr>
<td width="50%">

### Aquaculture
pH, dissolved oxygen, temperature — all tracked together. Get alerted before water quality reaches dangerous levels. Understand pre-dawn DO dip patterns.

</td>
<td width="50%">

### Server Room
Temperature at hot and cold aisles. Humidity. Door access. Get alerted at 28°C so you act before 30°C becomes a hardware risk.

</td>
</tr>
</table>

---

## Commands Reference

| Command | What it does |
|---------|-------------|
| `status` | Dashboard view of all sensors — current readings and status |
| `how's the house?` | Same as status — natural language version |
| `alert if [condition]` | Set a threshold: "alert if temperature > 32" |
| `what's normal?` | Show learned patterns per sensor — time-of-day baselines |
| `daily report` | Get your daily summary on demand |
| `weekly report` | Full week summary with trends |
| `add sensor [name]` | Register and configure a new sensor |
| `show [sensor] history` | Historical readings and patterns for a sensor |
| `change [sensor] threshold to [value]` | Update an alert threshold |
| `sensors` | List all registered sensors with last reading time |

---

## Works With

| Device | Notes |
|--------|-------|
| **ESP32** | WiFi built-in, cheap (~$5), Arduino-compatible. Best choice for new deployments. |
| **Raspberry Pi** | Full Linux, Python-native. Best for complex sensing or camera integration. |
| **Arduino + WiFi shield** | Classic Arduino with ESP8266 or W5500 for connectivity. |
| **NodeMCU (ESP8266)** | Cheaper than ESP32, less capable. Good for simple sensors. |
| **Any HTTP-capable device** | If it can make an HTTP GET request, it can send to Aman IoT. |

See [content/guides/getting-started.md](content/guides/getting-started.md) for code examples for each platform.

---

## How It Works

Aman IoT is built on the aman ecosystem — markdown configuration files that define an AI agent's personality, rules, workflows, and domain knowledge. No application code required.

```
iot/
├── identity/core.md          ← Agent personality & pattern-learning approach
├── rules/rules.md            ← What it always does / never does / thresholds
├── workflows/flow.md         ← 7 core workflows (reading, alert, status...)
├── skills/iot-skill.md       ← IoT domain expertise & sensor knowledge
├── content/
│   ├── templates/            ← Alert and report message formats
│   └── guides/               ← Setup guides and sensor configurations
└── config/                   ← Setup scripts and environment template
```

The aman ecosystem loads these files and gives the AI agent its capabilities. The agent runs via Telegram, processing both your messages and your devices' sensor data.

---

## Restore / Uninstall

```bash
# Restore your previous aman ecosystem config
bash config/teardown.sh <backup-directory>

# Backup directories are created automatically in iot/backup/
# when you run setup.sh
```

---

<div align="center">

Your sensors talk. Now they think.

Built with the [aman ecosystem](https://github.com/amanasmuei/aman) — zero application code.

</div>
