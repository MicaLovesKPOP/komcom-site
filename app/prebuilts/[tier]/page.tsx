import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Card } from "@/components/ui";
import { getTierBuilds, tiers, type Tier } from "@/lib/catalog";

const valid = new Set(["1080","1440","4k"]);

function tierTitle(tier: Tier) { return tiers.find(t => t.tier === tier)?.title ?? "Prebuilts"; }
function tierSubtitle(tier: Tier) { return tiers.find(t => t.tier === tier)?.subtitle ?? ""; }

export default function TierPage({ params }: { params: { tier: string } }) {
  if (!valid.has(params.tier)) return notFound();
  const tier = params.tier as Tier;
  const list = getTierBuilds(tier);

  return (
    <Section title={tierTitle(tier)} subtitle={tierSubtitle(tier)}>
      <div className="grid gap-4 md:grid-cols-3">
        {list.map((b) => (
          <Card key={b.id}>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <div className="text-lg font-semibold">{b.name}</div>
                <div className="text-sm text-muted">{b.short}</div>
              </div>

              <div className="rounded-lg border border-border bg-bg p-4">
                <div className="text-xs text-muted">Starting at</div>
                <div className="mt-1 text-2xl font-semibold">€{b.startingPriceEur.toLocaleString()}</div>
              </div>

              <ul className="space-y-2 text-sm text-muted">
                {b.highlights.slice(0, 3).map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>

              <div className="grid gap-2">
                <Link
                  href={`/prebuilts/build/${b.id}`}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg hover:brightness-110"
                >
                  Configure
                </Link>
                <Link
                  href="/custom-build"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-semibold text-text hover:bg-panel2"
                >
                  Structural changes → Custom
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-sm text-muted">
        Keep each tier curated (2–3 builds). Too many choices hurts confidence.
      </div>
    </Section>
  );
}
