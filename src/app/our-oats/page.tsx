import type { Metadata } from "next";
import { OatMark } from "@/components/oat-mark";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our oats",
  description: "Where Havrely’s oats come from, how the drink is made, and what we leave out.",
};

const PROCESS = [
  { title: "Mill", text: "Whole organic oats are milled with water into a smooth, pale base." },
  { title: "Soften", text: "Natural enzymes break the oat starch down, the way malting does. No sugar is added." },
  { title: "Finish", text: "The fibre is separated off, a little rapeseed oil and sea salt go in, and it’s cartoned." },
];

const LEFT_OUT = ["Added sugar", "Gums and thickeners", "Acidity regulators", "Flavourings", "Anything you’d need to look up"];

export default function OurOats() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-20">
        <Reveal className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Our oats</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] md:text-6xl">
            Nordic oats, <em className="text-forest">and not much else.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Oats like a cool, long summer. Ours are organic and grown in Denmark and southern Sweden,
            then milled a few hours from where they’re harvested.
          </p>
        </Reveal>
        <Photo
          src="/images/oat-field.jpg"
          alt="An oat field in late summer, low sun over rolling farmland"
          className="mt-12 aspect-[16/7] w-full"
          sizes="(min-width: 1152px) 1088px, 100vw"
          priority
        />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">How it’s made, in three steps.</h2>
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <li className="border-t border-forest/40 pt-5">
                <span className="text-sm tabular-nums text-muted">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mt-24 bg-kraft/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">What we leave out.</h2>
            <ul className="mt-8 grid gap-3">
              {LEFT_OUT.map((x) => (
                <li key={x} className="flex items-center gap-3 border-b border-line pb-3 text-[17px]">
                  <span aria-hidden className="h-px w-5 bg-forest" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="self-center">
            {/* We would rather say "not yet" than print a footprint we
                cannot back up. The honest version of a green claim. */}
            <div className="border border-forest/30 bg-oat p-8">
              <OatMark className="h-12 w-auto text-forest" />
              <h3 className="mt-5 font-serif text-2xl">On our footprint</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                We’re measuring it, field to carton. When we have a number we can stand behind, it
                will be here, with how we got it. Until then, we’d rather not print one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
