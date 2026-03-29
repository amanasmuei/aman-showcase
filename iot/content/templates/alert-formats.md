# Alert and Report Formats

Standard message formats used by Aman IoT for alerts, status checks, and reports. These templates ensure consistent, readable communications.

---

## Critical Alert

Used when: hard safety threshold breached, binary safety sensor triggered (water, smoke), first-ever trigger from an important sensor, health-critical condition entered.

```
🔴 CRITICAL ALERT — [Sensor Name / Location]

[One-sentence plain-language summary of what happened]
Sensor: [sensor-id]
Value: [current value] [unit]
Time: [HH:MM, Day Date]

[Context line — e.g., "This sensor has never triggered before." or "Last 3 readings: normal"]
[One likely cause or explanation]

⚡ [Single recommended immediate action]
```

**Example — Water Leak:**
```
🔴 CRITICAL ALERT — Water Sensor

💧 Water detected in kitchen!
Sensor: kitchen-floor-01
Value: TRIGGERED
Time: 3:42 AM, Sunday 29 Mar

This sensor has never triggered before.
Possible pipe leak or appliance overflow.

⚡ Check immediately!
```

**Example — Server Room Temperature:**
```
🔴 CRITICAL ALERT — Server Room

🌡️ Temperature has exceeded safe operating range.
Sensor: hot-aisle-01
Value: 31.4°C (threshold: 30°C)
Time: 2:17 PM, Tuesday 25 Mar

Trend: Rising since 1:45 PM. Up 4.2°C in 32 minutes.
Possible cooling failure or blocked airflow.

⚡ Check cooling units immediately. Hardware at risk above 35°C.
```

**Example — Aquaculture DO Crash:**
```
🔴 CRITICAL ALERT — Dissolved Oxygen

🐟 Dissolved oxygen critically low — fish at risk.
Sensor: aqua-do-01
Value: 2.4 mg/L (critical: < 3 mg/L)
Time: 5:12 AM, Thursday 20 Mar

Normal for this time is 5.8 mg/L. DO is 3.4 mg/L below baseline.
Aerator may have stopped. Pre-dawn DO dip is normal but this exceeds safe range.

⚡ Check aerator and increase aeration immediately.
```

---

## Warning Alert

Used when: approaching a threshold, outside learned pattern by significant margin, sustained drift detected, minor safety condition.

```
⚠️ WARNING — [Sensor Name / Location]

[Statement of what is unusual]
Current: [value] (normal for this time: [baseline])
Trend: [direction and duration — e.g., "Rising for 2 hours"]

[Optional: suggested monitoring or action]
```

**Example — Humidity Rising:**
```
⚠️ WARNING — Living Room Humidity

💧 Humidity is rising above normal levels.
Current: 83% (normal for 9pm: 68%)
Trend: Rising steadily for 3 hours.

Possible cause: rain, cooking, AC off. No critical threshold crossed yet.
Will alert if humidity exceeds 90%.
```

**Example — Door Left Open:**
```
⚠️ WARNING — Main Door

🚪 Main door has been open for 2 hours.
Sensor: main-door-01
Opened: 4:32 PM
Duration: 2 hours 7 minutes

Normal duration: 2–3 minutes. This is unusual.
Intentional? Reply "ok" to dismiss this alert.
```

**Example — Soil Moisture Low:**
```
⚠️ WARNING — Bed A Soil Moisture

🌱 Soil moisture is approaching the watering threshold.
Current: 34% (threshold: 30%)
Trend: Dropped from 61% over 18 hours.

At current rate, will reach threshold in approx. 4 hours.
Heads up for irrigation.
```

---

## Info Alert (Logged, No Notification)

These are stored in memory and appear in daily reports but do not trigger an active notification.

```
[timestamp] [sensor-id]: [value] — minor deviation (+[X]% from baseline), within acceptable range.
```

---

## Sensor Status Dashboard

Used for: "status", "how's the house?", or similar commands.

```
🏠 [Location] Status — [HH:MM, Date]

[One-line overall summary]

[Location Group 1]
  [icon] [Sensor Name]: [value] [unit] ([status — normal/warning/critical])
  [icon] [Sensor Name]: [value] [unit] ([status])

[Location Group 2]
  [icon] [Sensor Name]: [value] [unit] ([status])

[Offline / no recent data]
  🔘 [Sensor Name]: No data in [X] minutes

[Summary line: X sensors normal, X warning, X offline]
```

