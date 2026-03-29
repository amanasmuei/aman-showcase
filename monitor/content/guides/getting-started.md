# Getting Started with Aman Monitor

## What Is This?

Aman Monitor is your always-on AI watchdog. Tell it what to watch — prices, websites, keywords, exchange rates — and it alerts you when thresholds are crossed and sends you daily summaries. You don't need to check constantly. It checks for you.

---

## Step 1: Tell It What to Watch

Start with something simple. Just say it naturally:

- **"watch Bitcoin price, alert if drops below $70K"**
- **"monitor my website uptime at example.com"**
- **"track USD/MYR rate, alert if above 4.55"**
- **"watch for news mentions of 'aman AI'"**

Aman Monitor will ask you any clarifying questions it needs — threshold value, frequency — and then confirm it's set up. You'll get a first-check result immediately.

---

## Step 2: Set Your Alert Preferences

For each monitor you can choose how often it checks:

| Option | Best for |
|--------|----------|
| **Real-time** (every check) | Critical prices, uptime monitoring |
| **Hourly** | Active trading windows, business metrics |
| **Daily** | Long-term trends, news mentions |
| **Weekly** | Slow-moving metrics, background awareness |

You also get a **daily digest at 8am** by default — a one-message summary of all your monitors. You can change the time.

To change alert timing: "check Bitcoin every 30 minutes" or "send daily digest at 7am"

---

## Step 3: Add Real-Time Data (Recommended)

Aman Monitor works best when it can fetch live data. To enable this:

1. Add the **akit web-search** tool to your akit setup
2. Add the **akit fetch** tool for direct URL checking

Without these tools, Aman Monitor can still track trends from data you've previously logged and can prompt you for manual updates — but live monitoring requires the web tools.

To check if real-time tools are available: "can you fetch live prices?"

---

## Example Monitors to Start With

### Crypto Price Alert
```
You: watch Bitcoin, alert if below $70,000, check hourly
```

### Website Uptime
```
You: monitor https://yourwebsite.com uptime, alert if down
```

### Exchange Rate
```
You: track USD/MYR exchange rate, alert if above 4.55
```

### Keyword News Alert
```
You: watch for news about "aman AI" — daily check
```

### Product Price Drop
```
You: watch this Lazada URL [URL], alert when price drops below RM 299
```

---

## Useful Tips

**Start small.** Set up 2–3 monitors first. Too many monitors at once means too many alerts — you'll start ignoring them, defeating the purpose.

**Set meaningful thresholds.** An alert that triggers every day is noise. Think: "at what price/level do I actually need to do something?" Set that as your threshold.

**Review your weekly report.** The weekly report shows you which monitors triggered the most alerts. If one is noisy, adjust the threshold.

**Keep history.** Even if you stop watching something, the data stays. You can ask "history of Bitcoin" anytime.

**Name your monitors clearly.** "Bitcoin" and "BTC" will both work, but be consistent so Aman Monitor matches them correctly in history.

---

## Quick Command Reference

| What you want | What to say |
|---------------|------------|
| Add a monitor | "watch [thing]" |
| Check status | "status" or "how is [thing]" |
| See all monitors | "my monitors" |
| Get daily summary | "daily digest" |
| Change a threshold | "change [thing] threshold to [value]" |
| See history | "history of [thing]" |
| Stop monitoring | "stop watching [thing]" |
| Get a report | "report" or "summary" |
