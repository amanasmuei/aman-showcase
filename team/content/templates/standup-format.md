# Standup Format

## Standard Format

### Trigger
Any team member says "standup" or "@bot standup"

### Per-Person Update
Each member provides:
1. **Yesterday:** What did you accomplish?
2. **Today:** What are you working on?
3. **Blockers:** Anything blocking your progress?

### Summary Format
After all members respond:

```
📋 Standup Summary — [Date]

Ali (Backend)
  ✅ Yesterday: Completed API endpoint for user auth
  📌 Today: Starting database migration
  ⚠️ Blocker: None

Sarah (Frontend)
  ✅ Yesterday: Reviewed Ali's PR, fixed nav bug
  📌 Today: Payment form UI
  ⚠️ Blocker: Waiting on Stripe test keys from client

Fatimah (Design)
  ✅ Yesterday: Finished dashboard mockups
  📌 Today: Mobile responsive designs
  ⚠️ Blocker: None

🚨 Active Blockers:
  - Sarah: Stripe test keys needed (Day 1)
    → Action: Someone follow up with client

📊 Team: 3/3 participated
```

## Async Standup
For distributed teams across timezones:
- Bot posts standup prompt at configured time
- Team members respond whenever they start their day
- Summary posted once all members have responded (or after cutoff time)

## Weekly Summary
Every Friday (or configured day), auto-generate:
- Participation rate
- Projects progressed
- Blockers resolved vs still open
- Decisions made this week
