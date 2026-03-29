<div align="center">

# aman-showcase

### Real-world AI companions built with zero code

[![Showcases](https://img.shields.io/badge/showcases-13-blueviolet)](https://github.com/amanasmuei/aman-showcase)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei/aman)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/amanasmuei/aman-showcase/pulls)

**Build intelligent AI companions using just markdown files.**<br>
No TypeScript. No JavaScript. No application code.

[Browse Showcases](#showcases) · [Quick Start](#-quick-start) · [Build Your Own](#-build-your-own) · [Contributing](CONTRIBUTING.md)

---

**13 domains. 160+ files. 0 lines of code.**

</div>

## Showcases

| | Showcase | Domain | What it does | Highlights |
|---|---------|--------|-------------|------------|
| 🇲🇾 | **[Bahasa](./bahasa/)** | Language Learning | AI tutor for Malay/English that never forgets your progress | `10 lessons` `80 words` |
| 📖 | **[Quran](./quran/)** | Spiritual Growth | Understand what you recite — Quranic Arabic vocabulary | `12 lessons` `60 words` `20 roots` |
| 💪 | **[Fitness](./fitness/)** | Health & Wellness | Personal trainer that tracks every workout | `4-week program` `30+ exercises` |
| 💼 | **[Freelancer](./freelancer/)** | Business | Never let an invoice slip through the cracks | `7 workflows` `6 templates` |
| 👥 | **[Team](./team/)** | Collaboration | Your team's memory — standups, decisions, onboarding | `7 workflows` `group bot` |
| 💰 | **[Money](./money/)** | Personal Finance | Know where every ringgit goes — track, budget, save | `7 workflows` `budget tools` |
| 🏪 | **[Kedai](./kedai/)** | Small Business | Digital partner for any kedai — makan, gunting, dobi, and more | `7 workflows` `8 business types` |
| 📰 | **[Feed](./feed/)** | Personalized News | Your AI that knows what you care about — signal, not noise | `6 workflows` `learns interests` |
| 🎧 | **[Support](./support/)** | Customer Support | Support that remembers every interaction | `7 workflows` `smart escalation` |
| 👁️ | **[Monitor](./monitor/)** | Automation | AI watchdog that never sleeps — alerts, digests, trends | `7 workflows` `always-on` |
| 💊 | **[Rutin](./rutin/)** | Health & Family | Never miss your ubat — medication reminders for you and parents | `6 workflows` `family mode` |
| 📡 | **[IoT](./iot/)** | Smart Environment | AI-powered sensor monitoring — smart home, farm, aquaculture | `7 workflows` `ESP32 + RPi` |
| 🕌 | **[Muslim](./muslim/)** | Islamic Daily | Prayer times, Hadith 40, dhikr, du'a, qiblat — your ibadah companion | `7 workflows` `40 hadith` |

> **Want a showcase for your domain?** [See ideas](CONTRIBUTING.md#showcase-ideas) or [build one yourself](CONTRIBUTING.md#creating-a-new-showcase)!

## What Makes This Different

Every AI chatbot forgets you. You explain your context, get help, close the chat — and tomorrow it starts from zero.

**aman-showcase companions remember.** They know your vocabulary, your workout history, your clients, your team's decisions. They pick up exactly where you left off. Every single time.

This is possible because each showcase plugs into the [aman ecosystem](https://github.com/amanasmuei/aman) — a modular framework that gives AI companions persistent memory, identity, workflows, guardrails, and skills.

**And the best part?** You don't write a single line of code. Each showcase is just a folder of markdown files.

## How It Works

```
showcase/
├── identity/core.md          → Who the AI is (personality, style, values)
├── workflows/flow.md         → What it does step-by-step
├── rules/rules.md            → What it must/must not do
├── skills/*.md               → Domain expertise it draws from
├── content/                  → Domain-specific material
└── config/setup.sh           → One-command setup
```

The aman ecosystem provides everything else:

```
┌─────────────────────────────────────────────────┐
│              Your Showcase                       │
│       (just markdown files + content)            │
└──────────────────────┬──────────────────────────┘
                       │ plugs into
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌─────────┐
   │  acore  │   │   amem   │   │  aflow  │
   │identity │   │ memory   │   │workflows│
   └─────────┘   └──────────┘   └─────────┘
        │              │              │
   ┌─────────┐   ┌──────────┐   ┌─────────┐
   │  arules │   │  askill  │   │  aeval  │
   │  rules  │   │  skills  │   │  eval   │
   └─────────┘   └──────────┘   └─────────┘
                       │
                ┌──────┴──────┐
                ▼             ▼
          ┌──────────┐  ┌─────────┐
          │ Telegram │  │   Web   │
          │  (bot)   │  │  (UI)   │
          └──────────┘  └─────────┘
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [Telegram](https://telegram.org/) account
- An LLM API key — [Anthropic](https://console.anthropic.com/) (recommended), [OpenAI](https://platform.openai.com/), or free with [Ollama](https://ollama.com/)

### 3 Steps

```bash
# 1. Clone and pick a showcase
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase/bahasa    # or: quran, fitness, freelancer, team

# 2. Configure
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# 3. Launch
npx @aman_asmuei/achannel add telegram
bash config/setup.sh
npx @aman_asmuei/achannel serve
```

**That's it.** Message your bot on Telegram and start using it.

<details>
<summary><strong>How to get a Telegram bot token</strong></summary>

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot` and follow the prompts
3. Copy the token into your `.env` file
4. For **Team** showcase: also send `/setprivacy` → select your bot → choose "Disable" (allows the bot to see group messages)

</details>

## Build Your Own

**Anyone can create a new showcase — no coding required.**

```bash
# 1. Fork and create your folder
mkdir my-showcase

# 2. Write 4 markdown files
#    identity/core.md     → personality
#    workflows/flow.md    → what it does
#    rules/rules.md       → guardrails
#    skills/your-skill.md → domain knowledge

# 3. Add content and config
#    content/             → supporting material
#    config/setup.sh      → copy from any existing showcase

# 4. Test and PR
bash config/setup.sh && npx @aman_asmuei/achannel serve
```

See the full guide: **[CONTRIBUTING.md](CONTRIBUTING.md#creating-a-new-showcase)**

### Showcase Ideas

| Domain | Idea |
|--------|------|
| Mental Wellness | Mood journal + coping strategies |
| Cooking | Recipe companion that learns your taste |
| Parenting | Child development tracker |
| Student | Study companion with spaced repetition |
| Job Search | Application tracker + interview prep |
| Garden | Plant care companion |

## The Ecosystem

<table>
<tr>
<td>

| Package | What it does |
|---------|-------------|
| [**acore**](https://github.com/amanasmuei/acore) | AI identity — 25+ role archetypes |
| [**amem**](https://github.com/amanasmuei/amem) | Persistent memory — SQLite + embeddings |
| [**aflow**](https://github.com/amanasmuei/aflow) | Multi-step workflows |
| [**arules**](https://github.com/amanasmuei/arules) | Safety guardrails |

</td>
<td>

| Package | What it does |
|---------|-------------|
| [**askill**](https://github.com/amanasmuei/askill) | Domain expertise — 12 built-in |
| [**aeval**](https://github.com/amanasmuei/aeval) | Relationship metrics |
| [**achannel**](https://github.com/amanasmuei/achannel) | Telegram, Discord, Web |
| [**aman-mcp**](https://github.com/amanasmuei/aman-mcp) | MCP server — IDE integration |

</td>
</tr>
</table>

## Contributing

We welcome contributions from everyone — **no coding required** for most contributions.

| Contribution | Difficulty | Impact |
|-------------|-----------|--------|
| Fix content errors (translations, accuracy) | Easy | Very High |
| Add lessons or templates | Easy-Medium | High |
| Create a new showcase | Medium | Very High |
| Fork Bahasa for a new language | Medium | Very High |
| Test showcases end-to-end | Easy | High |

See the full guide: **[CONTRIBUTING.md](CONTRIBUTING.md)**

## License

MIT — use it, fork it, build with it.

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei/aman)**

*Give your AI a soul. Not just a prompt.*

[GitHub](https://github.com/amanasmuei/aman-showcase) · [Report Issue](https://github.com/amanasmuei/aman-showcase/issues) · [Contribute](CONTRIBUTING.md)

</div>
