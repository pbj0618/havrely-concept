import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import { ConceptBar, Footer, Header } from "@/components/site-chrome";
import { MotionRoot } from "@/components/motion-root";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Havrely — Oat drink, made for the cup", template: "%s — Havrely" },
  description:
    "A concept site for Havrely, a fictional Copenhagen oat-drink brand. Designed and built by Brandory Studio.",
  // A fictional brand should not turn up in searches as if it were real.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${workSans.variable}`}>
        <MotionRoot>
          <ConceptBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionRoot>
      </body>
    </html>
  );
}
