import Link from "next/link";
import { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="text-muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-xl bg-panel ring-1 ring-border shadow-soft">{children}</div>;
}

export function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg hover:brightness-110"
    >
      {children}
    </Link>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-semibold text-text hover:bg-panel2"
    >
      {children}
    </Link>
  );
}
