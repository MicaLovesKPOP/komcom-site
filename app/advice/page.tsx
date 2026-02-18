import { Section, Card, ButtonLink } from "@/components/ui";

export default function Page() {
  return (
    <Section title="Advice" subtitle="Upgrade advice and build advice — optional paid deep dive if you want a detailed report.">
      <Card>
        <div className="p-6 space-y-4">
          <ul className="list-disc pl-5 text-sm text-muted space-y-2">
          <li>Upgrade advice: best value improvements for your current system.</li>
          <li>Build advice: parts list + alternatives + explanation.</li>
          <li>Optional: advice fee deductible if you proceed with a build (your policy).</li>
          </ul>
          <div>
            <ButtonLink href="#">Ask for advice (stub)</ButtonLink>
          </div>
          <p className="text-xs text-muted">
            Starter page — replace with your final form and details.
          </p>
        </div>
      </Card>
    </Section>
  );
}
