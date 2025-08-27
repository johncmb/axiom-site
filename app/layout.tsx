import "./globals.css";

export const metadata = {
  title: "Axiom",
  description: "Commerce, rebuilt for the real world.",
  icons: { icon: [{ url: "/favicon-32.png", type: "image/png", sizes: "32x32" }] },
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black dark:bg-ax-bg dark:text-ax-ink">
        {children}
      </body>
    </html>
  );
}
