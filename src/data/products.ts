/**
 * The range. Havrely is fictional, so every figure here is invented - but
 * invented to be plausible for an oat drink, because a concept site with
 * nonsense numbers would show nothing about how a real one should work.
 */
export interface Product {
  id: string;
  name: string;
  line: string;
  use: string;
  ingredients: string[];
  pairsWith: string[];
  /** Per 100 ml. */
  nutrition: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "barista",
    name: "Barista",
    line: "For the steam wand.",
    use: "Stretches to a glossy microfoam at 55–65 °C and holds its shape in the cup. Made with cafés, for cafés.",
    ingredients: ["Water", "Oats (11%)", "Rapeseed oil", "Sea salt"],
    pairsWith: ["Flat white", "Cortado", "Latte art"],
    nutrition: [
      { label: "Energy", value: "61 kcal" },
      { label: "Fat", value: "3.2 g" },
      { label: "Carbohydrate", value: "6.8 g" },
      { label: "of which sugars", value: "3.6 g" },
      { label: "Protein", value: "1.0 g" },
      { label: "Salt", value: "0.09 g" },
    ],
  },
  {
    id: "original",
    name: "Original",
    line: "For the glass and the bowl.",
    use: "A rounder, lighter oat drink for pouring cold: over muesli, into tea, straight from the fridge.",
    ingredients: ["Water", "Oats (10%)", "Rapeseed oil", "Sea salt"],
    pairsWith: ["Morning muesli", "Black tea", "Porridge"],
    nutrition: [
      { label: "Energy", value: "46 kcal" },
      { label: "Fat", value: "1.5 g" },
      { label: "Carbohydrate", value: "6.9 g" },
      { label: "of which sugars", value: "3.8 g" },
      { label: "Protein", value: "1.0 g" },
      { label: "Salt", value: "0.09 g" },
    ],
  },
  {
    id: "light",
    name: "Light",
    line: "Less fat, the same oats.",
    use: "Half the oil of Original, for those who drink it by the glass. Still just four ingredients.",
    ingredients: ["Water", "Oats (10%)", "Rapeseed oil", "Sea salt"],
    pairsWith: ["By the glass", "Smoothies", "Iced coffee"],
    nutrition: [
      { label: "Energy", value: "39 kcal" },
      { label: "Fat", value: "0.7 g" },
      { label: "Carbohydrate", value: "6.9 g" },
      { label: "of which sugars", value: "3.8 g" },
      { label: "Protein", value: "1.0 g" },
      { label: "Salt", value: "0.09 g" },
    ],
  },
];
