<div align="center">

# Aman Money

### Know where every ringgit goes.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A personal finance tracker on Telegram that logs every ringgit you spend, keeps you honest against your budget, and helps you hit your savings goals — all without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Commands](#-commands-reference) · [How It Works](#-how-it-works)

</div>

---

## The Problem

"Where did my money go?"

Most people can't answer this for last month. Budgeting apps are complex — categories, accounts, syncing, rules — and people quit within a week. Spreadsheets are boring and require discipline no one has after a long day.

So the money disappears. Every month.

## The Solution

Just text your AI what you spent.

**"Lunch 15."** **"Grab 8."** **"Groceries 120."**

Aman Money tracks everything, shows you the truth, and helps you save — via Telegram, zero friction. No app to open. No receipt to scan. No categories to pick. Just message it like you'd message a friend who happens to be obsessively good with money.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei).

---

## See It in Action

```
User: spent 45 on dinner

Aman Money: Got it. RM 45 on food (dining out).

            Food this month: RM 520 / RM 600 budget (87%)
            ⚠️ Heads up — RM 80 left for food with 8 days to go.

            Tip: You have RM 35 in groceries budget unused.
            Cook this weekend? 🍳
```

```
User: how am I doing?

Aman Money: 📊 March Summary (so far)

            Income:    RM 4,500
            Expenses:  RM 3,200
            Saved:     RM 1,300 (29%) ✅ beating your 20% target!

            Top spending:
            1. Housing    RM 1,200 (on budget ✅)
            2. Food       RM 520   (87% of budget ⚠️)
            3. Transport  RM 380   (on budget ✅)

            🎯 Emergency fund: RM 4,200 / RM 10,000 (42%)
               +RM 800 this month — great progress!
```

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your finance tracker lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/money

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Money
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Say *"I earn RM 4,500 a month"* and get started.

<details>
<summary><strong>How to get a Telegram bot token</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Money") and username (e.g., `aman_money_bot`)
4. Copy the token into your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Track Spending
Say **"spent [X] on [Y]"** and get:
- Instant expense logging with smart categorisation
- Running total against your budget for that category
- Heads-up when you're close to the limit
- Context-aware tips to stay on track

</td>
<td width="50%">

### Budget
Say **"budget"** to set up or review:
- 50/30/20 framework (needs / wants / savings)
- Per-category monthly limits
- Real-time progress against each bucket
- Adjustments based on your actual spending patterns

</td>
</tr>
<tr>
<td>

### Savings Goals
Say **"save for [goal]"** to:
- Create named, deadline-driven savings targets
- Track progress with percentage milestones
- Get a recommended monthly contribution
- Celebrate 25%, 50%, 75%, and 100% milestones

</td>
<td>

### Reports
Say **"report"** for:
- Full monthly income vs. expenses breakdown
- Category-by-category spend vs. budget
- Month-over-month trends
- Biggest changes from last month

</td>
</tr>
</table>

---

## Commands Reference

| Say this | What happens |
|----------|-------------|
| `spent [X] on [Y]` | Logs an expense and shows budget progress |
| `received [X]` or `salary [X]` | Logs income for the month |
| `budget` | Set up or view your monthly budget |
| `save for [goal]` | Create or check a savings goal |
| `summary` or `how am I doing?` | See your financial overview for the month |
| `report` | Detailed monthly income, expenses, and trends |
| `I pay [X] monthly for [Y]` | Log a recurring expense (rent, subscriptions) |

---

## How It Works

Aman Money is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its financial knowledge, tracking discipline, and coaching approach:

```
money/
├── identity/core.md              → Honest, supportive personal finance coach
├── workflows/flow.md             → Expense → Budget → Goals → Reports
├── rules/rules.md                → No judgment, accurate tracking, privacy-first
├── skills/finance-skill.md       → Categorisation rules, budgeting frameworks, savings logic
├── content/
│   ├── guides/getting-started.md → First week onboarding guide
│   ├── guides/savings-goals.md   → Priority order and goal-setting framework
│   └── templates/budget-template.md → 50/30/20 monthly budget template
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei) provides:

| Layer | Package | What it does for Aman Money |
|-------|---------|------------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the tracker honest, non-judgmental, and goal-focused |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every transaction, budget, and savings goal |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures interactions: log → categorise → compare → advise |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures no financial advice, just tracking and awareness |
| Skills | [askill](https://github.com/amanasmuei/askill) | Categorisation logic, budgeting frameworks, savings calculations |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Your Money, Your Privacy

Aman Money stores everything in your local [amem](https://github.com/amanasmuei/amem) memory — on your machine, under your control.

- All transaction data stays local — never uploaded to a third-party server
- Your income, expenses, and goals are yours alone
- The LLM processes queries but does not persistently store your financial data
- You can inspect, export, or delete your memory files at any time

You own everything.

---

## Restore Your Config

Aman Money automatically backs up your existing ecosystem files during setup.

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
| Improve expense categorisation rules | Easy | High |
| Add more savings goal templates | Easy | Medium |
| Write budgeting guides for different income levels | Easy | High |
| Improve recurring expense detection | Medium | High |
| Add investment tracking (ASB, unit trusts) | Medium | High |
| Fork for a different currency / region | Medium | Very High |

```bash
git checkout -b improve-money-content
# Make your changes
git push origin improve-money-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei)**

*Know where every ringgit goes.*

</div>
