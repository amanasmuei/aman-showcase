#!/usr/bin/env node
import { getManifest, installShowcase, SHOWCASES } from "../dist/index.js";

const [,, cmd, ...args] = process.argv;

if (cmd === "list") {
  const showcases = getManifest();
  for (const s of showcases) {
    console.log(`  ${s.name.padEnd(12)} ${s.title}`);
  }
  process.exit(0);
}

if (cmd === "list-json") {
  console.log(JSON.stringify(SHOWCASES));
  process.exit(0);
}

if (cmd === "install") {
  const name = args[0];
  const dryRun = args.includes("--dry-run");
  if (!name) {
    console.error("Usage: aman-showcase install <name> [--dry-run]");
    process.exit(1);
  }
  try {
    const result = await installShowcase(name, { dryRun });
    for (const f of result.installed) console.log(`  ✓ ${f}`);
    if (result.env_example) console.log(`  ✓ .env.example → ${result.env_example}`);
    process.exit(0);
  } catch (err) {
    console.error(String(err));
    process.exit(1);
  }
}

console.error(`Unknown command: ${cmd || "(none)"}`);
console.error("Commands: list, list-json, install <name> [--dry-run]");
process.exit(1);
