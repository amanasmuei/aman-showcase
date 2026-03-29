# Aman Monitor — Alert & Report Templates

## Critical Alert

Use when: threshold is crossed. Send immediately.

```
Aman Monitor: 🔴 CRITICAL ALERT — {Monitor Name}

{Asset/thing} {crossed/dropped/spiked} {direction} your {threshold type} threshold.
Current: {value} ({change %} in {timeframe})
Trend: {📈/📉/➡️} {trend description}
Your threshold: {threshold value}

Previous alerts today: {count or "None"}
{Period} range: {low} – {high}

Action needed? Reply "more" for analysis or "ok" to acknowledge.
```

**Example**:
```
Aman Monitor: 🔴 CRITICAL ALERT — Bitcoin

Bitcoin dropped below your $70,000 threshold.
Current: $68,450 (-3.2% in 4 hours)
Trend: 📉 Declining since 2pm
Your threshold: $70,000

Previous alerts today: None
24h range: $68,450 – $72,100

Action needed? Reply "more" for analysis or "ok" to acknowledge.
```

---

## Warning Alert

Use when: approaching threshold (within ~10%), or sustained movement toward threshold. Include in next scheduled report or send as standalone if time-sensitive.

```
Aman Monitor: ⚠️ WARNING — {Monitor Name}

{Asset/thing} is approaching your {threshold type} threshold.
Current: {value} ({change % in timeframe})
Your threshold: {threshold value} — {distance} away
Trend: {📈/📉/➡️} {trend description}

No action needed yet, but worth watching.
Next check: {time}.
```

**Example**:
```
Aman Monitor: ⚠️ WARNING — USD/MYR

USD/MYR is approaching your alert threshold.
Current: 4.52 (+0.6% today)
Your threshold: 4.55 (above) — 0.03 away
Trend: 📈 Rising slowly for 3 days

No action needed yet, but worth watching.
Next check: in 1 hour.
```

---

## Info Alert

Use when: regular update, all within range, no threshold activity. Appears in daily digest only — never sent as a standalone push.

```
✅ {Monitor Name}: {current value} ({change since last check}) — {status description}
```

**Example (within daily digest)**:
```
✅ Bitcoin: $71,200 (+1.1% today) — within range
✅ Website: 99.9% uptime — healthy
✅ Palm Oil: RM 3,850/ton (+0.3%) — stable
```

---

## Daily Digest

Use when: scheduled daily report time (default 8am). One message covering all active monitors.

```
Aman Monitor: 📊 Daily Digest — {Date}

Your monitors ({count} active):
{for each monitor:}
{status emoji} {Monitor Name}: {current value} ({brief status})

{If any warnings:}
⚠️ Heads up: {warning summary}

{If any critical today:}
🔴 Critical alerts today: {count} — {brief summary}

{If all clear:}
No critical alerts today. All monitors healthy. ✅

Next report: {next scheduled time}.
```

**Example**:
```
Aman Monitor: 📊 Daily Digest — March 29

Your monitors (5 active):
✅ Bitcoin: $71,200 (within range)
✅ Website: 99.8% uptime (healthy)
⚠️ USD/MYR: 4.52 (approaching 4.55 alert)
✅ Palm Oil: RM 3,850/ton (stable)
✅ "aman" mentions: 3 new (2 Twitter, 1 Reddit)

No critical alerts today.
Next report: Tomorrow 8am.
```

---

## Weekly Report

Use when: scheduled weekly report (default Sunday evening). Deeper trends and analysis.

```
Aman Monitor: 📈 Weekly Report — Week of {date range}

SUMMARY
Active monitors: {count}
Alerts this week: {critical count} critical, {warning count} warnings
Biggest mover: {monitor name} ({change %} this week)

MONITOR BREAKDOWN
{for each monitor:}
{name}
  This week: {high} – {low} (avg: {average})
  vs last week: {+/- change}
  Alerts: {count}
  Trend: {description}

ANOMALIES
{List any unusual patterns, spikes, or events worth noting}
{or: "No anomalies detected this week."}

RECOMMENDATIONS
{1–3 actionable suggestions based on the week's data}
{e.g., "Bitcoin threshold may be too tight — triggered 4 false alarms. Consider widening to $68K."}

Next weekly report: {date}. Daily digests continue at 8am.
```

---

## Monitor Setup Confirmation

Use when: a new monitor is successfully configured and ready.

```
Aman Monitor: ✅ Monitor Active — {Monitor Name}

Watching: {what is being monitored}
Alert condition: {threshold/condition}
Check frequency: {real-time / hourly / daily / weekly}
Started: {timestamp}

First check result:
{current value} — {status relative to threshold}

I'll alert you immediately if {condition} is met.
Daily digest included in your 8am summary.

To adjust: "change {name} threshold to [value]"
To stop: "stop watching {name}"
```

**Example**:
```
Aman Monitor: ✅ Monitor Active — Bitcoin

Watching: Bitcoin price (USD)
Alert condition: Below $70,000
Check frequency: Hourly
Started: March 29, 9:14am

First check result:
$71,450 — within range ✅ ($1,450 above your threshold)

I'll alert you immediately if Bitcoin drops below $70,000.
Daily digest included in your 8am summary.

To adjust: "change Bitcoin threshold to $68,000"
To stop: "stop watching Bitcoin"
```
