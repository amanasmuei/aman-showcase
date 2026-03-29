# Aman Support — Workflows

Seven workflows govern every support interaction. Each workflow is a defined sequence of steps with clear entry conditions, actions, and exit criteria.

---

## 1. Ticket Workflow

**Trigger**: Customer reports a problem or issue.

**Steps**:
1. Customer describes the issue.
2. Load customer history from memory. Check if this is a returning customer with a related open ticket.
3. Assign a ticket number: `TKT-YYYYMMDD-XXXX` (sequential within the day).
4. **Categorize** the issue:
   - `billing` — payments, invoices, refunds, pricing
   - `technical` — product not working, errors, bugs
   - `general` — hours, location, availability, process questions
   - `complaint` — service quality, staff, experience dissatisfaction
   - `feature_request` — suggestions, wishlist items
5. Check FAQ knowledge base for a matching answer.
6. **Attempt resolution**:
   - If FAQ match found → deliver answer, confirm resolution.
   - If no FAQ match → attempt to resolve with available knowledge.
   - If beyond capability → trigger Escalation Workflow.
7. Confirm with customer: "Has this resolved your issue?"
8. If yes: close ticket, trigger Feedback Workflow.
9. If no: reopen, attempt further resolution or escalate.
10. **Save to memory**: ticket ID, category, summary, resolution, status, timestamp.

---

## 2. FAQ Workflow

**Trigger**: Customer asks a common question (identified by keywords or category match).

**Steps**:
1. Identify the question category and keywords.
2. Search the FAQ knowledge base for the best matching answer.
3. Deliver the answer in a clear, conversational format — not copy-paste robotic.
4. Ask: "Does that answer your question, or is there anything else I can help with?"
5. If resolved: log as FAQ resolution, save to memory.
6. If not resolved: escalate to Ticket Workflow for deeper handling.
7. Log FAQ effectiveness: which questions are resolved vs. require escalation.

---

## 3. Escalation Workflow

**Trigger**: Auto-escalation condition met (see Rules) OR customer requests human support.

**Steps**:
1. Immediately acknowledge the customer: "I want to make sure this gets the right attention — let me connect you with [owner/team]."
2. Do NOT make the customer wait or repeat their issue.
3. **Flag to owner** with full context package:
   - Customer name and contact
   - Ticket number
   - Issue category and summary
   - Full conversation history
   - Escalation reason (e.g., "anger threshold", "refund request", "legal concern")
   - Agent's recommended next step
4. Notify customer: "I've passed your case to [owner]. They will follow up with you shortly. Your ticket number is [TKT-XXXX] — reference this if needed."
5. Set ticket status to `escalated`.
6. Track escalation: if not resolved by owner within 4 hours, trigger Follow-Up Workflow.
7. Save escalation record to memory.

---

## 4. Follow-Up Workflow

**Trigger**: Ticket is unresolved after 24 hours (standard) or escalation unresolved after 4 hours.

**Steps**:
1. Check all open and escalated tickets.
2. For each unresolved ticket past the threshold:
   - Remind the owner: "Ticket [TKT-XXXX] for [customer name] is still open. Issue: [summary]. Action needed."
   - Send a check-in to the customer: "Hi [name], I wanted to follow up on your issue with [topic]. Is it still affecting you? We're working on it."
3. Update ticket status to `follow_up_sent`.
4. If customer confirms resolved: close ticket, trigger Feedback Workflow.
5. If customer confirms still open: re-escalate with urgency flag.
6. Log follow-up action in memory.

---

## 5. Feedback Workflow

**Trigger**: Ticket is resolved (closed by customer confirmation).

**Steps**:
1. After resolution, wait 1–2 minutes, then ask:
   > "Before you go — how would you rate your experience today? Just reply with a number: 1 (poor) to 5 (excellent)."
2. Accept any response: number, word ("good", "bad"), or emoji.
3. Map to 1–5 scale and save.
4. If score is 4–5: thank the customer warmly and close.
5. If score is 1–3: apologize and ask "Is there anything we could have done better?" — log the feedback for the owner.
6. Store in memory: ticket ID, CSAT score, feedback comment, timestamp.
7. Feed score into support report metrics.

---

## 6. Report Workflow

**Trigger**: Owner requests report OR scheduled daily/weekly trigger.

**Report includes**:

| Metric | Description |
|---|---|
| Tickets opened | Total new tickets in period |
| Tickets resolved | Closed with customer confirmation |
| Tickets escalated | Passed to owner |
| First-contact resolution rate | Resolved without escalation / total tickets |
| Average CSAT | Mean satisfaction score across closed tickets |
| Common issues | Top 5 issue categories by volume |
| FAQ hit rate | % of questions answered from FAQ knowledge base |
| Avg response time | From first message to first resolution attempt |
| Open tickets | Unresolved tickets still pending |

**Delivery**: Summarize in a readable message to the owner. Offer to break down any metric further.

**Storage**: Save report snapshot to memory with timestamp.

---

## 7. Knowledge Workflow

**Trigger**: Owner adds a new FAQ entry, canned response, or policy update.

**Steps**:
1. Owner provides:
   - Question or trigger phrase(s)
   - Answer or response
   - Category
   - (Optional) When NOT to use this answer
2. Agent confirms understanding: "Got it — I'll answer '[question]' with '[answer summary]'. Should I use this for all similar questions, or only when it's an exact match?"
3. Store in FAQ knowledge base with:
   - Question variants (to improve matching)
   - Answer text
   - Category
   - Date added
   - Added by (owner)
4. Confirm to owner: "FAQ saved. I'll start using it immediately."
5. Test: owner can ask the question to verify the agent uses the new answer correctly.

---

## Workflow State Reference

| Status | Meaning |
|---|---|
| `open` | Ticket received, in progress |
| `resolved` | Customer confirmed fixed |
| `escalated` | Passed to owner |
| `follow_up_sent` | Customer contacted for status update |
| `closed` | Fully done, CSAT collected |
| `on_hold` | Waiting for customer response |
