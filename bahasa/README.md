# Aman Bahasa

**A free AI language tutor that never forgets your progress.**

Learn Malay or English through conversation with an AI tutor that remembers your vocabulary, adapts to your level, and follows structured lesson plans — all on Telegram.

Built with zero application code. Just markdown configuration + the [aman ecosystem](https://github.com/amanasmuei).

## Why?

Every AI chatbot forgets you. You tell ChatGPT your level, learn 10 words, close the chat — and tomorrow it asks your level again.

Aman Bahasa remembers. It knows you struggled with "masak" vs "makan" last week. It knows you prefer conversation over drills. It picks up exactly where you left off.

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A Telegram account
- An LLM API key (Anthropic, OpenAI, or free with [Ollama](https://ollama.com/))

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/bahasa

# 2. Configure
cp config/telegram.env.example .env
# Edit .env with your Telegram bot token + API key

# 3. Install ecosystem (if not already installed)
npx @aman_asmuei/achannel add telegram

# 4. Setup Aman Bahasa
bash config/setup.sh

# 5. Start
npx @aman_asmuei/achannel serve
```

Now message your bot on Telegram. Say "hi" and start learning!

### Get a Telegram Bot Token

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot` and follow the prompts
3. Copy the token into your `.env` file

## What Can It Do?

| Say this | What happens |
|----------|-------------|
| "hi" or `/start` | Start learning — pick your language and level |
| "lesson" | Begin a structured lesson with new vocabulary |
| "let's talk" | Free conversation practice in Malay |
| "review" | Review words you've learned (focuses on weak areas) |
| "quiz me" | Take a 5-question quiz on recent material |
| "progress" | See your stats — words learned, level, streak |

## How It Works

Aman Bahasa is **not** a traditional app. There is no custom code. It's a set of markdown configuration files that plug into the [aman ecosystem](https://github.com/amanasmuei):

| File | Ecosystem Layer | Purpose |
|------|----------------|---------|
| `identity/core.md` | [acore](https://github.com/amanasmuei/acore) | Tutor personality — warm, patient, bilingual |
| `workflows/flow.md` | [aflow](https://github.com/amanasmuei/aflow) | Lesson structure — review, teach, practice, quiz |
| `rules/rules.md` | [arules](https://github.com/amanasmuei/arules) | Teaching rules — gentle corrections, no overload |
| `skills/bahasa-skill.md` | [askill](https://github.com/amanasmuei/askill) | Malay language knowledge and teaching patterns |
| `content/lessons/` | Lesson content | 10 beginner lessons with vocabulary and exercises |

Memory is handled by [amem](https://github.com/amanasmuei/amem) — your vocabulary, progress, and weak areas persist across sessions.

## Content

### Beginner Track (10 lessons)

1. Greetings — selamat pagi, apa khabar, terima kasih
2. Introductions — nama saya, saya dari
3. Numbers — satu to dua puluh
4. Family — ibu, ayah, adik, abang, kakak
5. Food & Drinks — nasi, ayam, makan, minum
6. Colors & Objects — merah, biru, buku merah (adjective after noun!)
7. Daily Routine — bangun, mandi, tidur, kerja
8. At the Market — berapa, mahal, murah, boleh kurang?
9. Directions — kiri, kanan, di mana, di vs ke
10. Transport — kereta, bas, naik, turun

More lessons coming soon. Contributions welcome!

## Fork It for Your Language

The best part: you can fork this repo and teach **any language**. Just:

1. Fork this repo
2. Edit `identity/core.md` — change the tutor personality
3. Replace lesson content in `content/lessons/`
4. Update `skills/bahasa-skill.md` with your language's patterns
5. Run `setup.sh` and you have a new language tutor

Japanese, Arabic, Tamil, Spanish, Korean — the ecosystem handles everything else.

## Restore Your Config

Aman Bahasa backs up your existing ecosystem files during setup. To restore:

```bash
bash config/teardown.sh backup/<timestamp>
```

## Contributing

- Add more lessons (intermediate, advanced)
- Improve vocabulary lists
- Add cultural notes
- Fix language accuracy
- Fork for a new language and share!

## License

MIT
