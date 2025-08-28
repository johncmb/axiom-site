// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom",
  description:
    "Re-imagining frictionless commerce, loyalty & payments with AI assistants and Axiom Coin.",
  themeColor: "#0b0d10",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top nav */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
          <div className="container flex items-center gap-3 py-3">
            <div className="flex items-center gap-2">
              <img src="/axiom-mark.svg" alt="Axiom" className="h-6 w-6 rounded" />
              <span className="font-semibold tracking-wide">AXIOM</span>
            </div>
            <span className="ml-auto text-xs text-ax-sub">Stealth, but hiring</span>
          </div>
        </header>

        {children}

        <footer className="mt-20 border-t border-white/10">
          <div className="container py-8 text-sm text-ax-sub">
            © {new Date().getFullYear()} Axiom. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
