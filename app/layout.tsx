import "./globals.css";

export const metadata = {
  title: "Axiom — Frictionless Commerce, Loyalty & Axiom Coin",
  description:
    "Axiom is reimagining in-venue and everyday commerce with AI, Just-In-Time offers, and Axiom Coin.",
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0d10] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
