# Aman Muslim
### Your daily Islamic companion

An AI companion that helps Muslims maintain consistent daily ibadah — prayer times, qiblat direction, daily hadith, morning/evening adhkar, du'a for every situation, and a gentle ibadah tracker. It speaks in Malay and English, remembers your journey, and encourages you without ever judging you.

> **Disclaimer:** Aman Muslim is a practice companion, not a fatwa source. All hadith are from authenticated collections (Sahih Bukhari, Sahih Muslim, Hadith 40 Imam Nawawi). For religious rulings, always consult your local ustaz, imam, or mufti.

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase muslim
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/muslim)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Busy life pulls you away from ibadah. You miss Fajr. You forget the morning adhkar. You can't remember which hadith you last studied. You want to be consistent — but consistency is hard when you're navigating it alone.

Apps exist. But apps send notifications. They don't understand context. They can't tell the difference between "I'm traveling this week" and "I've given up." They share a hadith without explanation. They show prayer times without asking if you made it.

What you need is not another notification. You need a knowledgeable friend who checks in, explains things gently, remembers where you left off, and never makes you feel guilty for being human.

---

## The Solution

Aman Muslim is an AI companion — like a caring ustaz(ah) friend who is always available. It:

- Gives you **accurate prayer times** for your city using JAKIM (or any standard method)
- Teaches you **daily hadith** from Hadith 40 Imam Nawawi with Arabic text, transliteration, and context
- Guides your **morning and evening adhkar** step by step with Arabic and transliteration
- Shares **authentic du'a** for every situation — eating, sleeping, traveling, rain, anxiety
- Tracks your **ibadah consistency** and celebrates your streaks
- **Remembers your journey** — your location, your progress, your preferences
- Speaks your language — **Malay and English**, naturally bilingual
- Is available on **Telegram** — where you already are

---

## Examples

### Prayer Times

```
You: waktu solat

Aman Muslim: 🕌 Prayer Times — Kuala Lumpur, 29 Mac 2026

Subuh:    5:47 AM ✅ (confirmed)
Syuruk:   7:01 AM
Zohor:    1:15 PM ← next prayer (in 2 hours)
Asar:     4:35 PM
Maghrib:  7:22 PM
Isyak:    8:34 PM

🔥 Prayer streak: 5 days complete!
```

### Daily Hadith

```
Aman Muslim: 📖 Hadith Hari Ini — #1 dari 40 Hadith Imam Nawawi

"Actions are judged by intentions..."

إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ

Innamal a'malu bin niyyat...

Every action you do depends on your intention.
Even eating can be ibadah if you intend to nourish
your body to worship Allah better.

— Riwayat Bukhari & Muslim (dari Umar RA)

Progress: 1/40 hadith 📚
```

---

## Features

|  | Feature | What It Does |
|--|---------|-------------|
| 🕌 | **Prayer Times** | Accurate solat times for your city. Highlight next prayer. Track streak. |
| 📖 | **Daily Hadith** | One hadith from Hadith 40 Nawawi per day. Arabic + transliteration + lesson. |
| 🤲 | **Dhikr Guide** | Morning/evening adhkar and after-solat dhikr. Step by step with Arabic text. |
| 📊 | **Ibadah Tracker** | Weekly prayer grid, hadith progress (N/40), streak highlights. |

---

## Commands

| Command | What It Does |
|---------|-------------|
| `waktu solat` / `prayer times` | Show today's prayer times for your city |
| `arah kiblat` / `qiblat` | Get qiblat direction from your location |
| `hadith` / `daily hadith` | Get today's hadith from Hadith 40 Nawawi |
| `adhkar pagi` / `morning adhkar` | Morning adhkar guide with Arabic + transliteration |
| `adhkar petang` / `evening adhkar` | Evening adhkar guide |
| `zikir selepas solat` / `after solat dhikr` | Post-prayer dhikr sequence |
| `du'a [situation]` | Du'a for any situation (eating, sleeping, traveling...) |
| `pagi` / `good morning` | Daily check-in: prayer times + hadith + adhkar reminder |
| `progress` / `ibadah tracker` | Weekly prayer summary, hadith progress, streaks |
| `solat [prayer] ✅` | Confirm you prayed (e.g., "dah solat Zohor") |
| `location [city]` | Set or update your city for prayer times |

