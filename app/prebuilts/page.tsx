import Link from "next/link";
import { tiers } from "@/lib/catalog";
import { Section, Card } from "@/components/ui";

export default function PrebuiltsLanding() {
  return (
    <Section title="Prebuilt systems" subtitle="Choose your target performance level. Clean lineup. No clutter.">
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.tier}>
            <div className="p-6 space-y-4">
              <div>
                <div className="text-xl font-semibold">{t.title}</div>
                <p className="mt-2 text-sm text-muted">{t.subtitle}</p>
              </div>

              <div className="rounded-lg border border-border bg-bg p-4 text-sm text-muted">
                Starting prices update with your real catalog.
              </div>

              <Link
                href={`/prebuilts/${t.tier}`}
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg hover:brightness-110"
              >
                View builds
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
