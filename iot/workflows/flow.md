# Aman IoT — Workflows

## 1. reading — Incoming Sensor Data

**Trigger**: A device sends a sensor reading to the Telegram bot.

**Steps**:
1. **Parse** the incoming message → extract sensor ID (or infer from context), value(s), unit(s), and any metadata
2. **Identify** the sensor → look up registered device metadata from memory; if unknown, flag as unregistered and proceed with available information
3. **Validate** the reading → check for physical plausibility; reject and log obviously bad values (sensor errors)
4. **Store** the reading as a timestamped fact in memory
5. **Load** this sensor's learned patterns and user-defined thresholds
6. **Compare** reading against all applicable thresholds:
   - User-defined critical threshold → trigger `alert` workflow if breached
   - User-defined warning threshold → trigger `alert` workflow at warning level
   - Learned time-of-day pattern → flag as anomaly if > 2 SD from baseline
7. **Update** the sensor's running pattern model with the new data point
8. **Respond** with a brief confirmation:
   - Routine: sensor name, value, brief context (vs normal)
   - Anomalous: value + deviation from normal + direction of trend
   - New sensor: acknowledge and prompt for setup details

**Example response (routine)**:
```
📡 Living Room — 2:32 PM
🌡️ Temperature: 28.1°C (normal, avg 27.8°C at this time)
💧 Humidity: 72% (normal)
```

**Example response (anomalous)**:
```
📡 Living Room — 2:32 PM
🌡️ Temperature: 31.4°C (⚠️ 3.6°C above normal for 2pm)
💧 Humidity: 72% (normal)

Trend: rising since 1pm. AC might be off?
```

---

## 2. alert — Anomaly Detected

**Trigger**: Threshold breach or anomaly detected during `reading` workflow, or called directly when a safety-critical sensor fires.

**Steps**:
1. **Classify severity**:
   - `CRITICAL`: hard safety limit breached, binary sensor triggered (water, smoke, motion), or health-risk range entered
   - `WARNING`: approaching limit, outside learned pattern by significant margin, sustained drift detected
   - `INFO`: minor deviation, logged only, no active notification
2. **Gather context**:
   - Current reading and the threshold it breached
   - Last 5 readings for this sensor (trend direction)
   - How long since last normal reading
   - Whether this sensor has triggered before (first-time alert vs recurring)
3. **Compose alert** with:
   - Severity header (CRITICAL / WARNING)
   - Sensor name and location
   - Current value and what is wrong
   - Historical context (trend, time since normal)
   - Suggested action (informational only — user decides)
4. **Send alert** immediately
5. **Store** the anomaly as a correction in memory (for pattern refinement and reporting)

**Critical alert format**:
```
🔴 CRITICAL ALERT — [Sensor Name]

[Clear statement of what happened]
Sensor: [sensor-id]
Time: [timestamp]

[Context: trend, history, first-time or recurring]
[Possible cause]

⚡ [Suggested immediate action]
```

**Warning alert format**:
```
⚠️ WARNING — [Sensor Name]

[Clear statement of what is unusual]
Current: [value] (normal: [baseline])
Trend: [direction and duration]

[Suggested action or monitoring note]
```

---

## 3. status — House Status Check

**Trigger**: User sends "status", "how's the house?", "show all sensors", or similar.

**Steps**:
1. **Load** all registered sensors from memory
2. **Retrieve** the latest reading for each sensor
3. **Evaluate** each sensor's current state:
   - Within normal range → green
   - Minor anomaly or approaching threshold → yellow
   - Threshold breached or critical → red
   - No recent data (sensor may be offline) → grey
4. **Compose** a dashboard-style summary:
   - List all sensors grouped by location or type
   - Show current value + status indicator for each
   - Highlight anything that is not green
   - Note sensors that have not reported recently
5. **Add** a brief one-line summary at the top ("Everything looks normal" or "2 things need attention")

**Example**:
```
🏠 Home Status — 9:47 PM

✅ Living Room: 26.2°C, 68% humidity (normal)
✅ Main Door: Closed since 7:31 PM
⚠️ Server Room: 28.1°C (approaching 30°C warning)
✅ Kitchen Motion: Last movement 6:23 PM
🔘 Garden Sensor: No data in 47 minutes

1 warning, 1 sensor offline.
```

---

## 4. pattern — What's Normal?

**Trigger**: User sends "what's normal?", "show patterns", "what does [sensor] usually read?", or similar.

