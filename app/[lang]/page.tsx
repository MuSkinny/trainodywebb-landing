
import BentoFeatures from "@/components/bento-features";
import FAQ from "@/components/faq";
import Header from "@/components/header/floating-header";
import Hero from "@/components/hero/hero";
import VerticalHero from "@/components/hero/VerticalHero";
import LogoMarquee from "@/components/logo-marquee";
import Pricing from "@/components/pricing";
import TestimonialGrid from "@/components/testimonials/testimonials-grid";
import JsonLd from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const homeMeta = {
  it: {
    title: "Trainody — Software gestionale per personal trainer",
    description:
      "Software gestionale per personal trainer: crea schede di allenamento, monitora i clienti e gestisci pagamenti e calendario in un'unica piattaforma. Inizia gratis.",
  },
  en: {
    title: "Trainody — Personal trainer software & client management",
    description:
      "All-in-one personal trainer software: build workout plans, track client progress, and manage payments and scheduling in one platform. Start for free.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: "it" | "en" };
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "it";
  return buildMetadata({
    lang,
    path: "",
    title: homeMeta[lang].title,
    description: homeMeta[lang].description,
  });
}

export default async function Index({
  params,
}: {
  params: { lang: "it" | "en" };
}) {
  const lang = params.lang === "en" ? "en" : "it";

  return (
    <div className="w-full mx-auto bg-[#0f0f0f] relative">
      <JsonLd lang={lang} />
      <Header lang={lang} />
      {/* <VerticalHero lang={lang} /> */}
      <Hero lang={lang} />
      <LogoMarquee lang={lang} />
      <BentoFeatures lang={lang} />
      {/*<CompareSides />*/}
      <Pricing lang={lang} />  
      {/* <TestimonialGrid lang={lang} /> */}
      <FAQ lang={lang} />
    </div>
  );
}
