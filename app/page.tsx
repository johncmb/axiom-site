import Link from "next/link";

const MAIL_HIRING = "mailto:founder@axiom.app?subject=Joining%20Axiom&body=Hi%20Axiom%20team%2C%0D%0A%0D%0A";
const MAIL_ACCESS  = "mailto:founder@axiom.app?subject=Request%20Access%20to%20Axiom%20Private%20Beta";
const MAIL_PRESS   = "mailto:founder@axiom.app?subject=Press%2FInvestor%20Inquiry";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-ax-orange" aria-hidden />
            <span className="font-semibold tracking-wide">AXIOM</span>
          </div>
          <nav className="ml-auto flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#why" className="hover:opacity-80">Why Axiom</a>
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#careers" className="hover:opacity-80">Careers</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-blur pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Commerce, rebuilt for the real world.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-ax-sub">
              A secure, AI-native super-app for venues and everyday shopping.
              Private beta with select partners.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MAIL_ACCESS}
                className="px-5 py-3 rounded-xl font-semibold text-black ax-gradient text-center"
              >
                Request access
              </a>
              <a
                href="#careers"
                className="px-5 py-3 rounded-xl font-semibold border border-black/10 dark:border-white/15 text-center"
              >
                We’re hiring
              </a>
            </div>

            <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
              Built with the ChatGPT API.
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="why" className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Concierge",
              body:
                "A conversational interface that can handle every user task—search, purchase, tickets, food, lockers, and more."
            },
            {
              title: "Trust & Speed",
              body:
                "Payments and identity designed for the physical world—fast transactions, simple UX, and strong privacy."
            },
            {
              title: "For Venues & Retail",
              body:
                "Seamless guest journeys on-site, and competitive shopping off-site. One account. One wallet."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white dark:bg-black/40"
            >
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <div className="text-lg font-semibold">What we’re building</div>
            <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300 list-disc pl-5">
              <li>AI concierge (“Alex”) that can do anything the app can do.</li>
              <li>Unified wallet with loyalty, optimized for in-venue experiences.</li>
              <li>Price + availability comparison across curated partners.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <div className="text-lg font-semibold">What we’ll share (for now)</div>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              We’re operating in stealth. We can provide a short intro call and a one-pager under NDA to qualified candidates,
              partners, and investors.
            </p>
            <div className="mt-4">
              <a href={MAIL_PRESS} className="text-ax-orange hover:underline">Request the one-pager →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <div className="text-lg font-semibold">We’re hiring founding builders</div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Senior Full-stack (Next.js), Front-end, and Product Design. US-based; hybrid preferred.
            </p>
            <div className="mt-4">
              <a href={MAIL_HIRING} className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/15">
                Email your resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-ax-orange" aria-hidden />
              <div className="font-semibold tracking-wide">AXIOM</div>
            </div>
            <div className="text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Axiom Corp. All rights reserved.
            </div>
            <div className="md:ml-auto flex gap-4 text-sm">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <a href={MAIL_ACCESS} className="hover:underline">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
