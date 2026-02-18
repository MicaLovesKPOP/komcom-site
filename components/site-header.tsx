import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/prebuilts", label: "Prebuilts" },
  { href: "/custom-build", label: "Custom Build" },
  { href: "/upgrade-repair", label: "Upgrade & Repair" },
  { href: "/advice", label: "Advice" },
  { href: "/warranty-support", label: "Warranty" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="KomCom"
            width={220}
            height={60}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted hover:text-text">
              {n.label}
            </Link>
          ))}
          <Link
            href="/prebuilts"
            className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-bg hover:brightness-110"
          >
            Shop
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/prebuilts" className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-bg">
            Shop
          </Link>
        </div>
      </div>
    </header>
  );
}
