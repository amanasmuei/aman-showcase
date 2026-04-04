interface ShowcaseEntry {
    name: string;
    title: string;
    description: string;
    category: "health" | "business" | "learning" | "lifestyle" | "monitoring";
    language: "en" | "ms" | "en+ms";
    channels: string[];
    tags: string[];
}
declare const SHOWCASES: ShowcaseEntry[];

declare function getManifest(): ShowcaseEntry[];
declare function getShowcaseDir(name: string): string;
interface InstallOptions {
    dryRun?: boolean;
    targetDir?: string;
}
interface InstallResult {
    installed: string[];
    backed_up: string[];
    env_example: string;
}
declare function installShowcase(name: string, options?: InstallOptions): Promise<InstallResult>;

export { type InstallOptions, type InstallResult, SHOWCASES, type ShowcaseEntry, getManifest, getShowcaseDir, installShowcase };
