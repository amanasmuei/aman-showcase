<div align="center">

# Aman Bahasa

### A free AI language tutor that never forgets your progress

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Learn **Malay** or **English** through conversation with an AI tutor that remembers your vocabulary, adapts to your level, and follows structured lesson plans — all on Telegram.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Lessons](#-lessons) · [Fork for Your Language](#-fork-it-for-your-language)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase bahasa
```

Or deploy to the cloud (no local setup needed):

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Every AI chatbot forgets you.

You tell ChatGPT your level. You learn 10 words. You close the chat.

Tomorrow? It asks your level again. Your progress? Gone.

## The Solution

**Aman Bahasa remembers.**

It knows you struggled with *"masak"* vs *"makan"* last week. It knows you prefer conversation over drills. It knows you completed Lesson 7 and that directions are your weak spot.

It picks up exactly where you left off. Every single time.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your tutor lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/bahasa

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Bahasa
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Say *"hi"* and start learning.

<details>
<summary><strong>How to get a Telegram bot token</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Bahasa") and username (e.g., `aman_bahasa_bot`)
4. Copy the token into your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Learn with Structure
Say **"lesson"** and get a guided lesson:
1. Review previous words
2. Learn 5-8 new words with examples
3. Practice exercises
4. Conversation scenario
5. Progress saved to memory

</td>
<td width="50%">

### Learn by Talking
Say **"let's talk"** and have a real conversation:
- Realistic scenarios (at a mamak, giving directions)
- Gentle corrections without breaking flow
- New words introduced naturally
- Cultural context woven in

</td>
</tr>
<tr>
<td>

### Review & Remember
Say **"review"** and the tutor:
- Finds words you learned 3+ days ago
- Focuses on your weak spots first
- Uses spaced repetition principles
- Updates your progress

</td>
<td>

### Track Progress
Say **"quiz me"** or **"progress"**:
- 5-question quizzes on recent material
- Score tracking across sessions
- Level-up suggestions when ready
- Full stats: words learned, streak, level

</td>
</tr>
</table>

### Commands Reference

| Say this | What happens |
|----------|-------------|
| `hi` or `/start` | Start learning — pick your language and level |
| `lesson` or `next lesson` | Begin a structured lesson with new vocabulary |
| `let's talk` or `conversation` | Free conversation practice in Malay |
| `review` | Review words you've learned (focuses on weak areas) |
| `quiz me` | Take a 5-question quiz on recent material |
| `progress` or `how am I doing?` | See your stats — words learned, level, streak |
| `change level` | Adjust difficulty up or down |
| `switch to English` / `tukar ke Melayu` | Switch learning direction |

---

## Lessons

### Beginner Track

| # | Topic | What You'll Learn | Key Words |
|---|-------|-------------------|-----------|
| 1 | **Greetings** | Hello, goodbye, thank you | selamat pagi, apa khabar, terima kasih |
| 2 | **Introductions** | Name, origin, age | nama saya, saya dari, umur |
| 3 | **Numbers** | Counting 1-20, patterns | satu, dua, tiga... dua puluh |
| 4 | **Family** | Family members, respect terms | ibu, ayah, abang, kakak |
| 5 | **Food & Drinks** | Ordering at a mamak | nasi, ayam, makan, teh tarik |
| 6 | **Colors & Objects** | Describing things (adj after noun!) | merah, biru, buku merah |
| 7 | **Daily Routine** | Morning to night | bangun, mandi, tidur, kerja |
| 8 | **At the Market** | Shopping, bargaining | berapa, mahal, boleh kurang? |
| 9 | **Directions** | Finding your way (di vs ke) | kiri, kanan, di mana |
| 10 | **Transport** | Getting around | kereta, bas, naik, turun |

> **~80 vocabulary words** across 10 lessons. More coming soon!

### What Makes These Lessons Special

- **Cultural context in every lesson** — "Dah makan?" isn't about food, it's a greeting
- **Common mistakes highlighted** — masak vs makan, adjective placement
- **Conversation scenarios** — practice in realistic Malaysian settings
- **Progressive difficulty** — each lesson builds on the previous

---

## How It Works

Aman Bahasa is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, knowledge, and teaching method:

```
bahasa/
├── identity/core.md          → Warm, patient bilingual tutor
├── workflows/flow.md         → Lesson → Review → Quiz → Conversation → Progress
├── rules/rules.md            → Gentle corrections, max 8 words per lesson
├── skills/bahasa-skill.md    → Malay patterns, cultural context, Lv.1-5
├── content/lessons/          → 10 structured beginner lessons
├── content/vocabulary/       → ~80 core words by topic
└── config/setup.sh           → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides:

| Layer | Package | What it does for Bahasa |
|-------|---------|------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the tutor warm, patient, and bilingual |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers vocabulary, weak areas, preferences |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures lessons: review → teach → practice → save |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures gentle corrections, no overload |
| Skills | [askill](https://github.com/amanasmuei/askill) | Malay language patterns and teaching strategies |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Fork It for Your Language

The best part: **you can teach any language with this template.**

```bash
# 1. Fork this repo
# 2. Copy the bahasa folder
cp -r bahasa japanese

# 3. Edit the files:
#    - identity/core.md     → Japanese tutor personality
#    - skills/*.md          → Japanese language patterns
#    - content/lessons/     → Japanese lesson content
#    - rules/rules.md       → Japanese teaching rules

# 4. Run setup and you have a Japanese tutor
cd japanese && bash config/setup.sh
```

**Language ideas:** Japanese, Arabic, Tamil, Spanish, Korean, Mandarin, Hindi, French, Swahili...

The ecosystem handles memory, delivery, and workflows. You just bring the content.

---

## Restore Your Config

Aman Bahasa automatically backs up your existing ecosystem files during setup.

```bash
# List available backups
bash config/teardown.sh

# Restore a specific backup
bash config/teardown.sh backup/20260329-143022
```

---

## Contributing

We'd love your help making Aman Bahasa better:

| Contribution | Difficulty | Impact |
|-------------|-----------|--------|
| Fix Malay translations | Easy | High |
| Add cultural notes | Easy | Medium |
| Write intermediate lessons (11-20) | Medium | High |
| Write advanced lessons (21+) | Medium | High |
| Fork for a new language | Medium | Very High |
| Add voice pronunciation support | Hard | High |

```bash
git checkout -b improve-lessons
# Make your changes
git push origin improve-lessons
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*An AI tutor that grows with you — not one that forgets you.*

</div>
