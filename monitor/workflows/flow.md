# Aman Monitor — Workflows

## Workflow 1: watch

**Trigger**: Owner says "watch [thing]" or "monitor [thing]" or "track [thing]"

**Steps**:
1. Identify what is being monitored (extract asset name, URL, keyword, etc.)
2. Ask for threshold/condition: "What should I alert you about? (e.g., drops below $70K, goes above RM4.55, page goes down)"
3. Ask for alert frequency: "How often should I check — real-time, hourly, daily, or weekly?"
4. Confirm the full setup: "Got it. I'll watch [thing], alert you if [condition], checking [frequency]. Starting now."
5. Save to memory: monitor name, type, threshold, frequency, start timestamp
6. Perform first check immediately and report baseline: "First check: [thing] is currently [value]. Monitoring active."

**Example**:
```
Owner: watch Bitcoin price
Bot:   Got it. What should I alert you about?
       (e.g., "drops below $70,000" or "moves more than 5% in a day")
Owner: alert me if it drops below $70,000
Bot:   How often should I check — real-time, hourly, daily, or weekly?
Owner: hourly
Bot:   Confirmed. Watching Bitcoin price, alerting if below $70,000, checking hourly.
       First check: Bitcoin is $71,450. Monitoring active. ✅
```

---

## Workflow 2: alert

**Trigger**: A threshold is crossed during a monitoring check

**Steps**:
1. Detect threshold breach during check cycle
2. Compose alert with full context:
   - What crossed, current value, threshold value
   - Change amount (absolute + %) and timeframe
   - Trend direction since last N checks
   - Previous alerts today (to give scope)
   - Recent range (24h or relevant period)
3. Send alert immediately — do not wait for scheduled report
4. Ask if action is needed: "Action needed? Reply 'more' for analysis or 'ok' to acknowledge."
5. Log alert to memory: timestamp, value at alert, owner response
6. If owner requests analysis → provide trend context, possible causes, what to watch next

**Severity rules**:
- **Critical** 🔴: threshold actually crossed — send immediately
- **Warning** 🟡: within 10% of threshold — include in next scheduled report
- **Info** 🟢: normal movement — logged only, shown in digest

**Example**:
```
Bot: 🔴 CRITICAL ALERT — Bitcoin

     Dropped below your $70,000 threshold.
     Current: $68,450 (-3.2% in 4 hours)
     Trend: 📉 Declining since 2pm
     Your threshold: $70,000

     Previous alerts today: None
     24h range: $68,450 – $72,100

     Action needed? Reply "more" for analysis.
```

---

## Workflow 3: report

**Trigger**: Scheduled time reached (daily 8am, weekly Sunday) or owner says "report" / "summary"

**Steps**:
1. Pull latest data for all active monitors from memory
2. Compare current values to previous period (day/week)
3. Identify: any threshold breaches, approaching thresholds, notable trends, anomalies
4. Format as digest (see alert-formats.md for template)
5. Send report
6. Save report to memory with timestamp
7. Note next scheduled report time

**Daily digest covers**:
- Each active monitor: current status, value, trend indicator
- Any critical alerts since last report
- Approaching thresholds (warnings)
- No-news summary if all clear

**Weekly report adds**:
- 7-day trend for each monitor
- Anomalies detected this week
- Comparison to previous week
- Recommendations (e.g., "Bitcoin has been stable — consider widening threshold to reduce noise")

---

## Workflow 4: check

**Trigger**: Owner asks "status", "how is [thing]", "what's [thing] at", "update"

**Steps**:
1. Identify which monitor is being asked about (or all if unspecified)
2. Recall latest data point from memory
3. If data is older than check frequency × 2 → note it may be stale
4. Show: current value, threshold, status (OK/warning/critical), trend (last 24h or relevant period)
5. Offer to fetch fresh data if real-time tools are available

**Example**:
```
Owner: how is USD/MYR?
Bot:   USD/MYR: 4.52
       Your alert threshold: 4.55 (above)
       Status: ⚠️ Warning — 0.03 away from your threshold
       Trend: 📈 Rising slowly over past 3 days
       Last checked: 47 minutes ago
```

---

## Workflow 5: adjust

**Trigger**: Owner says "change threshold", "update alert", "check more often", "only alert above X"

**Steps**:
1. Identify which monitor and what is changing (threshold value, frequency, condition type)
2. Show current setting: "Currently: alert if below $70,000, checking hourly."
3. Confirm new setting: "New: alert if below $65,000, checking daily — correct?"
4. On confirmation: update in memory immediately
5. Apply new threshold immediately (don't wait for next cycle)
6. Confirm: "Updated. New threshold: $65,000. Next check: in 24 hours."

---

## Workflow 6: unwatch

**Trigger**: Owner says "stop watching [thing]", "remove [thing]", "cancel monitor for [thing]"

**Steps**:
1. Identify which monitor to deactivate
2. Confirm before removing: "Stopping [thing] monitor. Keep history for reference? (yes/no)"
3. Deactivate in memory — mark as inactive, do NOT delete historical data
4. Confirm: "[Thing] monitor stopped. History preserved for 90 days if you want to review it."
5. Update active monitor list in memory

**Note**: Always preserve history. The owner may want to review trends or restart monitoring later.

---

## Workflow 7: history

**Trigger**: Owner asks "history of [thing]", "show me [thing] over time", "how has [thing] changed"

**Steps**:
1. Identify which monitor's history is requested
2. Determine time range (default: last 30 days, adjustable)
3. Recall all data points from memory for that monitor in the range
4. Compute:
   - High and low values in period
   - Average/median
   - Number of alerts triggered
   - Notable events (largest single-day change, etc.)
5. Present as a summary with key milestones
6. Offer to narrow range or show specific event details

**Example**:
```
Owner: history of Bitcoin
Bot:   Bitcoin — Last 30 Days

       High:    $74,200  (March 8)
       Low:     $67,100  (March 15)
       Average: $71,050
       Alerts:  3 triggered (2 critical, 1 warning)

       Notable: Dropped 6.4% on March 15 — largest single-day move.
       Recovered above $70K within 48 hours.

       Want the week-by-week breakdown?
```
