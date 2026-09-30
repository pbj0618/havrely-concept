import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about Havrely, café supply, or retail.",
};

const FAQ = [
  {
    q: "Is Havrely gluten-free?",
    a: "Oats are naturally gluten-free, but most are grown and milled near wheat. Ours are not certified gluten-free, so we don’t claim it.",
  },
  {
    q: "How long does a carton keep?",
    a: "Unopened, until the date on the carton, at room temperature. Once opened, keep it in the fridge and use it within five days.",
  },
  {
    q: "Can I buy it for my café?",
    a: "Yes. Start with a sample box from the For cafés page, and we’ll talk supply once you’ve tried it.",
  },
  {
    q: "Why is there oil in it?",
    a: "A little rapeseed oil gives the drink body and helps the foam hold. It’s the only thing besides oats, water and salt.",
  },
];

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 pt-12 md:grid-cols-[1fr_1.2fr] md:px-8 md:pt-20">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.18em] text-muted">Contact</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.04] md:text-6xl">Write to us.</h1>
        <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
          Questions about the drink, café supply or retail. The answer might already be below.
        </p>

        <div className="mt-12 border-t border-line">
          {FAQ.map((item) => (
            // Native disclosure: keyboard and screen-reader support for free.
            <details key={item.q} className="group border-b border-line py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span aria-hidden className="text-xl text-forest transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </section>
  );
}
