<div align="center">

# Aman Rutin

**Never miss your ubat again**

[![aman ecosystem](https://img.shields.io/badge/aman-ecosystem-blue)](https://github.com/aman_asmuei)
[![Telegram](https://img.shields.io/badge/channel-Telegram-26A5E4)](https://telegram.org)
[![language](https://img.shields.io/badge/language-Malay%20%2F%20English-green)](#built-for-malaysian-families)

</div>

---

## The Problem

Your parents take 5 different medications at different times. They forget. You worry.

Pill boxes help — but nobody checks if they actually took it. Apps are too complex for elderly parents who just want to use Telegram. And you can't be there every morning to remind them.

## The Solution

A Telegram companion that reminds gently in Malay, tracks every dose, celebrates streaks, and gives family peace of mind. Simple enough for mak and ayah — they just reply "Dah" and everything is tracked.

---

## How It Feels

**Daily reminder for mak:**

```
Aman Rutin: ⏰ Pagi, Mak! Dah ambil ubat?
            💊 Amlodipine 5mg (ubat darah tinggi)

Mak: Dah

Aman Rutin: ✅ Bagus mak! Ubat pagi dah ambil.
            🔥 12 hari berturut-turut! Hebat!

            Nanti tengah hari ada Metformin ya.
```

**You checking in from far away:**

```
Anak: How's mak's medication today?

Aman Rutin: 📋 Mak's Status — Today

            ✅ Amlodipine 5mg (8:20am)
            ✅ Metformin 500mg — lunch (12:30pm)
            ⬜ Metformin 500mg — dinner (pending)
            ⬜ Simvastatin 20mg — night (pending)

            Adherence this week: 92% 💪
            Streak: Morning ubat — 12 days! 🔥
```

---

## Quick Start

> Set up for yourself OR for your parents

**1. Clone and configure**

```bash
git clone https://github.com/aman_asmuei/aman-rutin
cd aman-rutin
cp config/telegram.env.example .env
# Edit .env — add your Telegram bot token and LLM API key
```

**2. Run setup**

```bash
bash config/setup.sh
```

**3. Start the bot**

```bash
npx @aman_asmuei/achannel add telegram
npx @aman_asmuei/achannel serve
```

**4. Tell the bot your medications**

```
You: I take ubat darah tinggi every morning after breakfast, 1 tablet 5mg
```

That's it. Reminders start immediately.

---

## Features

| | |
|---|---|
| **💊 Medication Reminders** | Daily reminders at the right time for each medication. Morning, lunch, dinner, night — configured once, runs forever. | **📋 Daily Routines** | Track anything beyond medication: blood pressure checks, exercise, water intake, prayer times. |
| **🔥 Streak Tracking** | Celebrate consistency. 12 days in a row gets noticed. Missing a day motivates getting back on track. | **👨‍👩‍👧 Family Monitoring** | Anak can check mak's adherence anytime. Full history, weekly reports, real peace of mind. |

---

## Commands

| Say this | What happens |
|----------|-------------|
| `add ubat [name]` | Add new medication |
| `dah` / `done` / `✅` | Confirm task completed |
| `status` / `hari ni` | See today's checklist |
| `history` / `minggu ni` | See weekly adherence |
| `setup for mak/ayah` | Set up profile for a parent |
| `tambah rutin [task]` | Add a daily routine task |

---

## Built for Malaysian Families

- **Malay language** — reminders and responses in Bahasa Malaysia, the way mak and ayah actually speak
- **Local medication names** — Amlodipine, Metformin, Simvastatin, and other common KKM medications
- **Ramadan awareness** — knows that fasting affects medication timing; prompts to check with doctor
- **Cultural sensitivity** — warm, respectful tone suited for elderly family members

---

## Beyond Medication

Aman Rutin tracks any daily health habit:

- Blood pressure checks — morning and evening readings
- Blood sugar monitoring — before/after meals
- Exercise — jalan pagi, senaman, steps
- Water intake — 8 glasses a day goal
- Prayer times — baca Quran, zikir after Subuh
- Vitamins and supplements

Everything in one place, one conversation, one bot.

---

## Contributing

This is part of the [aman ecosystem](https://github.com/aman_asmuei). Contributions welcome:

- New medication templates for common Malaysian prescriptions
- Translations for additional languages (Tamil, Mandarin)
- Improved streak logic and milestone celebrations
- Integration guides for clinic reminder systems

Open an issue or pull request to get started.

---

<div align="center">

*Jaga kesihatan keluarga. Satu reminder pada satu masa.*

*(Take care of family health. One reminder at a time.)*

</div>
