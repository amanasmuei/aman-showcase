<div align="center">

# Aman Monitor

### Your AI watchdog that never sleeps.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An always-on AI monitoring agent that watches prices, websites, exchange rates, and keywords for you — alerts when thresholds are crossed, sends daily digests, and keeps watch even when you're not chatting.

[Quick Start](#-quick-start) · [What It Monitors](#-what-can-you-monitor) · [Commands](#-commands-reference) · [How It Works](#-how-it-works)

</div>

---

## The Problem

You can't watch everything 24/7.

Prices move while you sleep. Websites go down at 3am. Competitors launch while you're busy. The exchange rate crosses your target while you're in a meeting. You find out too late — after the moment to act has passed.

Manually checking prices, news, and dashboards is exhausting. Alerts from financial apps are noisy and generic. You stop looking. You miss things.

## The Solution

Tell your AI what to watch. It monitors for you.

**"Watch Bitcoin, alert if it drops below $70K."**
**"Monitor my website — tell me if it goes down."**
**"Track USD/MYR, alert if it crosses 4.55."**

Aman Monitor watches continuously, alerts the moment a threshold is crossed with full context, and sends you a daily digest every morning. It works even when you're not chatting — that's the point.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei).

---

## See It in Action

```
Aman Monitor: 🔴 CRITICAL ALERT

Bitcoin dropped below your $70,000 threshold
Current: $68,450 (-3.2% in 4 hours)
Trend: 📉 Declining since 2pm
Your threshold: $70,000

Previous alerts today: None
24h range: $68,450 - $72,100

Action needed? Reply "more" for analysis.
```

And every morning at 8am:

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

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your watchdog lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/monitor

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Monitor
bash config/setup.sh

# 5. (Recommended) Add real-time data tool
npx @aman_asmuei/akit add web-search

# 6. Launch
npx @aman_asmuei/achannel serve
```

Then open Telegram, message your bot, and say: **"watch Bitcoin, alert if drops below $70K"**

---

## What Makes It Different

<table>
<tr>
<td width="50%">

### Real-Time Alerts
Threshold crossed? You know immediately — with full context. Not just "price changed" but exactly what happened, how much, over what timeframe, and what trend preceded it.

</td>
<td width="50%">

### Daily Digests
Every morning at 8am: a single message with all your monitors. Green/warning/critical status at a glance. One message to start the day informed.

</td>
</tr>
<tr>
<td width="50%">

### Trend Analysis
Not just point-in-time values — moving averages, volatility detection, spike vs trend distinction. Know if a dip is noise or the start of something.

</td>
<td width="50%">

### Custom Monitors
Watch anything with a URL or a price — crypto, stocks, forex, websites, keywords, competitor pages, SSL certificates, domain expiry. You define what matters.

</td>
</tr>
</table>

---

## Commands Reference

| Command | What it does |
|---------|-------------|
| `watch [thing]` | Set up a new monitor — prompts for threshold and frequency |
| `alert if [condition]` | Add a threshold to a monitor you're watching |
| `status` | Show status of all active monitors |
| `how is [thing]` | Show current value and trend for a specific monitor |
| `my monitors` | List all active monitors with their thresholds |
| `daily digest` | Get your digest right now, on demand |
| `report` | Full summary with trends and analysis |
| `history [thing]` | Show historical data and patterns for a monitor |
| `change [thing] threshold to [value]` | Update an alert threshold |
| `check [thing] every [frequency]` | Change monitoring frequency |
| `stop watching [thing]` | Deactivate a monitor (history preserved) |

---

## What Can You Monitor?

### Financial
- Bitcoin, Ethereum, and any crypto with a public price
- Bursa Malaysia stocks (KLCI, Maybank, CIMB, Tenaga)
- US equities (Apple, Nvidia, any ticker)
- Forex: USD/MYR, EUR/USD, SGD/MYR, and any pair
- Gold, crude oil, palm oil (CPO) futures
- Indices: KLCI, S&P 500, NASDAQ

### Business
- Your website uptime and response time
- Competitor pricing pages (content change detection)
- SSL certificate and domain expiry
- API health and error rates
- Google review mentions
- Competitor job postings (growth signal)

### News & Keywords
- Your brand name across news and social
- Industry terms and competitor names
- Government announcements (Bank Negara, SSM, customs)
- Regulatory changes in your sector

### Personal
- Flight price drops for your routes
- Product price targets on Lazada, Shopee
- Job postings at target companies
- Event ticket availability

### Malaysian Specifics
- Bursa KLCI levels
- Ringgit (MYR) exchange rates
- Palm oil futures (CPO)
- TNG e-wallet reload promotions
- PTPTN and KWSP/EPF announcements
- ePerolehan government tenders

See [content/guides/monitor-ideas.md](content/guides/monitor-ideas.md) for the full list with suggested thresholds.

---

## How It Works

Aman Monitor is built on the aman ecosystem — a set of markdown configuration files that define an AI agent's personality, rules, workflows, and skills. No application code required.

```
monitor/
├── identity/core.md          ← Agent personality & monitoring approach
├── rules/rules.md            ← What it always does / never does
├── workflows/flow.md         ← 7 core workflows (watch, alert, report...)
├── skills/monitor-skill.md   ← Domain expertise & tool usage
├── content/
│   ├── templates/            ← Alert and report format templates
│   └── guides/               ← Setup guides and monitor ideas
└── config/                   ← Setup scripts and environment template
```

The aman ecosystem loads these files and gives your AI agent its capabilities. The agent then runs via Telegram (or any channel), executing the defined workflows when triggered by schedule or owner message.

**For real-time data**: The agent uses the `akit web-search` tool to fetch live prices, check URLs, and search news. Without this tool, it can still track trends from logged data and prompt you for manual updates.

---

## Getting Started Guide

Read [content/guides/getting-started.md](content/guides/getting-started.md) for step-by-step setup, example monitors, and tips for getting the most out of Aman Monitor.

---

## Restore / Uninstall

```bash
# Restore your previous aman ecosystem config
bash config/teardown.sh <backup-directory>

# Backup directories are created automatically in monitor/backup/
# when you run setup.sh
```

---

<div align="center">

Your AI watchdog that never sleeps.

Built with the [aman ecosystem](https://github.com/amanasmuei) — zero application code.

</div>
