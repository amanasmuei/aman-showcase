<div align="center">

# Aman Kedai

### Your kedai's digital partner — for any small business in Malaysia

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Telegram assistant that tracks transactions, remembers your regulars, manages your inventory, and gives you daily reports — for any kedai, without writing a single line of code.

[Quick Start](#-quick-start) · [Business Types](#one-bot-every-kedai) · [Features](#-what-can-it-do) · [Commands](#commands-reference) · [How It Works](#-how-it-works)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase kedai
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/kedai)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Small business owners track everything in their head. Orders on paper. Customer preferences forgotten. No idea what sells best.

The result: decisions made by gut feel instead of data. Popular items run out. Good regulars never get recognised. Stock disappears without warning. By closing time, you're too tired to count.

## The Solution

**Just text what happened. The bot handles the rest.**

"Ali ordered 2 nasi lemak and 1 teh tarik."

"Ahmad walk-in, regular cut and wash."

"Puan Aminah drop off 5kg wash and fold."

The bot tracks transactions, remembers regulars, manages inventory, and gives you daily reports. Works for **any kedai** — restaurants, coffee shops, salons, laundries, repair shops, florists, bakeries, groceries.

End of day? Say "how was today" and get your full report.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## One Bot, Every Kedai

| # | Business Type | What It Tracks |
|---|--------------|----------------|
| 🍛 | **Kedai Makan** | Menu items, orders, customer favourites, daily sales, sold-out items |
| ☕ | **Kedai Kopi** | Drink orders, customer preferences (kurang manis, extra shot), peak hours |
| 💇 | **Kedai Gunting** | Services, style preferences, appointment bookings, product recommendations |
| 🧺 | **Kedai Dobi** | Drop-offs, weights, ready dates, pickup status, garment care notes |
| 📱 | **Kedai Telefon** | Repairs, device history, parts inventory, warranty periods |
| 🌸 | **Kedai Bunga** | Arrangements, occasions, delivery dates, flower preferences |
| 🍰 | **Kedai Kek** | Custom orders, flavours, sizes, pickup dates, deposits |
| 🛒 | **Kedai Runcit** | Sales, stock levels, reorder alerts, popular items, expiry dates |

See the full guide: [content/guides/business-types.md](content/guides/business-types.md)

---

## It Adapts to Your Business

### Restaurant Order

```
Owner:  Ali ordered 2 nasi lemak, 1 teh tarik

Bot:    Order #012 — Ali (dine-in)
        2x Nasi Lemak    RM 14.00
        1x Teh Tarik      RM  3.50
        Total: RM 17.50

        📊 Today: 12 orders, RM 187.50
        💡 Ali's 5th visit this month — he's a regular!
```

### Salon Service

```
Owner:  Ahmad walk-in, regular cut and wash

Bot:    Service #005 — Ahmad (walk-in)
        1x Regular Cut    RM 15.00
        1x Hair Wash       RM  5.00
        Total: RM 20.00
        Note: Ahmad prefers short on sides, textured top (from last visit)
```

Same bot. Different kedai. It just works.

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your assistant lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/kedai

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Kedai
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Tell it what kind of kedai you run, then start logging.

<details>
<summary><strong>How to get a Telegram bot token (BotFather)</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Kedai Saya Bot") and a username (e.g., `kedai_saya_bot`)
4. Copy the token — paste it as `TELEGRAM_BOT_TOKEN` in your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Transactions
Say **"[name] ordered/booked [items]"** and get:
- Instant confirmation with total
- Sequential numbering
- Order type tracking (dine-in, takeaway, delivery, walk-in)
- Running daily totals in every reply

</td>
<td width="50%">

### Customers
Say **"[name]'s usual / macam biasa"** or **"who is [name]?"** and get:
- Automatic regular detection
- Saved preferences and special instructions
- Visit count and favourite items
- Personalised service without extra effort

</td>
</tr>
<tr>
<td>

### Inventory
Say **"sold out / habis [item]"** or **"add item/service"**:
- Add or update items and services on the fly
- Mark as sold out instantly
- Stock level alerts when running low
- Prices always current in every transaction

</td>
<td>

### Reports
Say **"how was today / tutup kedai"** or **"weekly report"**:
- Daily transaction count and revenue
- Top-selling items ranked by volume and value
- Peak hour breakdown
- Week-over-week comparison

</td>
</tr>
</table>

---

## Commands Reference

| Say this | What happens |
|----------|-------------|
| `[name] ordered/booked [items]` | Logs a named customer transaction with total |
| `[name]'s usual / macam biasa` | Recalls the regular's saved order for confirmation |
| `sold out / habis [item]` | Marks item or service unavailable until restocked |
| `how was today / tutup kedai` | Daily summary with top items and peak hours |
| `weekly report` | Full week breakdown with trends and retention |
| `add item/service: [name] RM [price]` | Adds a new item or service to your list |
| `who is [name]` | Shows customer profile, visit history, and favourites |

---

## How It Works

Aman Kedai is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, business knowledge, and working method:

```
kedai/
├── identity/core.md              → Friendly, efficient, built for Malaysian small business
├── workflows/flow.md             → Transaction → Confirm → Track → Report
├── rules/rules.md                → Always confirm transactions, remember regulars
├── skills/kedai-skill.md         → Transaction tracking, customer memory, reporting
├── content/
│   ├── menu/sample-menu.md       → Starter items for kedai makan
│   ├── templates/daily-report.md → Daily and weekly report format
│   └── guides/
│       ├── getting-started.md    → How to run your first week
│       └── business-types.md     → How it adapts to each kedai type
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides the engine:

| Layer | Package | What it does for Aman Kedai |
|-------|---------|----------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the assistant friendly, fast, and fluent in Malaysian business |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every transaction, customer preference, and conversation |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures the service cycle: transaction → confirm → track → report |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures transactions are confirmed, prices accurate, sold-outs flagged |
| Skills | [askill](https://github.com/amanasmuei/askill) | Transaction logging, customer recognition, inventory management, reporting |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Built for Malaysian Business

Aman Kedai speaks the language of Malaysian small business — bungkus, dine-in, kurang manis, macam biasa, tutup kedai. It adapts to how you work, not the other way around.

| What this means | How it shows up |
|----------------|-----------------|
| **Natural language** | Text in Malay, English, or Manglish — it understands all three |
| **Local context** | Knows bungkus, dine-in, drop-off, walk-in, delivery |
| **Customer memory** | Remembers "Makcik Siti — extra sambal, kurang manis" without you repeating it |
| **Any business** | Configure once for your kedai type — the bot adapts its vocabulary and workflows |
| **Zero friction** | No app to learn. No form to fill. Just text what happened. |

---

## Restore Your Config

Aman Kedai automatically backs up your existing ecosystem files during setup.

```bash
# List available backups
bash config/teardown.sh

# Restore a specific backup
bash config/teardown.sh backup/20260329-143022
```

---

## Contributing

| Contribution | Difficulty | Impact |
|-------------|-----------|--------|
| Add sample content for new business types | Easy | Very High |
| Improve daily report format | Easy | Medium |
| Add allergen and care note flag support | Easy | High |
| Build appointment/booking workflow | Medium | High |
| Add staff tracking and shift handover | Medium | High |
| Fork and configure for a new kedai type | Medium | Very High |

```bash
git checkout -b improve-kedai-content
# Make your changes
git push origin improve-kedai-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Every kedai deserves a digital partner.*

</div>
