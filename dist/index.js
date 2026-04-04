// src/index.ts
import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

// src/manifest.ts
var SHOWCASES = [
  {
    name: "rutin",
    title: "Rutin \u2014 Medication Reminder",
    description: "Daily medication reminders for elderly parents and family, with streak tracking and family check-in mode.",
    category: "health",
    language: "ms",
    channels: ["telegram"],
    tags: ["health", "family", "reminders", "malay"]
  },
  {
    name: "kedai",
    title: "Kedai \u2014 Small Business Assistant",
    description: "Transaction tracking for restaurants, salons, laundries, and 5 other business types. Daily reports included.",
    category: "business",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["business", "transactions", "reports", "malay"]
  },
  {
    name: "monitor",
    title: "Monitor \u2014 AI Watchdog",
    description: "Price watching, website monitoring, and keyword tracking with real-time alerts and daily digests.",
    category: "monitoring",
    language: "en",
    channels: ["telegram", "discord"],
    tags: ["monitoring", "alerts", "prices", "automation"]
  },
  {
    name: "bahasa",
    title: "Bahasa \u2014 Language Tutor",
    description: "Malay/English language learning with structured 10-lesson curriculum and conversation practice.",
    category: "learning",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["language", "learning", "malay", "english"]
  },
  {
    name: "quran",
    title: "Quran \u2014 Arabic Vocabulary",
    description: "Quranic Arabic vocabulary lessons with Arabic script, transliteration, and ayah context. 12 detailed lessons.",
    category: "learning",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["quran", "arabic", "vocabulary", "islamic"]
  },
  {
    name: "fitness",
    title: "Fitness \u2014 Personal Trainer",
    description: "Workout tracking with progressive overload guidance, nutrition tips, and exercise form cues.",
    category: "health",
    language: "en",
    channels: ["telegram"],
    tags: ["fitness", "workout", "nutrition", "health"]
  },
  {
    name: "freelancer",
    title: "Freelancer \u2014 Business Tracker",
    description: "Invoice and client tracking, project management, and business workflows for independent workers.",
    category: "business",
    language: "en",
    channels: ["telegram"],
    tags: ["freelance", "invoices", "clients", "business"]
  },
  {
    name: "team",
    title: "Team \u2014 Collaboration Assistant",
    description: "Team standups, task tracking, and institutional memory for small groups.",
    category: "business",
    language: "en",
    channels: ["telegram", "discord"],
    tags: ["team", "collaboration", "standups", "memory"]
  },
  {
    name: "money",
    title: "Money \u2014 Finance Tracker",
    description: "Personal finance tracking, budget monitoring, and spending insights.",
    category: "lifestyle",
    language: "en",
    channels: ["telegram"],
    tags: ["finance", "budget", "money", "tracking"]
  },
  {
    name: "feed",
    title: "Feed \u2014 News Companion",
    description: "Personalized news aggregation with signal/noise filtering and daily digests.",
    category: "lifestyle",
    language: "en",
    channels: ["telegram"],
    tags: ["news", "rss", "feed", "digest"]
  },
  {
    name: "support",
    title: "Support \u2014 Customer Assistant",
    description: "Customer support with context memory, escalation logic, and conversation history.",
    category: "business",
    language: "en",
    channels: ["telegram", "webhook"],
    tags: ["support", "customer", "business", "chat"]
  },
  {
    name: "iot",
    title: "IoT \u2014 Smart Monitor",
    description: "Sensor monitoring for smart homes and farms (ESP32/RPi) with anomaly detection and threshold alerts.",
    category: "monitoring",
    language: "en",
    channels: ["telegram"],
    tags: ["iot", "sensors", "smart-home", "automation"]
  },
  {
    name: "muslim",
    title: "Muslim \u2014 Daily Companion",
    description: "Islamic daily companion with prayer times, hadith, du'a, and Malay language support.",
    category: "lifestyle",
    language: "en+ms",
    channels: ["telegram"],
    tags: ["islamic", "prayer", "hadith", "malay"]
  }
];

// src/index.ts
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var PACKAGE_ROOT = path.resolve(__dirname, "..");
function getManifest() {
  return SHOWCASES;
}
function getShowcaseDir(name) {
  const entry = SHOWCASES.find((s) => s.name === name);
  if (!entry) {
    throw new Error(
      `Unknown showcase: "${name}". Available: ${SHOWCASES.map((s) => s.name).join(", ")}`
    );
  }
  const dir = path.join(PACKAGE_ROOT, name);
  if (!fs.existsSync(dir)) {
    throw new Error(`Showcase directory not found: ${dir}`);
  }
  return dir;
}
async function installShowcase(name, options = {}) {
  const showcaseDir = getShowcaseDir(name);
  const { dryRun = false, targetDir = process.cwd() } = options;
  const result = { installed: [], backed_up: [], env_example: "" };
  const copies = [
    {
      src: path.join(showcaseDir, "identity", "core.md"),
      dest: path.join(os.homedir(), ".acore", "core.md"),
      label: "~/.acore/core.md"
    },
    {
      src: path.join(showcaseDir, "workflows", "flow.md"),
      dest: path.join(os.homedir(), ".aflow", "flow.md"),
      label: "~/.aflow/flow.md"
    },
    {
      src: path.join(showcaseDir, "rules", "rules.md"),
      dest: path.join(os.homedir(), ".arules", "rules.md"),
      label: "~/.arules/rules.md"
    }
  ];
  const skillsDir = path.join(showcaseDir, "skills");
  if (fs.existsSync(skillsDir)) {
    const skillFiles = fs.readdirSync(skillsDir).filter((f) => f.endsWith(".md"));
    for (const skillFile of skillFiles) {
      copies.push({
        src: path.join(skillsDir, skillFile),
        dest: path.join(os.homedir(), ".askill", "installed", skillFile),
        label: `~/.askill/installed/${skillFile}`
      });
    }
  }
  for (const { src, dest, label } of copies) {
    if (!fs.existsSync(src)) continue;
    if (!dryRun) {
      if (fs.existsSync(dest)) {
        const backup = `${dest}.bak`;
        fs.copyFileSync(dest, backup);
        result.backed_up.push(label);
      }
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
    result.installed.push(label);
  }
  const envExample = path.join(showcaseDir, "config", "telegram.env.example");
  if (fs.existsSync(envExample)) {
    const destEnv = path.join(targetDir, ".env.example");
    if (!dryRun) {
      fs.copyFileSync(envExample, destEnv);
    }
    result.env_example = destEnv;
  }
  return result;
}
export {
  SHOWCASES,
  getManifest,
  getShowcaseDir,
  installShowcase
};
