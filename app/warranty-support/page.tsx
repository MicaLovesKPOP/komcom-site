import { Section, Card, ButtonLink } from "@/components/ui";

export default function Page() {
  return (
    <Section title="Warranty & support" subtitle="Clear expectations, calm communication, and a straightforward process.">
      <Card>
        <div className="p-6 space-y-4">
          <ul className="list-disc pl-5 text-sm text-muted space-y-2">
          <li>Prebuilt purchase: instant checkout → review → confirmation within 24 hours.</li>
          <li>Every system is stress-tested before delivery.</li>
          <li>Define warranty duration + coverage + exclusions.</li>
          <li>Support channels: email now; chat later.</li>
          </ul>
          <div>
            <ButtonLink href="/contact">Contact support</ButtonLink>
          </div>
          <p className="text-xs text-muted">
            Starter page — replace with your final form and details.
          </p>
        </div>
      </Card>
    </Section>
  );
}
