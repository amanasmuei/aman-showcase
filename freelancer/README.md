<div align="center">

# Aman Freelance

### Your AI business partner that never lets an invoice slip.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A freelance business assistant on Telegram that tracks your clients and projects, drafts proposals, generates invoices, follows up automatically, and keeps your pipeline moving — all without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Templates](#-templates) · [How It Works](#-how-it-works)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase freelancer
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/freelancer)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Freelancers are great at their craft. Running a business is a different job entirely.

You finish a project, forget to invoice. A proposal goes out, you forget to follow up. A client ghosts you, and you're not sure when the invoice was due. Three clients are in progress at once and you can't remember where each one stands.

The admin work doesn't stop. It just piles up.

## The Solution

**Aman Freelance handles the business side.**

It knows which clients you're working with and at what stage. It drafts proposals using your templates. It generates invoices with the right numbering. It follows up on overdue payments — friendly first, firm second, final third. It tells you exactly where your pipeline stands.

It picks up exactly where you left off. Every single time.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

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
cd aman-showcase/freelancer

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Freelance
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Say *"new client"* and get started.

<details>
<summary><strong>How to get a Telegram bot token (BotFather)</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Freelance") and username (e.g., `aman_freelance_bot`)
4. Copy the token — paste it as `TELEGRAM_BOT_TOKEN` in your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Clients
Say **"new client"** or **"client list"** and get:
- Add a new client with name, contact, and notes
- View all active clients at a glance
- See full history for any client
- Flag clients as active, paused, or closed

</td>
<td width="50%">

### Projects
Say **"new project"** or **"project status"** and get:
- Create a project linked to a client
- Set scope, timeline, and rate
- Track deliverables and milestones
- Get a status snapshot across all active work

</td>
</tr>
<tr>
<td>

### Invoices
Say **"invoice"** or **"outstanding invoices"**:
- Generate a numbered invoice for any project
- Auto-calculate totals with optional tax
- Track paid, pending, and overdue invoices
- Get the right follow-up message at the right time

</td>
<td>

### Pipeline
Say **"pipeline"** or **"what's next?"**:
- See all leads, proposals sent, and active projects
- Identify what needs action today
- Spot overdue invoices and stale proposals
- Get a weekly business summary

</td>
</tr>
</table>

### Commands Reference

| Say this | What happens |
|----------|-------------|
| `new client` | Add a new client to your roster |
| `new project` | Create a project and link it to a client |
| `invoice` | Generate an invoice for a completed project or milestone |
| `follow up` | Get the right follow-up message for a client or invoice |
| `pipeline` | See your full business pipeline — leads to paid |
| `report` | Weekly summary: income, outstanding, what's due |
| `rate` | Review or update your rates and draft a rate increase notice |
| `/start` | Set up your profile — name, service, default rate, payment terms |

---

## Templates

Aman Freelance ships with ready-to-use professional templates:

### Proposal (`content/templates/proposal.md`)
A structured proposal with subject line, scope of work, phased timeline, tiered pricing options, payment terms, and clear next steps. Never send a vague "here's my quote" email again.

### Invoice (`content/templates/invoice.md`)
Clean invoice layout with sequential numbering (INV-001 or INV-2026-001), line-item breakdown, subtotal and tax, bank/payment details, and a payment terms guide (Net 15 / Net 30 / Net 45).

### Follow-up Messages (`content/templates/follow-up.md`)
Six ready-to-send messages covering:
- Proposal follow-up at 5 days and 14 days
- Invoice reminders: friendly (7 days), firm (14 days), final (30+ days)
- Rate increase notice with 30-day advance warning
- Scope creep response that stays professional and opens a quote conversation

---

## How It Works

Aman Freelance is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, business knowledge, and working method:

```
freelancer/
├── identity/core.md              → Professional, organized, client-focused
├── workflows/flow.md             → Lead → Proposal → Project → Invoice → Paid
├── rules/rules.md                → No work without a contract, always follow up
├── skills/freelance-skill.md     → Proposals, invoicing, pipeline management
├── content/
│   ├── templates/proposal.md     → Proposal structure and copy
│   ├── templates/invoice.md      → Invoice layout and numbering
│   ├── templates/follow-up.md    → Follow-up messages for every scenario
│   └── guides/getting-started.md → Freelance business fundamentals
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides:

| Layer | Package | What it does for Aman Freelance |
|-------|---------|--------------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the assistant professional, organized, and commercially sharp |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every client, project, invoice, and conversation |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures the business cycle: lead → proposal → project → invoice → paid |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures contracts before work, follow-ups are sent, invoices aren't skipped |
| Skills | [askill](https://github.com/amanasmuei/askill) | Proposal writing, invoice generation, pipeline tracking, rate management |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Restore Your Config

Aman Freelance automatically backs up your existing ecosystem files during setup.

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
| Add contract template | Easy | High |
| Improve follow-up message variants | Easy | Medium |
| Add scope-of-work examples by industry | Easy | High |
| Build project health check workflow | Medium | High |
| Add retainer / recurring billing support | Medium | High |
| Fork for a different role (consultant, agency) | Medium | Very High |

```bash
git checkout -b improve-freelance-content
# Make your changes
git push origin improve-freelance-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Your AI business partner that never lets an invoice slip.*

</div>
