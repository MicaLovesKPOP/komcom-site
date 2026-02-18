import Link from "next/link";
import { Section, Card, ButtonLink, GhostLink } from "@/components/ui";
import { tiers } from "@/lib/catalog";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Smart PC builds, optimized for your budget.
            </h1>
            <p className="text-muted">
              KomCom focuses on performance-per-euro and long-term stability. Buy a curated prebuilt instantly, or request a custom build via a structured form.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/prebuilts">Browse prebuilts</ButtonLink>
              <GhostLink href="/custom-build">Request a custom build</GhostLink>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { title: "Transparent choices", text: "We explain trade-offs without pushing." },
                { title: "Stress-tested systems", text: "Every system gets a stability pass before delivery." },
                { title: "Warranty-backed", text: "Clear warranty & support process." },
              ].map((i) => (
                <div key={i.title} className="rounded-lg border border-border bg-panel2 p-4">
                  <div className="text-sm font-semibold">{i.title}</div>
                  <div className="mt-1 text-sm text-muted">{i.text}</div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <div className="p-6">
              <div className="text-sm font-semibold">Choose your performance level</div>
              <div className="mt-2 text-sm text-muted">A clean lineup: 1080 / 1440 / 4K.</div>
              <div className="mt-5 grid gap-3">
                {tiers.map(t => (
                  <Link key={t.tier} href={`/prebuilts/${t.tier}`} className="group rounded-lg border border-border bg-bg px-4 py-4 hover:bg-panel2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold">{t.title}</div>
                        <div className="mt-1 text-sm text-muted">{t.subtitle}</div>
                      </div>
                      <span className="text-sm text-accent group-hover:brightness-110">View →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Section title="Services" subtitle="For people who want a consultative experience — or just need help fixing or upgrading what they have.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Custom builds", text: "Form-based request. We propose a build, you approve, then we build.", href: "/custom-build" },
            { title: "Upgrade & repair", text: "Diagnostics, upgrades, hardware and software maintenance.", href: "/upgrade-repair" },
            { title: "Advice", text: "Build advice or upgrade advice — optional paid deep dive.", href: "/advice" },
          ].map((c) => (
            <Card key={c.title}>
              <div className="p-6 space-y-3">
                <div className="text-lg font-semibold">{c.title}</div>
                <p className="text-sm text-muted">{c.text}</p>
                <ButtonLink href={c.href}>Open</ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Warranty & support" subtitle="Safety first. Clear expectations, calm communication.">
        <Card>
          <div className="p-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="text-sm font-semibold">How it works</div>
              <ul className="list-disc pl-5 text-sm text-muted space-y-2">
                <li>Prebuilts: instant purchase, then order review and confirmation within 24 hours.</li>
                <li>Every system is stress-tested before delivery.</li>
                <li>Used parts (if used) are tested and warranty-backed — you decide your comfort level.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-semibold">Next steps</div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/warranty-support">Warranty & support</ButtonLink>
                <GhostLink href="/contact">Contact</GhostLink>
              </div>
              <p className="text-sm text-muted">(Replace these placeholders with your final warranty terms when you’re ready.)</p>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
