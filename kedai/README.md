<div align="center">

# Aman Kedai

### Your restaurant's digital partner.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A restaurant assistant on Telegram that tracks your orders, remembers your regulars, manages your menu, and gives you a daily sales report — all without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Commands](#commands-reference) · [How It Works](#-how-it-works)

</div>

---

## The Problem

Small restaurant owners take orders on paper or in their head. They don't know what sells, who their regulars are, or how today compares to yesterday. By closing time, they're too tired to count.

The result: decisions made by gut feel instead of data. Popular items run out. Slow items keep getting made. Good regulars never get recognised.

## The Solution

**Just text your orders as they come in.**

"Ali ordered 2 nasi lemak and 1 teh tarik."

The bot tracks everything — orders, customers, sales, trends. End of day? Say "how was today" and get your report.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei).

---

### Order Example

```
Owner: Ali ordered 2 nasi lemak, 1 teh tarik

Aman Kedai: Order #012 — Ali (dine-in)
            2x Nasi Lemak       RM 14.00
            1x Teh Tarik         RM  3.50
            Total: RM 17.50

            📊 Today: 12 orders, RM 187.50
            💡 Ali's 5th visit this month — he's a regular!
```

### Regular Customer Example

```
Owner: Makcik Siti the usual

Aman Kedai: Makcik Siti's usual:
            1x Nasi Lemak Special (extra sambal, no timun)
            1x Teh Tarik (kurang manis)
            Total: RM 13.50

            Shall I log this order?
```

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

**That's it.** Message your bot on Telegram. Tell it your menu, then start logging orders.

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

### Orders
Say **"[name] ordered [items]"** or **"walk-in: [items]"** and get:
- Instant order confirmation with total
- Sequential order numbering
- Dine-in or bungkus tracking
- Running daily totals in every reply

</td>
<td width="50%">

### Customers
Say **"[name]'s usual"** or **"who is [name]?"** and get:
- Automatic regular detection
- Saved order preferences and modifications
- Visit count and favourite items
- Personalised service without extra effort

</td>
</tr>
<tr>
<td>

### Menu
Say **"add item"**, **"sold out"**, or **"back in stock"**:
- Add or update items on the fly
- Mark items as sold out instantly
- Track daily specials and how they perform
- Prices always up to date in every order

</td>
<td>

### Reports
Say **"how was today"** or **"weekly report"**:
- Daily order count and revenue
- Top-selling items ranked by volume and value
- Peak hour breakdown
- Week-over-week comparison

</td>
</tr>
</table>

### Commands Reference

| Say this | What happens |
|----------|-------------|
| `[name] ordered [items]` | Logs a named customer order with total |
| `walk-in: [items]` | Logs an anonymous order |
| `[name]'s usual` | Recalls the regular's saved order for confirmation |
| `sold out [item]` | Marks item unavailable until restocked |
| `how was today` | Daily sales summary with top sellers and peak hours |
| `weekly report` | Full week breakdown with trends and retention |
| `add item: [name] RM [price]` | Adds a new item to the menu |
| `who is [name]` | Shows customer profile, visit history, and favourites |

---

## Sample Menu

Aman Kedai ships with a ready-to-use sample menu at `content/menu/sample-menu.md`.

It includes 13 main dishes, 12 drinks, and 6 sides and add-ons — all common Malaysian kedai makan items with standard prices. Use it as a starting point and update with your own items and prices.

```
Tell your bot:
- "Add item: Laksa, RM 9.00, main dish"
- "Change price: Teh Tarik to RM 4.00"
- "Nasi Lemak sold out"
```

---

## How It Works

Aman Kedai is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, restaurant knowledge, and working method:

```
kedai/
├── identity/core.md              → Friendly, efficient, built for F&B
├── workflows/flow.md             → Order → Confirm → Track → Report
├── rules/rules.md                → Always confirm orders, remember regulars
├── skills/kedai-skill.md         → Order tracking, customer memory, reporting
├── content/
│   ├── menu/sample-menu.md       → Starter menu with common kedai items
│   ├── templates/daily-report.md → Daily and weekly report format
│   └── guides/getting-started.md → How to run your first week
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei) provides:

| Layer | Package | What it does for Aman Kedai |
|-------|---------|----------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the assistant friendly, fast, and F&B-fluent |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every order, customer preference, and conversation |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures the service cycle: order → confirm → track → report |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures orders are confirmed, prices are accurate, sold-outs are flagged |
| Skills | [askill](https://github.com/amanasmuei/askill) | Order logging, customer recognition, menu management, daily reporting |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Built for Malaysian Food Businesses

Aman Kedai speaks the language of Malaysian F&B — bungkus, dine-in, kurang manis, extra sambal. It works for:

| Business type | How it helps |
|--------------|-------------|
| **Mamak** | Handles high-volume, fast orders with quick confirmation and running totals |
| **Warung** | Recognises regulars and remembers their usual orders and modifications |
| **Kedai Makan** | Tracks which dishes sell and when, so you prep the right amount |
| **Food Stall** | Simple enough to use during a busy service with one hand on the ladle |

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
| Add more sample menu items by cuisine type | Easy | High |
| Improve daily report format | Easy | Medium |
| Add allergen and dietary flag support | Easy | High |
| Build table management workflow | Medium | High |
| Add staff tracking and shift handover | Medium | High |
| Fork for a different F&B type (cafe, bakery, catering) | Medium | Very High |

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

**Built with the [aman ecosystem](https://github.com/amanasmuei)**

*Every order tracked. Every regular remembered.*

</div>
