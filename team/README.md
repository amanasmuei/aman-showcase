<div align="center">

# Aman Team

### Your team's memory. Not just another bot.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An AI office manager in your Telegram group that remembers every decision, tracks every project, runs every standup, and onboards every new member — without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Commands](#-commands-reference) · [How It Works](#-how-it-works)

</div>

---

## The Problem

Small teams lose everything in chat.

A critical decision gets made in a thread nobody can find. Project status lives in someone's head and walks out the door when they go on holiday. A new member joins and spends two weeks asking "wait, why did we choose X?" before they can be productive.

Standups don't happen because nobody wants to manage them. Blockers don't surface because nobody wants to be the one blocking the team. Institutional knowledge — the stuff that makes your team *your team* — evaporates.

## The Solution

**Aman Team is an AI office manager in your group chat.**

It runs standups. It logs decisions with context. It tracks projects and blockers. When someone new joins, it onboards them from the team's memory — every decision, every project, every why.

It doesn't need a separate app. It doesn't need a dashboard nobody looks at. It lives where your team already talks.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## The Aha Moment

**Standup, every morning:**

```
Ali: standup

Bot: Good morning! Starting standup for March 29.

     Ali — what did you get done yesterday, what are you working
     on today, and any blockers?

Ali: Yesterday finished the auth endpoint. Today starting DB migration.
     Blocker: waiting on staging creds from DevOps.

Bot: Got it. Sarah, Fatimah — same question when you're ready.

Sarah: Done: reviewed Ali's PR, fixed nav bug.
       Today: payment form UI.
       Blocker: need Stripe test keys from client.

Fatimah: Done: dashboard mockups. Today: mobile responsive.
          No blockers.

Bot: 📋 Standup Summary — March 29

     Ali (Backend)
       ✅ Yesterday: Auth endpoint done
       📌 Today: DB migration
       ⚠️ Blocker: Staging creds from DevOps

     Sarah (Frontend)
       ✅ Yesterday: PR review + nav fix
       📌 Today: Payment form UI
       ⚠️ Blocker: Stripe test keys from client

     Fatimah (Design)
       ✅ Yesterday: Dashboard mockups
       📌 Today: Mobile responsive
       ⚠️ Blocker: None

     🚨 Active Blockers (2):
       - Ali: Staging creds (Day 1) → follow up with DevOps
       - Sarah: Stripe keys (Day 1) → follow up with client

     📊 3/3 participated
```

**Three months later, a new member joins:**

```
Ali: onboard Layla

Bot: Welcome, Layla! Here's what you need to know about this team:

     🏗️ Active Projects (2):
       • Project Alpha — backend API + frontend dashboard, launching April 15
       • Project Beta — in discovery, kick-off next week

     🧠 Key Decisions (last 90 days):
       • Auth: Using Supabase (cheaper than Firebase, PostgreSQL-native)
       • Frontend: React + Tailwind (decision #8, March 3)
       • Payments: Stripe, not PayPal (decision #14, March 20)
       • Deploy: Railway for now, revisiting at scale

     👥 Team:
       • Ali — backend
       • Sarah — frontend
       • Fatimah — design
       • You (Layla) — ?

     Ask me anything: "why did we choose Supabase?", "what's
     the status on Project Alpha?", "show me decisions from March"
```

That second example is what memory actually changes. Layla is productive on day one.

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your team lives |
| A Telegram **group** | This is a group assistant, not 1:1 |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/team

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Team
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Add the bot to your group and say *"standup"* to get started.

<details>
<summary><strong>How to set up the bot for group chats (BotFather + privacy settings)</strong></summary>

**Step 1 — Create the bot:**
1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Team") and username (e.g., `yourteam_aman_bot`)
4. Copy the token — paste it as `TELEGRAM_BOT_TOKEN` in your `.env` file

**Step 2 — Disable privacy mode (critical for groups):**

