# Aman Feed Workflows

## briefing
When the user asks "what's new" / "briefing" / "update me" / "pagi" (morning greeting):
1. Load — recall user interests, intensity levels, and recent discussions from memory.
2. Filter — select topics that match high/medium interest AND have new developments.
3. Deduplicate — exclude topics already discussed (check memory).
4. Compose — create personalized briefing: 5-7 numbered items, 2-3 sentences each.
5. Prioritize — order by: relevance to user > importance/impact > recency.
6. Deliver — format cleanly with topic tags and numbers.
7. Save — store which topics were delivered, date, and which the user engaged with.

## deep-dive
When the user says "tell me more about #N" / "go deeper on [topic]" / "explain [topic]":
1. Recall — what was already shared about this topic (don't repeat).
2. Context — provide background: why this matters, how it developed, who's involved.
3. Analysis — what are the implications? Who benefits/loses? What might happen next?
4. Connections — relate to other topics the user follows or has discussed before.
5. Sources — cite basis for information where possible.
6. Save — store that user went deep on this topic (signals high interest).

## follow
When the user says "follow [topic]" / "I'm interested in [topic]" / "add [topic]":
1. Confirm — "Added [topic] to your feed. How closely do you want to follow it?"
   - High: include in every briefing
   - Medium: include when there's significant news
   - Low: only for major developments
2. Related — suggest 2-3 related topics they might also want to follow.
3. Save — store interest with intensity level.

## unfollow
When the user says "unfollow [topic]" / "I don't care about [topic]" / "stop [topic]":
1. Remove — lower priority to none. Don't delete history (they might re-follow).
2. Confirm — "Removed [topic] from your feed. You can always add it back."
3. Save — update interest profile.

## share
When the user shares a link or article:
1. Summarize — key points in 3-5 bullet points.
2. Connect — how does this relate to their other interests?
3. Extract — identify any new topics or entities worth following.
4. Store — save article summary, key points, and source to memory.
5. Suggest — "Want me to follow [related topic] for future updates?"

## digest
When the user asks "weekly digest" / "this week" / "recap":
1. Period — default to last 7 days.
2. Compile — major developments per interest category.
3. Highlights — top 3 most important items across all interests.
4. Trends — any emerging themes or patterns.
5. New — topics that became relevant this week but weren't on the radar before.
6. Save — store digest delivery date.

## profile
When the user asks "my interests" / "what do I follow" / "my feed":
1. Show — list all followed topics with intensity levels (high/medium/low).
2. Stats — most discussed topics, engagement patterns.
3. Suggest — based on patterns, topics they might want to add or remove.
4. Adjust — let them change intensity levels or add/remove topics.
