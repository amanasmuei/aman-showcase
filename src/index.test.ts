import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { getManifest, getShowcaseDir, installShowcase, SHOWCASES } from "./index.js";

describe("getManifest", () => {
  it("returns all 13 showcases", () => {
    const manifest = getManifest();
    expect(manifest).toHaveLength(13);
  });

  it("each entry has required fields", () => {
    for (const s of getManifest()) {
      expect(s.name).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.category).toBeTruthy();
      expect(s.channels.length).toBeGreaterThan(0);
    }
  });

  it("all names are unique", () => {
    const names = getManifest().map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("getShowcaseDir", () => {
  it("returns a path for a known showcase", () => {
    const dir = getShowcaseDir("rutin");
    expect(dir).toContain("rutin");
  });

  it("throws for unknown showcase", () => {
    expect(() => getShowcaseDir("nonexistent")).toThrow(/Unknown showcase/);
  });

  it("returned path exists on disk", () => {
    const dir = getShowcaseDir("rutin");
    expect(fs.existsSync(dir)).toBe(true);
  });

  it("each showcase in manifest has a directory on disk", () => {
    for (const s of SHOWCASES) {
      const dir = getShowcaseDir(s.name);
      expect(fs.existsSync(dir)).toBe(true);
    }
  });
});

describe("installShowcase dry-run", () => {
  it("lists files to install without writing anything", async () => {
    const result = await installShowcase("rutin", { dryRun: true });
    expect(result.installed.length).toBeGreaterThan(0);
  });

  it("dry run includes core.md in installed list", async () => {
    const result = await installShowcase("rutin", { dryRun: true });
    expect(result.installed.some((f) => f.includes("core.md"))).toBe(true);
  });

  it("dry run includes flow.md in installed list", async () => {
    const result = await installShowcase("rutin", { dryRun: true });
    expect(result.installed.some((f) => f.includes("flow.md"))).toBe(true);
  });

  it("dry run includes rules.md in installed list", async () => {
    const result = await installShowcase("rutin", { dryRun: true });
    expect(result.installed.some((f) => f.includes("rules.md"))).toBe(true);
  });

  it("throws for unknown showcase name", async () => {
    await expect(installShowcase("bogus", { dryRun: true })).rejects.toThrow(/Unknown showcase/);
  });
});
