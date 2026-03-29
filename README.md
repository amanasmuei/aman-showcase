# aman-showcase

**Real-world use cases built with the [aman ecosystem](https://github.com/amanasmuei) — zero application code, just configuration and content.**

Each showcase is a complete, working AI companion for a specific purpose. Pick one, run setup, and you're live on Telegram in 5 minutes.

## Showcases

| Name | Description | Status |
|------|-------------|--------|
| [Bahasa](./bahasa/) | AI language tutor for Malay/English that never forgets your progress | Ready |

## How It Works

Every showcase is a set of markdown files that plug into the aman ecosystem:

```
showcase/
├── identity/core.md      → AI personality (acore)
├── workflows/flow.md     → Step-by-step workflows (aflow)
├── rules/rules.md        → Safety guardrails (arules)
├── skills/*.md           → Domain expertise (askill)
├── content/              → Domain-specific content
└── config/setup.sh       → One-command setup
```

No TypeScript. No JavaScript. No application code. The aman ecosystem handles identity, memory, workflows, guardrails, skills, and channels.

## Quick Start

```bash
# 1. Clone
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase

# 2. Pick a showcase and set it up
cd bahasa
bash config/setup.sh

# 3. Start
npx @aman_asmuei/achannel serve
```

## Build Your Own

Fork this repo and create a new folder:

```bash
mkdir my-usecase
# Add: identity/core.md, workflows/flow.md, rules/rules.md, skills/*.md
# Add: content/ (domain-specific material)
# Add: config/setup.sh
```

The ecosystem does the rest. See [bahasa/](./bahasa/) for a complete example.

## Powered By

- [acore](https://github.com/amanasmuei/acore) — AI identity and personality
- [amem](https://github.com/amanasmuei/amem) — Persistent semantic memory
- [aflow](https://github.com/amanasmuei/aflow) — Multi-step workflows
- [arules](https://github.com/amanasmuei/arules) — Safety guardrails
- [askill](https://github.com/amanasmuei/askill) — Domain expertise
- [achannel](https://github.com/amanasmuei/achannel) — Telegram, Discord, Web

## License

MIT
