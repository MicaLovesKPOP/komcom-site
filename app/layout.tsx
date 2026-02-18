import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "KomCom — Performance-per-euro PCs",
  description: "Value-optimized prebuilts, custom builds, upgrades and repair — calm, transparent, warranty-backed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="min-h-[calc(100vh-320px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
