<div align="center">

# Aman Feed

### Your personal information companion — signal, not noise

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Telegram assistant that learns what you care about, delivers personalized briefings, and goes deep when you ask — without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-features) · [Commands](#commands-reference) · [How It Learns](#how-it-learns) · [How It Works](#-how-it-works)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase feed
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/feed)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

You either doomscroll through 100 irrelevant headlines, or miss important news because you're busy.

News apps push what gets clicks, not what matters to you. Alerts are noise. Feeds are algorithms optimized for engagement, not relevance. By the time you've filtered out the noise, you're too tired to actually read.

## The Solution

**Tell your AI what you care about. It does the rest.**

Aman Feed learns your interests, delivers personalized briefings, remembers what you've read, and goes deep when you ask. No noise. Just signal.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## What It Looks Like

### Your Personalized Briefing

```
You: What's new?

Aman Feed: 📰 Your Briefing — March 29

1. [AI] Anthropic releases Claude 4.5 with improved reasoning...
   → Connects to your interest in LLM developments

2. [Startups] Carsome raises $300M Series E...
   → Largest SEA auto-tech round this year

3. [Badminton] Lee Zii Jia reaches All England semis...
   → Faces Axelsen in Saturday's match

4. [AI + MY] MDEC launches AI Roadmap 2.0...
   → Relevant to both your AI and Malaysian tech interests

5. [Crypto] Bitcoin crosses $80K amid institutional inflows...
   → First time since December correction

Reply with a number to go deeper.
```

### Go Deep on What Matters

```
You: Tell me more about #4

Aman Feed: 🔍 MDEC AI Roadmap 2.0

Background: Malaysia's digital economy agency MDEC has been
pushing AI adoption since 2020...

What's new: The updated roadmap focuses on three pillars...

Why it matters to you: As someone following both AI and
Malaysian startups, this creates opportunities for...

What to watch: Budget allocation announcement expected in Q2...
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
cd aman-showcase/feed

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Feed
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Tell it what topics you're interested in and say "what's new" for your first briefing.

<details>
<summary><strong>How to get a Telegram bot token (BotFather)</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "My Feed Bot") and a username (e.g., `my_feed_bot`)
4. Copy the token — paste it as `TELEGRAM_BOT_TOKEN` in your `.env` file

</details>

---

## Features

<table>
<tr>
<td width="50%">

### Briefings
Say **"what's new"** or **"briefing"** and get:
- 5 personalized headlines matched to your interests
- Why each item matters to you specifically
- Cross-topic connections you might have missed
- Links back to your last discussed items

</td>
<td width="50%">

### Deep Dives
Say **"tell me more about #N"** and get:
- Full background and context
- Current development explained clearly
- Implications and what to watch next
- Connections to other topics you follow

</td>
</tr>
<tr>
<td>

### Topic Following
Say **"follow [topic]"** or **"unfollow [topic]"**:
- Add any topic in plain language
- Set priority (high, medium, low)
- View and edit your full interest profile
- Get suggestions based on your patterns

</td>
<td>

### Weekly Digests
Say **"weekly digest"** and get:
- Top stories ranked across all your interests
- Topic-by-topic summary of the week
- Emerging topics worth adding
- Upcoming events to watch next week

</td>
</tr>
</table>

---

## Commands Reference

| Say this | What happens |
|----------|-------------|
| `what's new` / `briefing` | Your personalized briefing, right now |
| `tell me more about #N` | Deep dive on briefing item N |
| `follow [topic]` | Add a new topic to your feed |
| `unfollow [topic]` | Remove a topic you no longer care about |
| `my feed` | View and manage your full interest profile |
| `weekly digest` | Full week summary across all interests |
| `[share a link]` | Summarizes the article and saves it to memory |

---

## How It Learns

Aman Feed builds a picture of what matters to you through four signals:

| Signal | How it works |
|--------|-------------|
| **Explicit** | You say "follow AI and cybersecurity" — instantly added |
| **Behavioral** | You always ask for more on AI stories — priority goes up automatically |
| **Negative** | You skip entertainment items every briefing — weight goes down over time |
| **Temporal** | You read in the morning — briefings timed to when you're actually paying attention |

The result: your briefings get sharper the more you use it. Topics you care about rise. Topics you ignore fade. No manual tuning required.

---

## How It Works

Aman Feed is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, knowledge, and working method:

```
feed/
├── identity/core.md              → Focused, efficient, signal-over-noise editorial voice
├── workflows/flow.md             → Interest intake → briefing → deep dive → learn
├── rules/rules.md                → Always personalize, never pad, surface connections
├── skills/feed-skill.md          → Briefing generation, topic management, interest tracking
├── content/
│   ├── templates/briefing-format.md  → Daily, deep-dive, and weekly digest formats
│   └── guides/
│       ├── getting-started.md    → First conversation walkthrough
│       └── topic-ideas.md        → Popular topic categories to explore
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides the engine:

| Layer | Package | What it does for Aman Feed |
|-------|---------|---------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the assistant editorial, concise, and signal-focused |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every topic, deep dive, and behavioral pattern |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures the loop: intake → brief → dive → learn → refine |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures briefings stay personalized and relevant, never generic |
| Skills | [askill](https://github.com/amanasmuei/askill) | Briefing generation, interest tracking, topic priority management |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Restore Your Config

Aman Feed automatically backs up your existing ecosystem files during setup.

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
| Add topic category guides for new domains | Easy | High |
| Improve briefing format templates | Easy | Medium |
| Add source credibility and bias tracking | Medium | High |
| Build newsletter digest export | Medium | Medium |
| Add multi-user / shared feed support | Medium | High |
| Fork and configure for a specific audience | Medium | Very High |

```bash
git checkout -b improve-feed-content
# Make your changes
git push origin improve-feed-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Your news. Your interests. Your AI.*

</div>
