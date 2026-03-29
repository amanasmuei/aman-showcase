# Aman Quran Workflows

## lesson
When the learner asks for a lesson or says "lesson" / "next lesson":
1. Review — recall 3 words from the last lesson using memory_recall. Ask the learner their meaning.
2. Introduce — present 5 new Quranic words with Arabic script, transliteration, meaning, frequency, and an ayah example for each.
3. Roots — highlight any root patterns among the new words (e.g., "notice how 'alim and 'ilm share the root ع-ل-م")
4. Practice — give 3-4 exercises: translate from Arabic, identify words in a verse, match root to meaning.
5. Reflection — show a short Quranic verse using today's words. Ask: "How many words can you now recognize?"
6. Save — call memory_extract to store: new words learned, roots identified, mistakes made, lesson completed.

## root
When the learner says "root" or "explore root" or asks about a specific root:
1. Present — show the 3-letter root in Arabic script with its core meaning.
2. Derive — list 4-6 Quranic words derived from this root, each with Arabic script, transliteration, meaning, and an ayah.
3. Pattern — explain how the root transforms: verb forms, nouns, adjectives, divine names.
4. Connect — link to previously learned roots or words where relevant.
5. Practice — give 2-3 exercises identifying root derivatives in verses.
6. Save — store root and derivatives to memory.

## surah-study
When the learner says "surah [name]" or asks to study a specific surah:
1. Overview — give the surah name (Arabic + English), number of ayahs, and brief context (where/when revealed).
2. Vocabulary — go verse by verse, highlighting 3-5 key vocabulary words per verse with full format (Arabic → transliteration → meaning).
3. Roots — identify recurring roots across the surah.
4. Review — after covering all verses, quiz the learner on the surah's key vocabulary.
5. Save — store surah progress and new words to memory.

## review
When the learner asks to review or when you detect weak vocabulary:
1. Recall — use memory_since("7d") to find recently learned vocabulary.
2. Identify — pick 5-7 words learned 3+ days ago or with pattern memories (mistakes).
3. Quiz — show the Arabic script, ask for meaning. Alternate with showing meaning, ask for Arabic.
4. Correct — for mistakes, show the word in its Quranic ayah context again with a memory aid.
5. Update — store review results, update pattern memories.

## quiz
When the learner says "quiz me" or after every ~3 lessons:
1. Select — pick 5 questions covering recent lessons and roots, weighted toward weak areas.
2. Mix — types: translate Arabic to English, identify a word in a verse, name the root, complete the ayah.
3. Present — give questions one at a time, wait for each answer.
4. Score — after all 5, give score as X/5 with corrections including ayah references.
5. Record — store as decision memory: "Quiz: [topic] — score X/5 (Y%)"
6. Suggest — if consistently scoring 4+/5, suggest advancing. If 2-/5, suggest review.

## progress
When the learner asks "progress" or "how am I doing":
1. Stats — call memory_stats to get overview.
2. Recall — use memory_recall to find word count, roots mastered, surahs studied, lesson number.
3. Coverage — estimate Quran comprehension: "You know X of the top 300 words, covering approximately Y% of the Quran."
4. Summarize — show: words learned, roots mastered, surahs studied, weak areas, recent quiz scores.
5. Encourage — highlight growth and suggest what to focus on next.
