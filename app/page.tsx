export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          Stealth, but hiring
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Re-imagining frictionless commerce, loyalty & payments
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          Axiom blends AI assistants, real-time competitive pricing, and{" "}
          <span className="font-medium">Axiom Coin</span> to remove friction
          across retail, travel, hospitality, and our flagship sports & events
          facility.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#about" className="rounded-xl bg-white px-5 py-3 text-black font-semibold">
            Learn more
          </a>
          <a href="#careers" className="rounded-xl border border-white/20 px-5 py-3 text-white/90">
            Careers
          </a>
        </div>
      </section>

      <section id="about" className="mt-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">What is Axiom?</h2>
          <p className="mt-3 text-white/75">
            We’re building the rails for “just-in-time” commerce: an AI concierge that can
            shop across platforms, surface verified prices & availability, and settle with
            Axiom Coin. The same assistant orchestrates in-venue experiences—entry, lockers,
            F&amp;B, and more.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Why now?</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Consumers expect chat-first, agentic experiences.</li>
            <li>Vendors need dynamic pricing + loyalty that actually converts.</li>
            <li>A single wallet (Axiom Coin) simplifies checkout everywhere.</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Flagship Facility</h2>
        <p className="mt-3 text-white/75">
          We’re designing a next-gen sports &amp; entertainment campus to prove what’s
          possible when venue operations, loyalty, and AI assistants work as one. Details
          coming soon.
        </p>
      </section>

      <section id="careers" className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Careers</h2>
        <p className="mt-3 text-white/75">
          We’re quietly hiring senior builders across product, design, AI/agent systems, and
          full-stack engineering.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="rounded-xl bg-white px-5 py-3 text-black font-semibold"
             href="mailto:careers@axiom.com?subject=Interest%20in%20Axiom">
            careers@axiom.com
          </a>
          <a className="rounded-xl border border-white/20 px-5 py-3 text-white/90"
             href="mailto:hello@axiom.com?subject=General%20Inquiry">
            hello@axiom.com
          </a>
        </div>
      </section>

      <p className="mt-16 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Axiom. All rights reserved.
      </p>
    </main>
  );
}
