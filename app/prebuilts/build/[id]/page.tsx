import { notFound } from "next/navigation";
import { Section, Card } from "@/components/ui";
import { getBuildById } from "@/lib/catalog";

const options = {
  ram: [
    { label: "16GB (default)", price: 0 },
    { label: "32GB", price: 60 },
    { label: "64GB", price: 140 },
  ],
  storage: [
    { label: "1TB NVMe (default)", price: 0 },
    { label: "2TB NVMe", price: 80 },
    { label: "4TB NVMe", price: 190 },
  ],
  case: [
    { label: "Standard airflow case (default)", price: 0 },
    { label: "Alternate case option", price: 40 },
  ],
  cooling: [
    { label: "Air cooling (default)", price: 0 },
    { label: "Upgraded cooler", price: 65 },
  ],
};

export default function BuildDetail({ params }: { params: { id: string } }) {
  const build = getBuildById(params.id);
  if (!build) return notFound();

  return (
    <Section title={build.name} subtitle={build.short}>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="p-6 space-y-4">
            <div className="text-sm font-semibold">Key specs</div>
            <ul className="space-y-2 text-sm text-muted">
              <li><span className="text-text">CPU:</span> {build.keySpecs.cpu}</li>
              <li><span className="text-text">GPU:</span> {build.keySpecs.gpu}</li>
              <li><span className="text-text">RAM:</span> {build.keySpecs.ram}</li>
              <li><span className="text-text">Storage:</span> {build.keySpecs.storage}</li>
            </ul>
            <div className="text-xs text-muted">
              Replace placeholders with real SKUs when you connect your catalog.
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6 space-y-5">
            <div className="text-sm font-semibold">Options (controlled)</div>

            {Object.entries(options).map(([k, list]) => (
              <div key={k} className="space-y-2">
                <div className="text-sm capitalize">{k}</div>
                <div className="grid gap-2">
                  {list.map((o) => (
                    <label key={o.label} className="flex items-center justify-between rounded-lg border border-border bg-bg px-3 py-2 text-sm text-muted hover:bg-panel2">
                      <span>{o.label}</span>
                      <span className="text-text">{o.price === 0 ? "Included" : `+€${o.price}`}</span>
                      <input className="ml-3" type="radio" name={k} defaultChecked={o.price === 0} />
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-border bg-panel2 p-4 text-sm text-muted">
              CPU/motherboard changes → Custom Build request.
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6 space-y-4">
            <div className="text-sm font-semibold">Purchase</div>
            <div className="rounded-lg border border-border bg-bg p-4">
              <div className="text-xs text-muted">Starting price</div>
              <div className="mt-1 text-2xl font-semibold">€{build.startingPriceEur.toLocaleString()}</div>
              <div className="mt-2 text-xs text-muted">
                Checkout is a stub in this starter. Next step: Stripe Checkout + SKU pricing.
              </div>
            </div>

            <button className="w-full rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg hover:brightness-110">
              Buy now (stub)
            </button>

            <div className="text-xs text-muted">
              Policy: purchasable only when buildable with current supply. After purchase: review → confirmation within 24h.
            </div>

            <a href="/warranty-support" className="text-sm text-accent hover:brightness-110">
              Warranty & support →
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}
