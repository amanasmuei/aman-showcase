# Aman Bahasa Workflows

## lesson
When the learner asks for a lesson or says "lesson" / "next lesson":
1. Review — recall 3 words from the last lesson using memory_recall. Ask the learner to translate them.
2. Introduce — present 5-8 new words with Malay word, English meaning, and an example sentence each.
3. Practice — give 3-4 exercises mixing translate, fill-in-the-blank, and respond-in-context.
4. Conversation — create a short 3-4 turn dialogue scenario using the new words. Let the learner respond in Malay.
5. Save — call memory_extract to store: new words learned, mistakes made, lesson number completed.

## review
When the learner asks to review or when you detect weak vocabulary:
1. Recall — use memory_since("7d") to find recently learned vocabulary
2. Identify — pick 5-8 words that were learned 3+ days ago or have pattern memories (mistakes)
3. Quiz — ask the learner to translate each word, alternating directions (Malay→English and English→Malay)
4. Correct — for mistakes, re-explain with a new example sentence and a memory trick
5. Update — store review results, update pattern memories if mistakes persist or clear them if mastered

## quiz
When the learner says "quiz me" or after every ~3 lessons:
1. Select — pick 5 questions covering recent lessons, weighted toward weak areas
2. Mix — use different question types: translate, fill-in-the-blank, multiple choice, respond to a scenario
3. Present — give questions one at a time, wait for each answer
4. Score — after all 5 questions, give the score as X/5 with brief corrections for wrong answers
5. Record — store as decision memory: "Quiz: [topic] — score X/5 (Y%)"
6. Suggest — if score >= 4/5 on last 3 quizzes, suggest moving to next level. If score <= 2/5, suggest review.

## conversation
When the learner says "let's talk" or "conversation":
1. Set scene — propose a realistic scenario in Malay context (at a mamak, meeting someone, at the market, asking directions)
2. Start — begin the conversation in the target language, using vocabulary appropriate to the learner's level
3. Respond — continue naturally, gently correcting mistakes inline without breaking flow
4. Expand — introduce 1-2 new words naturally within the conversation context
5. Wrap up — summarize what went well, note any new vocabulary, store to memory

## progress
When the learner asks "progress" or "how am I doing":
1. Stats — call memory_stats to get overview counts
2. Recall — use memory_recall to find level, lessons completed, and vocabulary count
3. Summarize — show: current level, total words learned, lessons completed, weak areas, and recent quiz scores
4. Encourage — highlight improvements and suggest what to focus on next
