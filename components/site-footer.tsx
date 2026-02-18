import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-semibold">KomCom</div>
          <p className="text-sm text-muted">
            Value-optimized prebuilts and custom builds, with upgrades, repair and support — calm and transparent.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Products</div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-text" href="/prebuilts">Prebuilts</Link></li>
            <li><Link className="hover:text-text" href="/custom-build">Custom build request</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Services</div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-text" href="/upgrade-repair">Upgrade & repair</Link></li>
            <li><Link className="hover:text-text" href="/advice">Advice</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Support</div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-text" href="/warranty-support">Warranty & support</Link></li>
            <li><Link className="hover:text-text" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-text" href="/legal">Terms & privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-muted">
          <span>© {new Date().getFullYear()} KomCom</span>
          <span>Built for clarity, stability, and value.</span>
        </div>
      </div>
    </footer>
  );
}
