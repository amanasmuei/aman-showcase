import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { SHOWCASES, type ShowcaseEntry } from "./manifest.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// When running from dist/, go up one level to reach the package root
const PACKAGE_ROOT = path.resolve(__dirname, "..");

export type { ShowcaseEntry };
export { SHOWCASES };

export function getManifest(): ShowcaseEntry[] {
  return SHOWCASES;
}

export function getShowcaseDir(name: string): string {
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

export interface InstallOptions {
  dryRun?: boolean;
  targetDir?: string;
}

export interface InstallResult {
  installed: string[];
  backed_up: string[];
  env_example: string;
}

export async function installShowcase(
  name: string,
  options: InstallOptions = {}
): Promise<InstallResult> {
  const showcaseDir = getShowcaseDir(name);
  const { dryRun = false, targetDir = process.cwd() } = options;

  const result: InstallResult = { installed: [], backed_up: [], env_example: "" };

  const copies: Array<{ src: string; dest: string; label: string }> = [
    {
      src: path.join(showcaseDir, "identity", "core.md"),
      dest: path.join(os.homedir(), ".acore", "core.md"),
      label: "~/.acore/core.md",
    },
    {
      src: path.join(showcaseDir, "workflows", "flow.md"),
      dest: path.join(os.homedir(), ".aflow", "flow.md"),
      label: "~/.aflow/flow.md",
    },
    {
      src: path.join(showcaseDir, "rules", "rules.md"),
      dest: path.join(os.homedir(), ".arules", "rules.md"),
      label: "~/.arules/rules.md",
    },
  ];

  const skillsDir = path.join(showcaseDir, "skills");
  if (fs.existsSync(skillsDir)) {
    const skillFiles = fs.readdirSync(skillsDir).filter((f) => f.endsWith(".md"));
    for (const skillFile of skillFiles) {
      copies.push({
        src: path.join(skillsDir, skillFile),
        dest: path.join(os.homedir(), ".askill", "installed", skillFile),
        label: `~/.askill/installed/${skillFile}`,
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