---

## Built for Malaysian Muslims

Aman Muslim is built with the Malaysian Muslim context in mind — but works for any Muslim anywhere.

**JAKIM Prayer Times**
Uses the official JAKIM calculation method by default — the same standard used by mosques, apps, and official Malaysian sources. Switch to ISNA, MWL, or other methods for users outside Malaysia.

**Bahasa Melayu**
Fully bilingual in Malay and English. Uses Islamic terminology naturally in both languages: solat, du'a, dhikr, surah, riwayat, MasyaAllah. Switch anytime based on your preference.

**Ramadan Awareness**
During Ramadan, Aman Muslim automatically adds:
- Sahur and Imsak times
- Iftar (Maghrib) countdown
- Tarawih reminder
- Laylatul Qadr alerts for the last 10 nights (especially odd nights)
- Dua berbuka puasa before every iftar

**Mazhab Shafi'i Default**
Presents mainstream practice in line with the predominant mazhab in Malaysia. Does not favor or argue between mazhab — when fiqh differences exist, presents the mainstream view and redirects detailed questions to scholars.

**Local Religious Authority**
Aman Muslim consistently directs users to JAKIM, local mufti offices, and qualified ustaz for fatwa and religious rulings. It is a companion, not an authority.

---

## Content Sources

All content in Aman Muslim is from authenticated Islamic sources:

- **Hadith:** Sahih Bukhari, Sahih Muslim, Hadith 40 Imam Nawawi, Sunan Abu Dawud, Sunan al-Tirmidhi (with grading)
- **Du'a:** Quran and authentic Sunnah only
- **Dhikr:** Hisn al-Muslim (Fortress of the Muslim) by Sa'id ibn 'Ali ibn Wahf al-Qahtani
- **Prayer Times:** JAKIM (Malaysia), ISNA (Americas), MWL (Europe), Egyptian General Authority
- **Qiblat:** Calculated from GPS coordinates

Aman Muslim will never share fabricated (maudhu') or very weak (dhaif jiddan) hadith. Every hadith includes its source and narrator.

---

## Setup

### Quick Start

1. Copy and configure the environment file:
   ```bash
   cp config/telegram.env.example config/telegram.env
   # Edit config/telegram.env with your values
   ```

2. Run setup:
   ```bash
   chmod +x config/setup.sh config/teardown.sh
   ./config/setup.sh
   ```

3. Start the bot and send your first message:
   ```
   Assalamu'alaikum
   ```

4. Tell Aman your city and choose your preferences. You're ready.

### Full Setup Guide
See `content/guides/getting-started.md` for a detailed walkthrough including a first-day example conversation.

---

## File Structure

```
muslim/
├── identity/
│   └── core.md              # Personality, style, values, boundaries
├── rules/
│   └── rules.md             # Always/never rules, content sources, memory rules
├── workflows/
│   └── flow.md              # Prayer, hadith, dhikr, dua, daily, progress workflows
├── skills/
│   └── muslim-skill.md      # Islamic knowledge: prayers, adhkar, Ramadan, context
├── content/
│   ├── hadith/
│   │   └── hadith-40-nawawi.md   # 40 Hadith Imam Nawawi (v1: first 10)
│   ├── guides/
│   │   └── getting-started.md   # Setup guide and first-day walkthrough
│   └── templates/
│       └── reminder-formats.md  # All output format templates
├── config/
│   ├── setup.sh             # Setup script
│   ├── teardown.sh          # Teardown script
│   └── telegram.env.example # Environment template
└── README.md
```

---

## Part of the Aman Ecosystem

Aman Muslim is one companion in the Aman AI ecosystem — a family of specialized AI companions built on the same architecture.

| Companion | Focus |
|-----------|-------|
| **Aman Muslim** | Daily ibadah: prayer times, hadith, dhikr, du'a |
| **Aman Quran** | Quranic vocabulary, word study, memorization support |
| *(more coming)* | |

Each companion has its own identity, rules, and skills — but shares the same memory infrastructure, allowing them to know the same user across contexts.

---

*Istiqamah bermula dengan satu langkah.*
(Consistency begins with one step.)
