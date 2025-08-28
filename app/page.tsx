// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container pt-16 md:pt-24 pb-10 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl ax-gradient shadow-soft">
          <img src="/axiom-mark.svg" alt="Axiom mark" className="h-10 w-10" />
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          Re-imagining frictionless commerce, loyalty & payments
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-ax-sub">
          Axiom blends AI assistants, real-time competitive pricing, and Axiom Coin to remove
          friction across retail, travel, hospitality, and our flagship sports & entertainment complex.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#learn"
            className="rounded-xl2 ax-gradient text-black font-semibold px-5 py-3"
          >
            Learn more
          </a>
          <a
            href="#careers"
            className="rounded-xl2 border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Careers
          </a>
        </div>
      </section>

      {/* What / Why */}
      <section id="learn" className="container grid gap-6 md:grid-cols-2">
        <div className="ax-glass p-6">
          <h2 className="text-2xl font-bold">What is Axiom?</h2>
          <p className="mt-3 text-ax-sub leading-relaxed">
            We’re building the rails for “just-in-time” commerce: an AI concierge that can shop
            across platforms, surface verified prices & availability, and settle with Axiom Coin.
            The same assistant orchestrates in-venue experiences—entry, lockers, F&amp;B, and more.
          </p>
        </div>

        <div className="ax-glass p-6">
          <h2 className="text-2xl font-bold">Why now?</h2>
          <ul className="mt-3 space-y-2 text-ax-sub">
            <li>• Consumers expect chat-first, agentic experiences.</li>
            <li>• Vendors need dynamic pricing + loyalty that actually converts.</li>
            <li>• A single wallet (Axiom Coin) simplifies checkout everywhere.</li>
          </ul>
        </div>
      </section>

      {/* Facility */}
      <section className="container mt-6">
        <div className="ax-glass p-6">
          <h2 className="text-2xl font-bold">Flagship Facility</h2>
          <p className="mt-3 text-ax-sub">
            We’re designing a next-gen sports & entertainment complex to prove what’s possible
            when venue operations, loyalty, and AI assistants work as one. Details coming soon.
          </p>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="container mt-6 mb-16">
        <div className="ax-glass p-6">
          <h2 className="text-2xl font-bold">Careers</h2>
          <p className="mt-3 text-ax-sub">
            We’re quietly hiring senior builders across product, design, AI/agent systems,
            and full-stack engineering.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:careers@axiom.com" className="ax-link">careers@axiomcorp.co</a>
            <span className="text-ax-sub">·</span>
            <a href="mailto:hello@axiom.com" className="ax-link">hello@axiomcorp.co</a>
          </div>
        </div>
      </section>
    </main>
  );
}
