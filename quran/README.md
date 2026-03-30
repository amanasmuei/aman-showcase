<div align="center">

# Aman Quran

### Understand what you recite

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Learn **Quranic Arabic vocabulary** with an AI companion that remembers your progress, teaches through word roots, and provides every word in context of the actual ayah.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Lessons](#-lessons) · [Contributing](#-contributing)

</div>

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase quran
```

Or deploy to the cloud (no local setup needed):

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Most Muslims recite the Quran daily. Beautiful words, perfect tajweed, deep reverence.

But many don't understand the Arabic.

"Alhamdulillahi Rabbil 'aalameen" — you've said it thousands of times. Do you know what every word means?

## The Solution

**Aman Quran teaches you the words you already recite.**

~300 words make up ~70% of the Quran. Learn those, and you transform your relationship with the Book.

This is **not** a tafsir app. **Not** an imam. It's a vocabulary learning tool that helps you understand Arabic — word by word, root by root, ayah by ayah.

> *"Aman Quran teaches Quranic Arabic vocabulary to help you understand what you recite. For religious interpretation (tafsir) and rulings (fatwa), please consult qualified scholars."*

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your companion lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/quran

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Quran
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Say *"Bismillah"* and start learning.

<details>
<summary><strong>How to get a Telegram bot token</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Quran") and username (e.g., `aman_quran_bot`)
4. Copy the token into your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Learn Common Words
Say **"lesson"** to learn the most frequently used Quranic words:
- 5 words per lesson with Arabic script
- Every word shown in its Quranic ayah
- Root patterns highlighted
- Progress saved to memory

</td>
<td width="50%">

### Explore Word Roots
Say **"root"** or **"explore root ر-ح-م"**:
- One root unlocks 5-10 related words
- See how Arabic builds meaning from 3 letters
- Connect vocabulary exponentially
- Root ر-ح-م → Rahman, Raheem, rahmah...

</td>
</tr>
<tr>
<td>

### Study Surahs
Say **"surah Al-Fatihah"**:
- Verse-by-verse vocabulary breakdown
- Arabic script + transliteration + meaning
- Key roots identified per verse
- Understand what you recite in salah

</td>
<td>

### Track Progress
Say **"quiz me"** or **"progress"**:
- 5-question quizzes with ayah context
- "You know X words = ~Y% Quran comprehension"
- Weak areas reviewed automatically
- Roots mastered, surahs completed

</td>
</tr>
</table>

### Commands Reference

| Say this | What happens |
|----------|-------------|
| `Bismillah` or `/start` | Start learning — choose your path |
| `lesson` | Learn the next 5 most common Quran words |
| `root` or `explore root` | Deep-dive into an Arabic root and its derivatives |
| `surah Al-Fatihah` | Study a surah's vocabulary verse by verse |
| `review` | Review words you've learned (weak areas first) |
| `quiz me` | 5-question quiz on recent material |
| `progress` | See your stats — words, roots, comprehension estimate |

---

## Lessons

### Track 1: Most Common Words

| Lessons | Words | Cumulative Quran Coverage |
|---------|-------|--------------------------|
| 1-5 | Top 25 words | ~25% |
| 6-10 | Words 26-50 | ~35% |
| 11-12 | Words 51-60 | ~40% |

> **12 lessons. 60 words. ~40% of the Quran understood.**

### Track 2: Word Roots

20 most common roots with 4-6 derivatives each. Learn one root, unlock a family of words:

| Root | Meaning | Example Words |
|------|---------|---------------|
| ر-ح-م | mercy | Rahman, Raheem, rahmah |
| ع-ل-م | knowledge | 'ilm, 'Aleem, 'aalameen |
| ك-ت-ب | writing | kitab, kataba, maktub |
| ع-ب-د | worship | 'abd, 'ibadah, na'budu |
| ه-د-ي | guidance | huda, ihdina, muhtadeen |

### Track 3: Surah Study

| Surah | Ayahs | Why |
|-------|-------|-----|
| **Al-Fatihah** | 7 | Recited 17+ times daily in salah |
| **Al-Ikhlas** | 4 | Core of tawheed (monotheism) |
| **Al-Falaq** | 5 | Seeking refuge — morning/evening adhkar |
| **An-Nas** | 6 | Seeking refuge — morning/evening adhkar |

---

## How It Works

Aman Quran is **not** a traditional app. It's markdown files that give an AI its knowledge and teaching method:

```
quran/
├── identity/core.md              → Respectful Quranic Arabic vocabulary tutor
├── workflows/flow.md             → lesson, root, surah-study, review, quiz, progress
├── rules/rules.md                → Strict religious content guardrails
├── skills/quran-arabic-skill.md  → Root system, verb forms, particles, patterns
├── content/
│   ├── lessons/common-words/     → 12 lessons (top 60 words)
│   ├── lessons/surahs/           → 4 surah studies (verse by verse)
│   ├── roots/                    → 20 common roots with derivatives
│   └── vocabulary/               → Reference wordlist
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides memory, delivery channels, and runtime — so every word you learn is remembered forever.

---

## Important Note

Aman Quran is a **vocabulary learning tool**. It teaches Arabic words and their meanings as they appear in the Quran.

It does **not**:
- Interpret verses (tafsir)
- Give religious rulings (fatwa)
- Provide spiritual advice
- Replace qualified Islamic scholars

For religious guidance, please consult qualified scholars and trusted Islamic institutions.

---

## Contributing

| Contribution | Difficulty | Impact |
|-------------|-----------|--------|
| Verify Arabic accuracy | Easy | Very High |
| Add more surah studies | Medium | High |
| Expand to top 300 words (lessons 13-60) | Medium | Very High |
| Add tajweed pronunciation notes | Medium | High |
| Improve root explanations | Easy | Medium |

```bash
git checkout -b improve-quran-content
# Make your changes
git push origin improve-quran-content
# Open a PR!
```

> **Arabic accuracy is critical.** If you spot any error in Quranic text, transliteration, or translation, please open an issue immediately.

---

## Restore Your Config

```bash
# List available backups
bash config/teardown.sh

# Restore a specific backup
bash config/teardown.sh backup/20260329-143022
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Understand the words you already love.*

</div>
