// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">
          {/* Light mode artwork */}
          <Image
            src="/logo-tagline-light.svg"
            alt="AXIOM — Re-imagining frictionless commerce, loyalty, and payments."
            width={1200}
            height={420}
            priority
            className="dark:hidden h-auto w-full max-w-[980px]"
          />
          {/* Dark mode artwork */}
          <Image
            src="/logo-tagline-dark.svg"
            alt="AXIOM — Re-imagining frictionless commerce, loyalty, and payments."
            width={1200}
            height={420}
            priority
            className="hidden h-auto w-full max-w-[980px] dark:block"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#product"
              className="rounded-xl border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 dark:border-white/10 dark:bg-white dark:text-black"
            >
              Learn more
            </Link>
            <Link
              href="#contact"
              className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 dark:border-white/10 dark:bg-transparent dark:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* OPTIONAL SECTIONS (keep or remove) */}
      <section id="product" className="border-t border-black/5 py-16 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 text-center text-neutral-600 dark:text-neutral-300">
          <h2 className="mb-3 text-2xl font-semibold text-black dark:text-white">Product</h2>
          <p>
            AXIOM unifies commerce, loyalty, and payments with a single guest experience.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-black/5 py-16 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 text-center text-neutral-600 dark:text-neutral-300">
          <h2 className="mb-3 text-2xl font-semibold text-black dark:text-white">Contact</h2>
          <p>Reach us at <a className="underline" href="mailto:hello@axiom.example">hello@axiom.example</a>.</p>
        </div>
      </section>
    </main>
  );
}