**Example:**
```
🏠 Home Status — 9:47 PM, Sunday 29 Mar

Everything mostly normal. One warning and one sensor offline.

Living Room
  🌡️ Temperature: 26.8°C (normal)
  💧 Humidity: 71% (normal)

Bedroom
  🌡️ Temperature: 25.1°C (normal)
  💧 Humidity: 68% (normal)

Server Room
  🌡️ Temperature: 28.3°C (⚠️ approaching 30°C threshold)
  💧 Humidity: 54% (normal)

Entry Points
  🚪 Main Door: Closed — last opened 6:47 PM
  🚶 Hallway Motion: Last detected 8:23 PM

No recent data
  🔘 Garden Sensor: No data in 52 minutes

4 sensors normal · 1 warning · 1 offline
```

---

## Daily Environmental Report

Delivered at 7:00 AM, or on demand with "daily report".

```
📊 Daily Report — [Day, Date]

[One-sentence overall summary for the day]

Sensor Summary:
  [icon] [Sensor]: avg [value], min [min], max [max] — [N] alerts
  [icon] [Sensor]: avg [value] — no alerts
  ...

Anomalies ([N] total):
  [time] — [sensor]: [what happened] ([duration])
  ...

Offline events:
  [sensor]: offline [time] to [time] ([duration])

Patterns updated:
  - [sensor]: [what was learned or refined]
```

**Example:**
```
📊 Daily Report — Sunday, 29 March

Mostly normal day. One server room warning. Garden sensor offline for 3 hours.

Sensor Summary:
  🌡️ Living Room Temp: avg 27.3°C, min 25.1°C, max 30.8°C — 0 alerts
  💧 Living Room Humidity: avg 69%, 0 alerts
  🌡️ Server Room Temp: avg 24.8°C, max 29.1°C — 1 warning
  🚪 Main Door: 3 opens (7:12am, 12:38pm, 6:47pm) — normal pattern
  🌱 Bed A Soil: avg 48%, reached 34% (watering threshold 30%) — 0 alerts

Anomalies (1):
  14:02 — Server Room: temp peaked at 29.1°C (close to 30°C threshold, resolved in 25 min)

Offline events:
  Garden Sensor: offline 11:07 AM to 2:14 PM (3h 7min) — WiFi likely

Patterns updated:
  - Living room: afternoon baseline (12pm–6pm) refined — 27.3°C → 27.8°C
  - Server room: Friday afternoon peak pattern confirmed
```

---

## Weekly Trends Report

Delivered Monday 7:00 AM, or on demand with "weekly report".

```
📈 Weekly Report — Week of [Date to Date]

[One-paragraph narrative summary of the week]

Week vs Previous Week:
  [Sensor]: [avg this week] vs [avg last week] ([change direction])
  ...

Notable Events This Week:
  - [Date]: [event description]
  - [Date]: [event description]

Patterns Learned:
  - [New pattern or refinement]

Sensors Needing Attention:
  - [Sensor]: [issue description — drift, frequent offline, repeated anomalies]

Recommendation:
  [One actionable insight based on the week's data]
```

**Example:**
```
📈 Weekly Report — Week of 23–29 March

A warm week overall. Living room temperatures were consistently 1.2°C higher than the previous week, likely due to reduced AC use. Server room showed a recurring afternoon spike on Tue and Thu — worth investigating.

Week vs Previous Week:
  🌡️ Living Room Temp: 28.1°C avg vs 26.9°C avg (↑1.2°C)
  💧 Living Room Humidity: 71% vs 69% (↑2%)
  🌡️ Server Room Temp: 25.1°C avg vs 24.3°C avg (↑0.8°C)

Notable Events This Week:
  - Mon 24 Mar: Garden sensor offline 4h (resolved — power cut)
  - Tue 25 Mar: Server room spike to 29.1°C at 2pm (resolved)
  - Thu 27 Mar: Server room spike to 28.8°C at 2pm (resolved)

Patterns Learned:
  - Server room: recurring afternoon temperature rise Tue/Thu — possible AC schedule issue
  - Living room: weekend temperatures average 1.4°C lower than weekdays (AC usage pattern)

Sensors Needing Attention:
  - Garden Sensor: 2 offline events this week — check power supply

Recommendation:
  Server room is showing a consistent pattern of afternoon temperature spikes on specific days. Check if the building AC schedule has a reduced-cooling window in the afternoon on those days.
```
