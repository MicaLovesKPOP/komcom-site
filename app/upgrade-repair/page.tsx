import { Section, Card, ButtonLink } from "@/components/ui";

export default function Page() {
  return (
    <Section title="Upgrade & repair" subtitle="Fix issues, upgrade performance, or do maintenance — hardware and software.">
      <Card>
        <div className="p-6 space-y-4">
          <ul className="list-disc pl-5 text-sm text-muted space-y-2">
          <li>Diagnostics and troubleshooting</li>
          <li>Hardware upgrades (GPU/RAM/SSD/PSU, etc.)</li>
          <li>Cleaning + thermal paste refresh</li>
          <li>Software maintenance / OS reinstall</li>
          </ul>
          <div>
            <ButtonLink href="#">Request upgrade / repair (stub)</ButtonLink>
          </div>
          <p className="text-xs text-muted">
            Starter page — replace with your final form and details.
          </p>
        </div>
      </Card>
    </Section>
  );
}
