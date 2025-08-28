// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AXIOM",
  description: "Re-imagining frictionless commerce, loyalty, and payments.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  themeColor: "#000000",
};

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link href="/" aria-label="AXIOM — Home" className="flex items-center gap-3">
          {/* Mark (same artwork you use for the favicon) */}
          <Image
            src="/axiom-mark.png"
            alt="Axiom mark"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          {/* Wordmark: light mode */}
          <Image
            src="/axiom-wordmark-light.png"
            alt="AXIOM"
            width={132}
            height={22}
            priority
            className="h-5 w-auto dark:hidden"
          />
          {/* Wordmark: dark mode */}
          <Image
            src="/axiom-wordmark-dark.png"
            alt="AXIOM"
            width={132}
            height={22}
            priority
            className="hidden h-5 w-auto dark:block"
          />
        </Link>

        <nav className="ml-auto flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <Link href="/#product" className="hover:opacity-80">Product</Link>
          <Link href="/#facility" className="hover:opacity-80">Facility</Link>
          <Link href="/#careers" className="hover:opacity-80">Careers</Link>
          <Link href="/#contact" className="hover:opacity-80">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-black antialiased dark:bg-black dark:text-white">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-black/5 py-8 text-center text-sm text-neutral-500 dark:border-white/10">
          © {new Date().getFullYear()} Axiom Corp. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
