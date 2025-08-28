// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container pt-14 md:pt-20 pb-8 text-center">
        {/* Big logo + tagline */}
        <div className="mx-auto">
          {/* Light mode */}
          <Image
            src="/logo-tagline-light.png"
            alt="AXIOM — Re-imagining frictionless commerce, loyalty & payments"
            width={800}
            height={280}
            priority
            className="mx-auto h-auto w-[min(720px,92vw)] dark:hidden"
          />
          {/* Dark mode */}
          <Image
            src="/logo-tagline-dark.png"
            alt="AXIOM — Re-imagining frictionless commerce, loyalty & payments"
            width={800}
            height={280}
            priority
            className="mx-auto hidden h-auto w-[min(720px,92vw)] dark:block"
          />
        </div>

        {/* Keep an accessible H1 for SEO but hide it visually (tagline is in the SVG) */}
        <h1 className="sr-only">
          Re-imagining frictionless commerce, loyalty & payments
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-ax-sub">
          Axiom blends AI assistants, real-time competitive pricing, and Axiom Coin to
          remove friction across retail, travel, hospitality, and our flagship sports &
          entertainment complex.
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
            We’re building the rails for “just-in-time” commerce: an AI concierge that can
            shop across platforms, surface verified prices & availability, and settle with
            Axiom Coin. The same assistant orchestrates in-venue experiences—entry,
            locker rooms, F&amp;B, retail, fitness center, and more.
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
            We’re designing a next-gen sports & entertainment complex to prove what’s
            possible when venue operations, loyalty, and AI assistants work as one.
            Details coming soon.
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
            <a href="mailto:careers@axiomcorp.co" className="ax-link">
              careers@axiomcorp.co
            </a>
            <span className="text-ax-sub">·</span>
            <a href="mailto:hello@axiomcorp.co" className="ax-link">
              hello@axiomcorp.co
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
