<div align="center">

# Contributing to aman-showcase

**Every contribution helps someone learn, grow, or work better.**

</div>

---

## Ways to Contribute

### For Everyone (No Coding Required)

| What | How | Impact |
|------|-----|--------|
| **Fix content errors** | Found a wrong Malay translation? Inaccurate Arabic? Bad exercise form? Open a PR. | Very High |
| **Add lessons** | Write new lessons for any showcase following the existing format. | High |
| **Improve cultural notes** | Add context that makes learning more meaningful. | Medium |
| **Report issues** | Something doesn't work? Content feels wrong? [Open an issue](https://github.com/amanasmuei/aman-showcase/issues). | High |

### For Builders

| What | How | Impact |
|------|-----|--------|
| **Create a new showcase** | Fork, create a folder, add your markdown files. [See below](#creating-a-new-showcase). | Very High |
| **Translate a showcase** | Fork Bahasa for Japanese, Spanish, Arabic — swap the content. | Very High |
| **Add programs** | New fitness programs, lesson tracks, business templates. | High |
| **Improve templates** | Better proposal templates, invoice formats, standup formats. | Medium |

### For Developers

| What | How | Impact |
|------|-----|--------|
| **Test showcases end-to-end** | Set up a Telegram bot, run a showcase, report what works/breaks. | Very High |
| **Improve setup scripts** | Better error handling, cross-platform support, Docker setup. | High |
| **Ecosystem improvements** | Found a limitation? Contribute to the [aman ecosystem](https://github.com/amanasmuei) packages. | Very High |

---

## Creating a New Showcase

Every showcase follows the same pattern — **a folder of markdown files**:

```
your-showcase/
├── README.md                    → What it does, how to use it
├── identity/core.md             → AI personality (acore)
├── workflows/flow.md            → Step-by-step workflows (aflow)
├── rules/rules.md               → Safety guardrails (arules)
├── skills/your-skill.md         → Domain expertise (askill)
├── content/                     → Domain-specific material
│   ├── lessons/                 → Structured content (if applicable)
│   ├── templates/               → Reusable templates (if applicable)
│   └── guides/                  → How-to guides (if applicable)
└── config/
    ├── setup.sh                 → One-command setup (with backup!)
    ├── teardown.sh              → Restore previous config
    └── telegram.env.example     → Environment template
```

### Step by Step

**1. Pick your domain**

What real-world problem does your showcase solve? The best showcases:
- Solve a problem people have daily
- Benefit from persistent memory (the aman differentiator)
- Can be demonstrated in a 5-minute Telegram conversation

**2. Fork and create your folder**

```bash
git clone https://github.com/amanasmuei/aman-showcase.git
cd aman-showcase
mkdir your-showcase
```

**3. Write your markdown files**

Start with `identity/core.md` — who is your AI companion? Then:
- `workflows/flow.md` — what does it do step-by-step?
- `rules/rules.md` — what must it always/never do?
- `skills/your-skill.md` — what domain knowledge does it have?
- `content/` — any supporting material

Use existing showcases as reference:
- **Bahasa** — best reference for learning-based showcases
- **Fitness** — best reference for habit/tracking showcases
- **Freelancer** — best reference for business/productivity showcases
- **Team** — best reference for group/collaboration showcases

**4. Copy and adapt config scripts**

```bash
cp -r bahasa/config/ your-showcase/config/
# Edit setup.sh to reference your skill filename
```

**5. Write a README**

Follow the style of existing showcases:
- Centered header with badges
- The Problem / The Solution
- Quick Start (5 minutes)
- Feature overview
- How It Works (file tree + ecosystem table)
- Contributing section

**6. Test it**

```bash
cd your-showcase
bash config/setup.sh
npx @aman_asmuei/achannel serve
# Message your Telegram bot and verify it works
```

**7. Submit a PR**

```bash
git checkout -b add-your-showcase
git add your-showcase/
git commit -m "feat(your-showcase): add [description]"
git push origin add-your-showcase
# Open a PR on GitHub
```

---

## Showcase Ideas

Looking for inspiration? Here are domains that would make great showcases:

| Domain | Idea | Why It's Valuable |
|--------|------|-------------------|
| Mental Wellness | Mood journal + coping strategies | Memory tracks emotional patterns over time |
| Cooking | Recipe companion that learns your taste | Remembers dietary preferences, suggests meals |
| Parenting | Child development tracker | Milestones, activities, pediatrician notes |
| Student | Study companion with spaced repetition | Tracks what you know, what to review |
| Elderly Care | Daily check-in + medication reminders | Simple, caring, remembers health context |
| Job Search | Application tracker + interview prep | Remembers companies, contacts, follow-ups |
| Garden | Plant care companion | Watering schedules, growth tracking, seasonal tips |
| Travel | Trip planner that knows your preferences | Budget, interests, past trips, itineraries |

---

## Guidelines

### Content Quality
- **Accuracy matters.** Especially for Quran (Arabic), Bahasa (Malay), and Fitness (exercise form). When in doubt, cite sources.
- **Cultural sensitivity.** Religious content, health advice, and business guidance should be respectful and inclusive.
- **Keep it practical.** Every piece of content should help someone do something useful.

### Writing Style
- Clear, concise, actionable
- Use bullet points and tables for scannability
- Include examples — show, don't just tell
- Match the tone of the showcase (warm for Bahasa, respectful for Quran, motivating for Fitness, professional for Freelancer, neutral for Team)

### Commit Messages
```
feat(showcase): add [what you added]
fix(showcase): fix [what you fixed]
docs(showcase): improve [what you improved]
```

### PR Checklist
- [ ] Files follow the showcase folder structure
- [ ] Content is accurate and well-written
- [ ] setup.sh works and includes backup
- [ ] README follows the existing style
- [ ] No secrets or API keys in committed files

---

## Code of Conduct

Be kind. Be helpful. Be respectful. We're building tools that help people learn, grow, and work better. Let's treat each other the same way.

---

## Questions?

- [Open an issue](https://github.com/amanasmuei/aman-showcase/issues) for bugs or feature requests
- [Start a discussion](https://github.com/amanasmuei/aman-showcase/discussions) for ideas and questions

---

<div align="center">

**Thank you for contributing.**

*Every showcase you build helps someone in the world.*

</div>
