import { Section, Card, ButtonLink } from "@/components/ui";

export default function Page() {
  return (
    <Section title="Custom build request" subtitle="A structured form. You tell us what you need. We propose a build. You approve. We build.">
      <Card>
        <div className="p-6 space-y-4">
          <ul className="list-disc pl-5 text-sm text-muted space-y-2">
          <li>Use-case, budget and priorities first (not parts).</li>
          <li>Optional: paste your PCPartPicker list for review.</li>
          <li>Choose your comfort level for used components (never forced).</li>
          <li>We explain trade-offs calmly — you decide.</li>
          </ul>
          <div>
            <ButtonLink href="#">Start the request (stub)</ButtonLink>
          </div>
          <p className="text-xs text-muted">
            Starter page — replace with your final form and details.
          </p>
        </div>
      </Card>
    </Section>
  );
}
