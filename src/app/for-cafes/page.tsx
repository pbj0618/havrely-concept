import type { Metadata } from "next";
import { SampleForm } from "@/components/forms";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "For cafés",
  description: "Havrely Barista: an oat drink made to be steamed. Request a sample box.",
};

const PROMISES = [
  {
    title: "It foams.",
    text: "A fine, glossy microfoam at 55–65 °C that holds long enough to pour a rosetta.",
  },
  {
    title: "It sits in espresso.",
    text: "No splitting, no grey film on a bright roast. The oats stay in the background.",
  },
  {
    title: "It’s the same every time.",
    text: "One recipe, one mill, tested batch by batch, so Tuesday’s flat white matches Saturday’s.",
  },
];

const STEAMING = [
  { step: "Start cold", text: "Straight from the fridge, 4–6 °C. Cold oat drink gives you more time to stretch." },
  { step: "Stretch early", text: "Introduce air in the first few seconds, then sink the tip and let it roll." },
  { step: "Stop at 60 °C", text: "Hotter than 65 °C and the sweetness goes flat. The pitcher should just be too warm to hold." },
  { step: "Pour soon", text: "Swirl, tap once, and pour within 20 seconds for the finest texture." },
];

export default function ForCafes() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Havrely Barista</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] md:text-6xl">
            Made with cafés, <em className="text-forest">for cafés.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            The first people to taste every batch are baristas. If it doesn’t steam well, it
            doesn’t leave the mill.
          </p>
        </Reveal>
        <Photo
          src="/images/latte-pour.jpg"
          alt="Havrely Barista poured from the carton into a latte"
          className="aspect-[6/5] w-full"
          priority
        />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">Three things we promise the steam wand.</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-forest/40 pt-5">
                <h3 className="font-serif text-2xl text-forest">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-kraft/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Steaming guide</h2>
            <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-muted">
              Oat drink steams a little differently from dairy. Four habits make the difference.
            </p>
            <Photo
              src="/images/steaming.jpg"
              alt="A barista steaming Havrely Barista in a stainless pitcher"
              className="mt-8 aspect-[16/10] w-full"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <ol className="grid gap-6">
            {STEAMING.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line pt-5">
                  <span className="font-serif text-3xl text-forest tabular-nums">{i + 1}</span>
                  <div>
                    <p className="font-medium">{s.step}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="sample" className="mx-auto mt-24 grid max-w-6xl scroll-mt-8 gap-12 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Try it against what you pour now.</h2>
          <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-muted">
            We’ll send a sample box of Barista to your café: six cartons, a steaming card, and nothing
            to sign.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SampleForm />
        </Reveal>
      </section>
    </>
  );
}
