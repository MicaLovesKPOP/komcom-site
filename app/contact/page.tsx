import { Section, Card, ButtonLink } from "@/components/ui";

export default function Page() {
  return (
    <Section title="Contact" subtitle="Questions are welcome. For fastest help, use the relevant form page.">
      <Card>
        <div className="p-6 space-y-4">
          <ul className="list-disc pl-5 text-sm text-muted space-y-2">
          <li>Email: (add your address)</li>
          <li>Region: Dordrecht & surrounding (adjust as needed)</li>
          <li>Business hours: (add)</li>
          <li>Prefer forms for custom requests, advice, or repair.</li>
          </ul>
          <div>
            <ButtonLink href="/">Back to home</ButtonLink>
          </div>
          <p className="text-xs text-muted">
            Starter page — replace with your final form and details.
          </p>
        </div>
      </Card>
    </Section>
  );
}
