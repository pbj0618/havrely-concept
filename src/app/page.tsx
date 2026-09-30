import Link from "next/link";
import { NewsletterForm } from "@/components/forms";
import { OatMark } from "@/components/oat-mark";
import { ParallaxPhoto } from "@/components/parallax-photo";
import { Photo } from "@/components/photo";
import { ProductTabs } from "@/components/product-tabs";
import { Reveal } from "@/components/reveal";

const INGREDIENTS = [
  { name: "Oats", note: "Organic, grown in Denmark and Sweden." },
  { name: "Water", note: "Most of what is in the carton, as in any oat drink." },
  { name: "Rapeseed oil", note: "For body, and for the foam to hold." },
  { name: "Sea salt", note: "A pinch, so the oats taste of oats." },
];

export default function Home() {
  return (
    <>
      {/* Hero: the product claim, then the two people it is for. */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Oat drink · Copenhagen</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] md:text-7xl">
            Made for <em className="text-forest">the cup.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A clean oat drink with four ingredients. It foams like milk, tastes of oats, and is the
            same in every carton.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/for-cafes"
              className="bg-forest px-6 py-3 text-[15px] font-medium text-oat transition-colors hover:bg-forest-deep"
            >
              For cafés
            </Link>
            <a
              href="#range"
              className="border border-forest px-6 py-3 text-[15px] font-medium text-forest transition-colors hover:bg-forest hover:text-oat"
            >
              See the range
            </a>
          </div>
        </Reveal>
        <ParallaxPhoto
          src="/images/table.jpg"
          alt="A Havrely carton beside a glass of oat drink on a sunlit wooden table"
          className="aspect-[6/5] w-full"
        />
      </section>

      {/* The range */}
      <section id="range" className="mx-auto mt-28 max-w-6xl scroll-mt-8 px-5 md:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">Three cartons, one recipe.</h2>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">
            The same four ingredients, balanced for where you pour them.
          </p>
        </Reveal>
        <Photo
          src="/images/range.jpg"
          alt="Three Havrely cartons side by side on an oak table"
          className="mt-10 aspect-[21/9] w-full"
          sizes="(min-width: 1152px) 1088px, 100vw"
        />
        <Reveal delay={0.1} className="mt-8">
          <ProductTabs />
        </Reveal>
      </section>

      {/* Four ingredients */}
      <section className="mt-20 bg-kraft/50 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl">Four ingredients. That’s the list.</h2>
            <OatMark className="hidden h-24 w-auto text-forest md:block" />
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {INGREDIENTS.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <li className="border-t border-forest/40 pt-5">
                  <span className="text-sm tabular-nums text-muted">0{i + 1}</span>
                  <p className="mt-2 font-serif text-2xl">{item.name}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.note}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cafés */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <Photo
          src="/images/cafe-bar.jpg"
          alt="A barista pouring Havrely into a latte at a café counter"
          className="aspect-[6/5] w-full"
        />
        <Reveal>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">For cafés</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Your baristas will know in one pitcher.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
            Barista is made to be steamed: a fine, glossy foam that pours clean and doesn’t split in
            espresso. Ask for a sample box and try it against what you use now.
          </p>
          <Link href="/for-cafes" className="mt-7 inline-block text-[15px] font-medium text-forest underline underline-offset-4">
            Request a sample box →
          </Link>
        </Reveal>
      </section>

      {/* Newsletter */}
      <section className="mx-auto mt-28 max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <OatMark className="mx-auto h-14 w-auto text-forest" />
          <h2 className="mt-5 font-serif text-3xl md:text-4xl">A letter from the oat fields, four times a year.</h2>
          <p className="mt-3 text-[17px] text-muted">Harvest news, new cartons, and recipes. Nothing else.</p>
          <div className="mx-auto mt-7 max-w-md text-left">
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
