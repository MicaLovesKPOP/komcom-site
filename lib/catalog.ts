export type Tier = "1080" | "1440" | "4k";
export type BuildVariant = "base" | "balanced" | "high-refresh";

export type Build = {
  id: string;
  tier: Tier;
  variant: BuildVariant;
  name: string;
  short: string;
  startingPriceEur: number;
  highlights: string[];
  keySpecs: { cpu: string; gpu: string; ram: string; storage: string; };
};

export const tiers: { tier: Tier; title: string; subtitle: string }[] = [
  { tier: "1080", title: "KomCom 1080", subtitle: "Smooth 1080p gaming — sensible, high-value configs." },
  { tier: "1440", title: "KomCom 1440", subtitle: "Balanced 1440p performance — the sweet spot for most gamers." },
  { tier: "4k", title: "KomCom 4K", subtitle: "High-resolution focus — built for detail and stability." },
];

// Starter sample builds (replace with your real lineup)
export const builds: Build[] = [
  {
    id: "1080-base",
    tier: "1080",
    variant: "base",
    name: "KomCom 1080 Base",
    short: "Entry 1080p performance with reliable supporting components.",
    startingPriceEur: 899,
    highlights: ["1080p high settings focus", "Quiet, stable power", "Upgrade-friendly platform"],
    keySpecs: { cpu: "Ryzen 5 / Core i5 class", gpu: "RTX x060 / RX x600 class", ram: "16GB DDR4/DDR5", storage: "1TB NVMe" },
  },
  {
    id: "1080-balanced",
    tier: "1080",
    variant: "balanced",
    name: "KomCom 1080 Balanced",
    short: "Balanced for smoother modern titles and better longevity.",
    startingPriceEur: 1049,
    highlights: ["Higher headroom for AAA", "Thermals prioritized", "Sensible motherboard/PSU choices"],
    keySpecs: { cpu: "Ryzen 5 / Core i5+", gpu: "RTX x060 Ti / RX x700", ram: "32GB option-ready", storage: "1TB NVMe" },
  },
  {
    id: "1080-high",
    tier: "1080",
    variant: "high-refresh",
    name: "KomCom 1080 High Refresh",
    short: "For high refresh rate targets in competitive titles.",
    startingPriceEur: 1249,
    highlights: ["High FPS focus", "Lower latency priorities", "Cooling and stability headroom"],
    keySpecs: { cpu: "Fast gaming CPU", gpu: "RTX x070 / RX x800 class", ram: "32GB DDR5", storage: "1–2TB NVMe" },
  },
  {
    id: "1440-base",
    tier: "1440",
    variant: "base",
    name: "KomCom 1440 Base",
    short: "The step into 1440p without spending on unnecessary extras.",
    startingPriceEur: 1299,
    highlights: ["1440p high settings focus", "Balanced CPU/GPU spend", "Quality PSU baseline"],
    keySpecs: { cpu: "Ryzen 5/7 or Core i5/i7 class", gpu: "RTX x070 / RX x800", ram: "32GB", storage: "1TB NVMe" },
  },
  {
    id: "1440-balanced",
    tier: "1440",
    variant: "balanced",
    name: "KomCom 1440 Balanced",
    short: "Default recommendation: value-first 1440p sweet spot.",
    startingPriceEur: 1499,
    highlights: ["Great all-rounder", "Thermals & acoustics tuned", "Upgradeable foundation"],
    keySpecs: { cpu: "Gaming-focused CPU", gpu: "RTX x070 Ti / RX x800 XT", ram: "32GB", storage: "2TB NVMe" },
  },
  {
    id: "1440-high",
    tier: "1440",
    variant: "high-refresh",
    name: "KomCom 1440 High Refresh",
    short: "More headroom for high refresh 1440p targets.",
    startingPriceEur: 1749,
    highlights: ["Higher FPS ceiling", "Cooling margin", "Strong PSU & airflow"],
    keySpecs: { cpu: "High-end gaming CPU", gpu: "RTX x080 / RX x900 class", ram: "32–64GB", storage: "2TB NVMe" },
  },
  {
    id: "4k-base",
    tier: "4k",
    variant: "base",
    name: "KomCom 4K Base",
    short: "4K-ready foundation focused on stability and sensible value.",
    startingPriceEur: 1999,
    highlights: ["4K high settings focus", "Stable power delivery", "Cooling prioritized"],
    keySpecs: { cpu: "Upper mid-range CPU", gpu: "RTX x080 / RX x900 class", ram: "32GB", storage: "2TB NVMe" },
  },
  {
    id: "4k-balanced",
    tier: "4k",
    variant: "balanced",
    name: "KomCom 4K Balanced",
    short: "For heavier 4K titles with stronger GPU focus.",
    startingPriceEur: 2399,
    highlights: ["Higher 4K headroom", "Thermals & acoustics", "Long-term reliability"],
    keySpecs: { cpu: "High-end CPU", gpu: "RTX x080 Ti/ x090 class", ram: "32–64GB", storage: "2–4TB NVMe" },
  },
];

export function getTierBuilds(tier: Tier) { return builds.filter(b => b.tier === tier); }
export function getBuildById(id: string) { return builds.find(b => b.id === id); }
