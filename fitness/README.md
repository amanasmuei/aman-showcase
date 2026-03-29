<div align="center">

# Aman Fit

### Your AI trainer that never forgets your progress.

[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![Zero Code](https://img.shields.io/badge/application%20code-zero-brightgreen)](#how-it-works)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A personal fitness trainer on Telegram that remembers every workout you've logged, tracks your nutrition, adapts programs to your level, and follows up on your progress — all without writing a single line of code.

[Quick Start](#-quick-start) · [Features](#-what-can-it-do) · [Programs](#-programs) · [How It Works](#-how-it-works)

</div>

---

## The Problem

Every fitness app resets your context.

You log a workout. You note your weight. You track your calories.

Then you open a new chat with an AI, and it asks: *"What are your fitness goals?"*

Your squat PR? Gone. Your streak? Gone. The fact that you tweaked your knee last Tuesday? Gone.

## The Solution

**Aman Fit remembers.**

It knows you hit 80 kg on squats last session and were aiming for 82.5 kg this week. It knows you prefer morning workouts and that you're on Week 3 of the beginner program. It knows you skipped Thursday because of work and that your protein has been low.

It picks up exactly where you left off. Every single time.

> Built with zero application code — just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei/aman).

---

## Quick Start

### Prerequisites

| Requirement | Notes |
|------------|-------|
| [Node.js](https://nodejs.org/) v18+ | Runtime |
| [Telegram](https://telegram.org/) account | Where your trainer lives |
| LLM API key | [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/) |

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/fitness

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Install ecosystem
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Fit
bash config/setup.sh

# 5. Launch
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram. Say *"let's train"* and get started.

<details>
<summary><strong>How to get a Telegram bot token</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name (e.g., "Aman Fit") and username (e.g., `aman_fit_bot`)
4. Copy the token into your `.env` file

</details>

---

## What Can It Do?

<table>
<tr>
<td width="50%">

### Workout
Say **"let's train"** or **"today's workout"** and get:
- Your scheduled session from your active program
- Exercise-by-exercise guidance with form cues
- Easier and harder variations based on your level
- Each set logged automatically to memory

</td>
<td width="50%">

### Log
Say **"log workout"** or describe what you did:
- Log any exercise, sets, reps, and weight
- Free-form or structured — both work
- Rest days logged too (recovery matters)
- Session summary saved with timestamp

</td>
</tr>
<tr>
<td>

### Nutrition
Say **"log meal"** or **"how's my nutrition?"**:
- Track calories, protein, carbs, and fats
- Daily and weekly summaries
- Smart reminders if protein is low
- Meal suggestions based on your goals

</td>
<td>

### Progress
Say **"progress"** or **"how am I doing?"**:
- Workout streak and total sessions
- PRs across all tracked lifts
- Body weight trend (if logged)
- Program completion percentage

</td>
</tr>
</table>

### Commands Reference

| Say this | What happens |
|----------|-------------|
| `let's train` or `today's workout` | Get your scheduled session for today |
| `log workout` | Log a completed workout (guided or free-form) |
| `log meal` | Track a meal with macros |
| `progress` or `how am I doing?` | See your stats — streak, PRs, program status |
| `nutrition` or `macros today` | Check today's calorie and macro totals |
| `program` | See your active program and upcoming sessions |
| `rest day` | Log a rest day and get recovery tips |
| `/start` | Set up your profile — goal, level, equipment |

---

## Programs

### Beginner: Full Body 3-Day — 4 Weeks

The foundation program. 3 sessions per week, minimal equipment, focus on learning movement patterns.

| Week | Focus | Volume |
|------|-------|--------|
| **1–2** | Learn the movements | 3 sets × 8–10 reps |
| **3–4** | Increase volume | 3 sets × 10–12 reps |

**Schedule:** Monday / Wednesday / Friday (or any 3 non-consecutive days)

| Session | Key Exercises |
|---------|--------------|
| **Full Body A** | Bodyweight Squat, Push-up, Dumbbell Row, Plank, Glute Bridge |
| **Full Body B** | Reverse Lunge, Overhead Press, Superman Hold, Dead Bug, Wall Sit |
| **Full Body C** | Goblet Squat, Incline Push-up, Dumbbell Deadlift, Bird Dog, Calf Raises |

**Equipment:** Bodyweight + optional dumbbells

**After 4 weeks:** Graduate to a 4-day upper/lower split with progressive overload.

> More programs coming: Intermediate Upper/Lower Split, Home HIIT, Strength Foundations (barbell), and more.

---

## How It Works

Aman Fit is **not a traditional app**. There is no custom code.

It's a set of **markdown files** that give an AI its personality, knowledge, and coaching method:

```
fitness/
├── identity/core.md              → Motivating, no-nonsense personal trainer
├── workflows/flow.md             → Workout → Log → Nutrition → Progress
├── rules/rules.md                → Safe progressions, no dangerous advice
├── skills/fitness-skill.md       → Exercise library, programming principles
├── content/
│   ├── programs/beginner/        → Full Body 3-Day (4-week program)
│   ├── exercises/                → Form cues, variations, muscle groups
│   └── nutrition/                → Macro targets, meal tracking rules
└── config/setup.sh               → One-command setup with backup
```

The [aman ecosystem](https://github.com/amanasmuei/aman) provides:

| Layer | Package | What it does for Aman Fit |
|-------|---------|--------------------------|
| Identity | [acore](https://github.com/amanasmuei/acore) | Makes the trainer motivating, direct, and safety-conscious |
| Memory | [amem](https://github.com/amanasmuei/amem) | Remembers every workout, PR, body weight, and nutrition log |
| Workflows | [aflow](https://github.com/amanasmuei/aflow) | Structures sessions: warm-up → train → log → progress → recovery |
| Guardrails | [arules](https://github.com/amanasmuei/arules) | Ensures safe progressions, no injury-risking advice |
| Skills | [askill](https://github.com/amanasmuei/askill) | Exercise library, programming logic, and nutrition knowledge |
| Channels | [achannel](https://github.com/amanasmuei/achannel) | Delivers on Telegram and Web |

---

## Restore Your Config

Aman Fit automatically backs up your existing ecosystem files during setup.

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
| Add more exercise form cues | Easy | High |
| Improve nutrition tracking rules | Easy | Medium |
| Write intermediate programs (4-day split) | Medium | High |
| Write strength programs (barbell focus) | Medium | High |
| Add HIIT / cardio programs | Medium | High |
| Fork for a different sport (yoga, cycling) | Medium | Very High |

```bash
git checkout -b improve-fitness-content
# Make your changes
git push origin improve-fitness-content
# Open a PR!
```

---

## License

MIT

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Your AI trainer that never forgets your progress.*

</div>
