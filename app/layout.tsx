// axiom-site/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Axiom",
  description:
    "Re-imagining frictionless commerce, loyalty & payments with AI assistants and Axiom Coin.",
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ax-bg text-ax-ink">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
            <Link href="/" aria-label="AXIOM — Home" className="flex items-center gap-3">
              {/* Mark — uses the same art as your favicon, kept perfectly round */}
              <Image
                src={"/axiom-mark.png" /* fallback to "/favicon-32.png" if needed */}
                alt="Axiom mark"
                width={28}
                height={28}
                priority
                className="h-7 w-7 rounded-full"
              />
              {/* Wordmark (SVG). Hide on very small screens to keep the header tidy */}
              <Image
                src="/axiom-wordmark.png"
                alt="AXIOM"
                width={132}
                height={22}
                priority
                className="h-5 w-auto hidden xs:block sm:block"
              />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Axiom. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
