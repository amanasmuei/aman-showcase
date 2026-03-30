export interface ShowcaseEntry {
  name: string;
  title: string;
  description: string;
  category: "health" | "business" | "learning" | "lifestyle" | "monitoring";
  language: "en" | "ms" | "en+ms";
  channels: string[];
  tags: string[];
}

export const SHOWCASES: ShowcaseEntry[] = [
  {
    name: "rutin",
    title: "Rutin — Medication Reminder",
    description: "Daily medication reminders for elderly parents and family, with streak tracking and family check-in mode.",
    category: "health",
    language: "ms",
    channels: ["telegram"],
    tags: ["health", "family", "reminders", "malay"],
  },
  {
    name: "kedai",
    title: "Kedai — Small Business Assistant",
    description: "Transaction tracking for restaurants, salons, laundries, and 5 other business types. Daily reports included.",
    category: "business",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["business", "transactions", "reports", "malay"],
  },
  {
    name: "monitor",
    title: "Monitor — AI Watchdog",
    description: "Price watching, website monitoring, and keyword tracking with real-time alerts and daily digests.",
    category: "monitoring",
    language: "en",
    channels: ["telegram", "discord"],
    tags: ["monitoring", "alerts", "prices", "automation"],
  },
  {
    name: "bahasa",
    title: "Bahasa — Language Tutor",
    description: "Malay/English language learning with structured 10-lesson curriculum and conversation practice.",
    category: "learning",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["language", "learning", "malay", "english"],
  },
  {
    name: "quran",
    title: "Quran — Arabic Vocabulary",
    description: "Quranic Arabic vocabulary lessons with Arabic script, transliteration, and ayah context. 12 detailed lessons.",
    category: "learning",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["quran", "arabic", "vocabulary", "islamic"],
  },
  {
    name: "fitness",
    title: "Fitness — Personal Trainer",
    description: "Workout tracking with progressive overload guidance, nutrition tips, and exercise form cues.",
    category: "health",
    language: "en",
    channels: ["telegram"],
    tags: ["fitness", "workout", "nutrition", "health"],
  },
  {
    name: "freelancer",
    title: "Freelancer — Business Tracker",
    description: "Invoice and client tracking, project management, and business workflows for independent workers.",
    category: "business",
    language: "en",
    channels: ["telegram"],
    tags: ["freelance", "invoices", "clients", "business"],
  },
  {
    name: "team",
    title: "Team — Collaboration Assistant",
    description: "Team standups, task tracking, and institutional memory for small groups.",
    category: "business",
    language: "en",
    channels: ["telegram", "discord"],
    tags: ["team", "collaboration", "standups", "memory"],
  },
  {
    name: "money",
    title: "Money — Finance Tracker",
    description: "Personal finance tracking, budget monitoring, and spending insights.",
    category: "lifestyle",
    language: "en",
    channels: ["telegram"],
    tags: ["finance", "budget", "money", "tracking"],
  },
  {
    name: "feed",
    title: "Feed — News Companion",
    description: "Personalized news aggregation with signal/noise filtering and daily digests.",
    category: "lifestyle",
    language: "en",
    channels: ["telegram"],
    tags: ["news", "rss", "feed", "digest"],
  },
  {
    name: "support",
    title: "Support — Customer Assistant",
    description: "Customer support with context memory, escalation logic, and conversation history.",
    category: "business",
    language: "en",
    channels: ["telegram", "webhook"],
    tags: ["support", "customer", "business", "chat"],
  },
  {
    name: "iot",
    title: "IoT — Smart Monitor",
    description: "Sensor monitoring for smart homes and farms (ESP32/RPi) with anomaly detection and threshold alerts.",
    category: "monitoring",
    language: "en",
    channels: ["telegram"],
    tags: ["iot", "sensors", "smart-home", "automation"],
  },
  {
    name: "muslim",
    title: "Muslim — Daily Companion",
    description: "Islamic daily companion with prayer times, hadith, du'a, and Malay language support.",
    category: "lifestyle",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["islamic", "prayer", "hadith", "malay"],
  },
];