By default, Telegram bots only see messages that start with `/` or mention them by name. To let Aman Team read all group messages:
1. Message [@BotFather](https://t.me/botfather) again
2. Send `/setprivacy`
3. Select your bot
4. Choose **Disable**

Without this step, the bot cannot see standups, decisions, or natural conversation.

**Step 3 — Add the bot to your group:**
1. Open your team Telegram group
2. Tap the group name → Add Members
3. Search for your bot username and add it

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Standups
Say **"standup"** and get:
- Per-person prompts for yesterday / today / blockers
- Automatic summary with all updates in one place
- Blocker tracking with days-outstanding counter
- Async mode for distributed teams across timezones

</td>
<td width="50%">

### Decisions
Say **"we decided [X]"** and get:
- Structured decision record with rationale and alternatives
- Searchable history ("why did we choose Supabase?")
- Decision reversal tracking with context preserved
- Project-linked decisions for easy onboarding

</td>
</tr>
<tr>
<td>

### Projects
Say **"new project [name]"** and get:
- Project created with scope, timeline, and owners
- Status tracking across all active work
- Blocker association and resolution history
- Weekly progress summaries

</td>
<td>

### Onboarding
Say **"onboard [name]"** and get:
- Instant briefing from team memory
- Active projects with current status
- Key decisions and the reasoning behind them
- Team structure and who owns what

</td>
</tr>
</table>

---

## Commands Reference

| Say this | What happens |
|----------|-------------|
| `standup` | Start the daily standup for all team members |
| `we decided [X]` | Log a decision with context and rationale |
| `new project [name]` | Create a new project and begin tracking it |
| `blocked on [X]` | Log a blocker and flag it for the team |
| `team status` | Full snapshot: projects, blockers, recent decisions |
| `weekly report` | Summary of the week: participation, decisions, progress |
| `onboard [name]` | Generate an onboarding brief from team memory |
| `meeting notes` | Summarize the current conversation as meeting minutes |

---

## How It Works

Aman Team is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its identity, team knowledge, and working method:

```
team/
├── identity/core.md              → Organized, memory-first, team-focused
├── workflows/flow.md             → Standup → Log → Track → Surface → Onboard
├── rules/rules.md                → Always log decisions with context, never skip blockers
├── skills/team-skill.md          → Standups, decision logging, project tracking, onboarding
├── content/
│   ├── templates/standup-format.md  → Standup structure and summary format
│   ├── templates/decision-log.md    → Decision record format and search patterns
│   └── guides/setup-guide.md        → Group setup and bot configuration walkthrough
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides:

| Layer | Package | What it does for Aman Team |
|-------|---------|---------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the assistant team-focused, memory-first, and context-aware |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every standup, decision, project, and blocker — across sessions |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures the team cycle: standup → log → track → surface → onboard |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures decisions have context, blockers are surfaced, nothing falls through |
| Skills | [askill](https://github.com/amanasmuei/askill) | Standup facilitation, decision logging, project tracking, onboarding briefs |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers in Telegram group chats and Web |

---

## Why Memory Changes Everything

Most bots forget everything when the conversation ends. Every session starts from zero.

Aman Team is different. It builds **institutional knowledge** — the kind that normally lives only in people's heads.

- A personal bot helps you in the moment. Aman Team helps your whole team, compounding over time.
- The first week, it's useful. After three months, it's irreplaceable.
- When someone leaves, the knowledge stays. When someone joins, they inherit the history.
- "Why did we make this decision?" becomes a question the bot can answer, not a mystery.

The value of a team memory grows with every standup logged, every decision recorded, every project tracked. The earlier you start, the more valuable it becomes.

---

## Restore Your Config

Aman Team automatically backs up your existing ecosystem files during setup.

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
| Add retro / retrospective workflow | Easy | High |
| Improve standup summary formatting | Easy | Medium |
| Add more decision log examples by industry | Easy | High |
| Build project health check workflow | Medium | High |
| Add meeting notes summarization skill | Medium | High |
| Fork for a different team type (agency, open source, startup) | Medium | Very High |

```bash
git checkout -b improve-team-content
# Make your changes
git push origin improve-team-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Your team's memory. Not just another bot.*

</div>
