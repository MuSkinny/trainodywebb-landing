
import BentoFeatures from "@/components/bento-features";
import FAQ from "@/components/faq";
import Header from "@/components/header/floating-header";
import Hero from "@/components/hero/hero";
import VerticalHero from "@/components/hero/VerticalHero";
import LogoMarquee from "@/components/logo-marquee";
import Pricing from "@/components/pricing";
import TestimonialGrid from "@/components/testimonials/testimonials-grid";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies()
  const lang: any  = cookieStore.get("NEXT_LOCALE")?.value ?? 'it'

  return (
    <div className="w-full mx-auto bg-[#0f0f0f] relative">
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
