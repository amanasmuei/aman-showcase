# Decision Log Format

## How to Log a Decision

Say naturally in the group:
- "We decided to use Supabase for auth"
- "Decision: launch date moved to April 15"
- "@bot log decision: we're going with Option B for the pricing model"

## Decision Record Format

```
📋 Decision #[N]
📅 Date: [Date]
👥 Present: [Names]

What: [The decision]
Why: [Rationale — why this option over others]
Alternatives: [What else was considered]
Affects: [Which project(s)]

Status: Active
```

## Example

```
📋 Decision #12
📅 Date: 2026-03-29
👥 Present: Ali, Sarah, Fatimah

What: Use Supabase instead of Firebase for authentication
Why: Cheaper at our scale, built on PostgreSQL (matches our DB),
     open source so no vendor lock-in
Alternatives: Firebase (too expensive), Auth0 (overkill), custom (too slow)
Affects: Project Alpha — backend auth module

Status: Active
```

## Searching Decisions

Ask the bot:
- "What did we decide about auth?"
- "Show me decisions from last month"
- "Why did we choose Supabase?"
- "What decisions affect Project Alpha?"

## Reversing a Decision

Say: "We're reversing decision #12 — switching from Supabase to Clerk"
The bot will:
1. Mark the old decision as reversed
2. Log the new decision with reference to the old one
3. Note the reason for the change
