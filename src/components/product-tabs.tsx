"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";
import { PRODUCTS } from "@/data/products";

/**
 * The range as tabs: one carton at a time, so the comparison that matters -
 * what each is for - is not lost in three columns of nutrition tables.
 * Arrow keys move between tabs, as in any tablist.
 */
export function ProductTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const product = PRODUCTS[active];

  function onKey(e: KeyboardEvent) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    const next = (active + step + PRODUCTS.length) % PRODUCTS.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="The range" onKeyDown={onKey} className="flex border-b border-line">
        {PRODUCTS.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${p.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 px-4 py-3 font-serif text-lg transition-colors md:px-6 md:text-xl ${
              i === active ? "border-forest text-forest" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          role="tabpanel"
          id={`panel-${product.id}`}
          aria-labelledby={`tab-${product.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 py-10 md:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <p className="font-serif text-3xl leading-tight text-forest md:text-4xl">{product.line}</p>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">{product.use}</p>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.14em]">Ingredients</h3>
            <p className="mt-2 text-[17px]">{product.ingredients.join(" · ")}</p>

            <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.14em]">Good in</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {product.pairsWith.map((x) => (
                <li key={x} className="border border-line bg-white/60 px-3 py-1 text-sm">
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <table className="w-full self-start text-[15px]">
            <caption className="pb-3 text-left text-sm font-medium uppercase tracking-[0.14em]">
              Per 100 ml
            </caption>
            <tbody>
              {product.nutrition.map((n) => (
                <tr key={n.label} className="border-t border-line">
                  <th
                    scope="row"
                    className={`py-2.5 text-left font-normal ${n.label.startsWith("of") ? "pl-4 text-muted" : ""}`}
                  >
                    {n.label}
                  </th>
                  <td className="py-2.5 text-right tabular-nums">{n.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
