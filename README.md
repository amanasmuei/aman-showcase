<div align="center">

# aman-showcase

### Real-world AI companions built with zero code

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![aman ecosystem](https://img.shields.io/badge/powered%20by-aman%20ecosystem-blue)](https://github.com/amanasmuei)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/amanasmuei/aman-showcase/pulls)

**Build intelligent AI companions using just markdown files.**
No TypeScript. No JavaScript. No application code.

[Get Started](#-quick-start) · [Browse Showcases](#-showcases) · [Build Your Own](#-build-your-own) · [Contributing](#-contributing)

</div>

---

## What is this?

Each showcase is a **complete, working AI companion** for a specific real-world purpose. They're built entirely from markdown configuration files that plug into the [aman ecosystem](https://github.com/amanasmuei) — the ecosystem handles identity, memory, workflows, guardrails, skills, and delivery channels.

Pick one. Run setup. You're live on Telegram in 5 minutes.

## Showcases

| | Name | Description | Channels | Status |
|---|------|-------------|----------|--------|
| 🇲🇾 | **[Bahasa](./bahasa/)** | AI language tutor for Malay/English that never forgets your progress | Telegram, Web | ✅ Ready |
| 📖 | **[Quran](./quran/)** | Understand what you recite — Quranic Arabic vocabulary companion | Telegram, Web | ✅ Ready |
| 💪 | *Fitness* | Personal trainer that adapts to your routine | — | 🔜 Coming soon |
| 💼 | *Freelancer* | Business assistant for client management | — | 🔜 Coming soon |

> **Want to see a showcase for your use case?** [Open an issue](https://github.com/amanasmuei/aman-showcase/issues) or build one yourself!

## How It Works

Every showcase follows the same pattern — **a folder of markdown files**:

```
showcase/
├── identity/core.md          → Who the AI is (personality, style, values)
├── workflows/flow.md         → What it does step-by-step
├── rules/rules.md            → What it must/must not do
├── skills/*.md               → Domain expertise it draws from
├── content/                  → Domain-specific material
└── config/setup.sh           → One-command setup
```

The aman ecosystem provides the runtime:

```
┌─────────────────────────────────────────────────┐
│                 Your Showcase                     │
│         (just markdown files + content)           │
└──────────────────────┬──────────────────────────┘
                       │
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

### Setup

```bash
# Clone the repo
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase

# Pick a showcase
cd bahasa

# Configure your environment
cp config/telegram.env.example .env
# Edit .env → add your Telegram bot token + LLM API key

# Set up the ecosystem
npx @aman_asmuei/achannel add telegram
bash config/setup.sh

# Launch
npx @aman_asmuei/achannel serve
```

> **Need a Telegram bot token?** Message [@BotFather](https://t.me/botfather) on Telegram, send `/newbot`, and follow the prompts.

## Build Your Own

The power of aman-showcase is that **anyone can create a new use case** — no coding required.

### 1. Fork & create your folder

```bash
git fork https://github.com/amanasmuei/aman-showcase.git
mkdir my-companion
```

### 2. Define your AI companion

| File | What to write |
|------|---------------|
| `identity/core.md` | Personality, communication style, values, boundaries |
| `workflows/flow.md` | Step-by-step processes your AI follows |
| `rules/rules.md` | What it must always/never do |
| `skills/*.md` | Domain knowledge, patterns, common mistakes |
| `content/` | Any supporting material (lessons, templates, references) |

### 3. Add a setup script

Copy `bahasa/config/setup.sh` as a starting point — it handles backup, install, and instructions.

### 4. Test & share

```bash
bash config/setup.sh
npx @aman_asmuei/achannel serve
```

If it works, submit a PR! We'd love to feature your showcase.

## Ecosystem

aman-showcase is powered by the **aman ecosystem** — a modular framework for building AI companions:

| Package | Purpose | |
|---------|---------|---|
| [acore](https://github.com/amanasmuei/acore) | AI identity & personality | 25+ role archetypes |
| [amem](https://github.com/amanasmuei/amem) | Persistent semantic memory | SQLite + embeddings, 20 tools |
| [aflow](https://github.com/amanasmuei/aflow) | Multi-step workflows | Triggered by context |
| [arules](https://github.com/amanasmuei/arules) | Safety guardrails | Always/never rules |
| [askill](https://github.com/amanasmuei/askill) | Domain expertise | 12 built-in, extensible |
| [aeval](https://github.com/amanasmuei/aeval) | Relationship metrics | Trust tracking |
| [achannel](https://github.com/amanasmuei/achannel) | Delivery channels | Telegram, Discord, Web |
| [aman-mcp](https://github.com/amanasmuei/aman-mcp) | MCP server | 11 tools for IDE integration |

## Contributing

We welcome contributions of all kinds:

- **New showcases** — build a companion for a new domain
- **Lesson content** — add intermediate/advanced lessons to Bahasa
- **Translations** — fork Bahasa for Japanese, Arabic, Tamil, Spanish...
- **Bug fixes** — improve existing content accuracy
- **Documentation** — help others build their own showcases

```bash
# Fork, clone, create a branch
git checkout -b my-showcase

# Make your changes, then PR
git push origin my-showcase
```

## License

MIT — use it, fork it, build with it.

---

<div align="center">

**Built with the [aman ecosystem](https://github.com/amanasmuei)**

*Give your AI a soul. Not just a prompt.*

</div>
