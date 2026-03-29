# Getting Started with Aman Support

This guide walks you through setting up your AI customer support agent. You will be up and running in under 15 minutes.

---

## Step 1: Add Your FAQs

The most important thing you can do before going live is teach the bot your most common questions and answers.

**How to do it:**

Tell the bot your FAQs directly in a conversation:

> "Add FAQ: Question: What are your business hours? Answer: We're open Monday to Friday, 9am to 6pm."

Or use a batch format to add multiple at once:

> "Add these FAQs:
> - Q: Do you deliver to Sabah and Sarawak? A: Yes, we ship nationwide. Delivery to East Malaysia takes 5–7 business days.
> - Q: How do I track my order? A: You'll receive a tracking link via WhatsApp once your order ships.
> - Q: Can I exchange an item? A: Yes, exchanges are accepted within 7 days of delivery with the original packaging."

**Tips for good FAQs:**
- Write answers the way you would say them to a customer, not the way a policy document would say them.
- Include the most commonly asked questions first. Check your old chat history or DMs for patterns.
- Think about what customers ask right before they give up and go elsewhere — answer those questions preemptively.
- You can always add, update, or remove FAQs later. Start with 10–15 and grow from there.

---

## Step 2: Set Your Escalation Rules

Decide what kinds of issues should come directly to you, and when.

**Default escalation triggers (already active):**
- Customer is clearly angry (3+ frustrated messages)
- Refund, compensation, or payment dispute
- Technical issue not in FAQ
- Legal or safety concern
- Customer explicitly asks for a human

**You can customize by telling the bot:**

> "Always escalate to me when a customer mentions [competitor name]."

> "If a customer asks about [specific product], escalate — I handle those personally."

> "Don't escalate simple shipping questions even if the customer seems impatient."

**Set your escalation contact:**

Tell the bot how to reach you:
> "My name is Aiman. When escalating, message me on [channel]."

---

## Step 3: Add the Bot to Your Customer Channel

**Option A — Telegram group (recommended for communities)**
Add the bot to your customer Telegram group. It will monitor the group for support-related messages and respond.

Set the bot to only respond when:
- A customer addresses it directly (`@AmanSupport`)
- A message contains keywords like "help", "problem", "question", "issue", "complain"

**Option B — 1:1 support channel**
Direct customers to message the bot's Telegram username for dedicated support. Works well for private, individual issues.

**Option C — Both**
Use the group for quick FAQ answers (visible to all) and 1:1 for sensitive issues (billing, complaints, order details).

---

## Tips for Good Customer Support

**Respond fast, or set expectations.**
Customers forgive slow resolutions if they get a fast acknowledgment. If the bot cannot resolve something immediately, it will tell the customer it is working on it and give an expected timeframe.

**Keep your FAQs current.**
When your prices, hours, products, or policies change — update the FAQ immediately. An outdated answer is worse than no answer.

**Review escalations weekly.**
Look at what is being escalated to you. If the same question keeps coming up, add it to the FAQ. Every escalation is a signal that the FAQ has a gap.

**Use the weekly report.**
The bot can give you a weekly summary: how many tickets, what kinds of issues, average satisfaction. Use this to identify patterns and improve.

**Let the bot introduce itself.**
Pin a message in your customer group: "Hi everyone — meet [bot name], our support assistant. Ask any questions here or message privately. A real human is always available for complex issues."

**Check in on the bot.**
Occasionally test it yourself by asking questions as a customer would. Make sure the answers are accurate and the tone feels right for your brand.

---

## Quick Command Reference

Once set up, you can manage the bot with these commands:

| Command | What it does |
|---|---|
| `add faq` | Add a new FAQ entry |
| `update faq` | Edit an existing FAQ |
| `list faqs` | See all stored FAQs |
| `support stats` | Get current ticket metrics |
| `weekly report` | Receive a summary of the past 7 days |
| `open tickets` | See all unresolved tickets |
| `escalation rules` | Review or update escalation triggers |

---

## You Are Ready

Once you have completed the three steps above, your support agent is active. Customers who message will receive warm, accurate, personalized responses — and you will only be pulled in when it truly matters.
