# Aman Support

**Customer support that remembers every interaction.**

---


## Quick Deploy

Run locally in one command:
```bash
npx @aman_asmuei/aman showcase support
```

Or deploy to the cloud (no local setup needed):

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/amanasmuei/aman-showcase/tree/main/support)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/amanasmuei/aman-showcase)
## The Problem

Small businesses answer the same questions a hundred times a week. They forget which customers had which problems. They miss follow-ups. And when a customer comes back angry, there is no history — just a blank slate and a frustrated person on the other end.

The result: customers feel like numbers. Issues fall through the cracks. The owner gets pulled into every little thing.

---

## The Solution

Aman Support is an AI customer support agent that knows your FAQs, remembers your customers, and knows exactly when to bring you in.

It handles the routine — so you can focus on the things that actually need a human.

---

## See It In Action

### Example 1: FAQ with Memory

> **Customer**: Hi, how long does shipping take?
>
> **Aman Support**: Hi Sarah! Standard delivery takes 3–5 business days within Peninsular Malaysia. East Malaysia takes 5–7 days. You'll get a tracking link once your order ships. Does that help?
>
> **Customer**: Yes thanks. And for my order from last week — any update?
>
> **Aman Support**: Checking now... Your order #4821 was dispatched on Monday. Based on the timeline, it should arrive by Thursday. I'll flag it if there's any delay. Anything else?

The bot answered the FAQ. Then — without being asked — it remembered this customer's open order and gave a proactive update.

---

### Example 2: Smart Escalation

> **Customer**: This is the third time I'm asking about my refund. I'm seriously fed up. If this isn't sorted today I'm filing a complaint.
>
> **Aman Support**: I'm really sorry, Ahmad — you've been more than patient and this has taken far too long. I'm escalating this to the owner right now with full priority. You won't need to explain it again.
>
> Your ticket is TKT-20240315-0042. The owner will contact you within the hour.

Meanwhile, the owner receives:

> **[ESCALATION — PRIORITY]**
> Customer: Ahmad Razif
> Issue: Refund not processed after 3 follow-ups
> Ticket: TKT-20240315-0042
> Status: Customer is frustrated and threatening formal complaint
> History: Refund requested on Mar 8, followed up Mar 11, Mar 15
> Recommended action: Process refund immediately, personal apology from owner

The bot de-escalated. The owner got everything they needed. The customer felt heard.

---

## What It Does

| | |
|---|---|
| **FAQ Handling** | Answers common questions instantly from your knowledge base. Learns which answers work. | **Customer Memory** | Remembers every customer: their history, their orders, their past issues. |
| **Smart Escalation** | Knows when to step back. Passes full context to you — so customers never have to repeat themselves. | **Support Reports** | Daily and weekly summaries: tickets opened, resolved, escalated, satisfaction scores, common issues. |

---

## Commands

| Command | What Happens |
|---|---|
| Report an issue | Bot logs a ticket, categorizes it, attempts resolution from FAQ |
| Check FAQ | Bot searches knowledge base and delivers a conversational answer |
| Escalate | Bot flags to owner immediately with full context and conversation history |
| Satisfaction survey | Post-resolution rating (1–5) stored for quality tracking |
| Support stats | Current ticket counts, open issues, average CSAT |
| Add FAQ | Owner teaches the bot a new question and answer |

---

## Setup in 3 Steps

**Step 1** — Add your FAQs: Tell the bot your most common questions and answers.

**Step 2** — Set escalation rules: Decide what comes to you directly (refunds, complaints, custom requests).

**Step 3** — Add to Telegram: Drop the bot into your customer group, or share the 1:1 link.

Full setup guide: `content/guides/getting-started.md`

---

## File Structure

```
support/
├── identity/
│   └── core.md              # Agent personality and operating procedure
├── rules/
│   └── rules.md             # Guardrails, escalation triggers, memory rules
├── workflows/
│   └── flow.md              # 7 support workflows (ticket, FAQ, escalate, etc.)
├── skills/
│   └── support-skill.md     # De-escalation, FCR, Malaysian context, metrics
├── content/
│   ├── templates/
│   │   ├── responses.md     # Ready-to-use response templates
│   │   └── faq-template.md  # FAQ structure and examples
│   └── guides/
│       └── getting-started.md  # Owner setup guide
└── config/
    ├── setup.sh             # Install to your Claude project
    ├── teardown.sh          # Remove from your Claude project
    └── telegram.env.example # Environment variable template
```

---

## Quick Start

```bash
# 1. Copy environment template
cp config/telegram.env.example config/.env

# 2. Fill in your values
nano config/.env

# 3. Run setup
bash config/setup.sh

# 4. Test it
# Ask: "What are your business hours?"
```

---

*Support that remembers. Customers that return.*