**Steps**:
1. **Identify** which sensor(s) the user is asking about (all sensors if no specific request)
2. **Load** the learned pattern model for each sensor from memory
3. **Format** patterns in human-readable form:
   - **Time-of-day patterns**: average value per 3-hour block across the day
   - **Day-of-week patterns**: if significant variation exists (e.g., weekends vs weekdays)
   - **Trend patterns**: typical direction at certain times (room heats up in afternoon, cools at night)
   - **Correlation patterns**: if known (e.g., outdoor temp correlates with server room temp)
4. **Show** how many readings the pattern is based on (confidence indicator)
5. **Note** any patterns still being learned (insufficient data)

**Example**:
```
📊 Living Room Temperature — Learned Patterns
Based on 847 readings over 12 days.

Typical values:
  00:00–06:00: 25.2°C (cool, night)
  06:00–12:00: 27.1°C (warming, morning)
  12:00–18:00: 29.4°C (peak, AC on)
  18:00–24:00: 27.8°C (cooling, evening)

Day of week: No significant variation detected.
Pattern confidence: High.
```

---

## 5. threshold — Set or Adjust Thresholds

**Trigger**: User sets or updates a threshold — "alert if temperature > 32", "warn me if humidity > 85%", "if water sensor triggers, critical alert".

**Steps**:
1. **Parse** the user's instruction:
   - Sensor (which sensor or location)
   - Condition (>, <, ==, "triggers")
   - Value and unit
   - Severity (critical, warning, or infer from phrasing)
2. **Check** if a threshold already exists for this sensor/condition:
   - If yes: confirm before overwriting, show old vs new
   - If no: new threshold
3. **Validate** the threshold is physically reasonable for the sensor type
4. **Save** to memory as a decision entry
5. **Confirm** with a clear summary of what will trigger an alert

**Example**:
```
User: alert if temperature > 32

Aman IoT: ✅ Threshold saved.

Living Room Temperature:
  ⚠️ Warning: above 30°C
  🔴 Critical: above 32°C

These thresholds apply to all temperature sensors unless you specify a location.
Say "alert if [location] temperature > [value]" to set sensor-specific thresholds.
```

---

## 6. report — Daily / Weekly Environmental Report

**Trigger**: Scheduled (daily at 7am, weekly on Monday) or requested by user ("daily report", "weekly summary").

**Steps**:
1. **Gather** all sensor data for the report period (24h for daily, 7d for weekly)
2. **Compute** for each sensor:
   - Min, max, average readings
   - Time spent above/below thresholds
   - Number of anomalies
   - Trend direction vs previous period
3. **Summarise** anomalies:
   - List all threshold breaches with time and duration
   - List pattern anomalies (unusual readings that did not breach hard thresholds)
4. **Highlight** patterns learned or updated during the period
5. **Flag** any sensors that need attention (increasing drift, inconsistent reporting)
6. **Format** the report clearly with sections

**Daily report format**:
```
📊 Daily Report — [Date]

Overall: [one-sentence summary]

Sensor Summary:
  🌡️ Living Room: avg 27.1°C (↑0.3° vs yesterday), 0 alerts
  💧 Living Room: avg 69% humidity, 0 alerts
  🚪 Main Door: 3 opens today (7:12am, 12:38pm, 6:47pm)
  🖥️ Server Room: avg 24.2°C, 1 warning (peak 29.8°C at 2pm)

Anomalies: 1
  14:02 — Server Room: 29.8°C (peak, resolved within 20min)

Patterns updated: Living room afternoon baseline refined.
```

---

## 7. setup — Register a New Sensor

**Trigger**: Unrecognised sensor sends data, or user says "add sensor [name]", "new sensor", "I'm adding a [type] sensor".

**Steps**:
1. **Acknowledge** the new sensor or user's intent
2. **Ask** the following (can be answered in one message or step-by-step):
   - What does it measure? (temperature, humidity, motion, water, soil moisture, etc.)
   - Where is it located? (living room, kitchen, server room, garden)
   - What unit does it send? (°C, %, boolean, mg/L)
   - What device is it on? (ESP32, Raspberry Pi, Arduino, etc.)
   - Any initial thresholds to set?
3. **Save** the sensor profile to memory as a device entry
4. **Confirm** registration with a summary
5. **Explain** what to expect: "Aman IoT will start learning patterns for this sensor after about 50 readings. Initial alerts will use domain defaults until personal patterns are established."

**Example**:
```
New sensor detected: no profile found for "esp32-kitchen-01"
I received: temp:29.1,humidity:74

To set this up, tell me:
1. What does this sensor monitor? (temperature + humidity confirmed)
2. Where is it located?
3. Any alert thresholds to start with?
   (or I'll use domain defaults and learn from your data)

Just reply with something like: "kitchen sensor, alert if temp > 33"
```
