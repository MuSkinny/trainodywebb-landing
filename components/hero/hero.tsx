import Link from "next/link";
import AnimatedText from "../AnimatedText";
import TestimonialAvatars from "../testimonials/TestimonialAvatars";
import { getDictionary } from "@/lib/dictionary";
import HeroCarousel from "./hero-carousel";

const Hero = async ({ lang }: { lang: any }) => {
  const dict = await getDictionary(lang);

  return (
    <section className="relative w-full overflow-hidden bg-background min-h-[100svh] flex items-center py-28 lg:py-32 lg:px-24">
      {/* Carosello immagini (cross-fade) */}
      <HeroCarousel />

      {/* Scrim orizzontale: lato testo solido, foto che emerge a destra (fonde il seam) */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      {/* Fade inferiore: transizione morbida verso la sezione successiva */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      {/* Griglia tecnica sottile */}
      <div className="pointer-events-none absolute inset-0 bg-grid-tech [background-size:46px_46px] opacity-[0.4] [mask-image:radial-gradient(50%_45%_at_22%_55%,#000,transparent)]" />

      <div className="relative container z-10 flex flex-col items-start gap-6">
        {/* Trust */}
        <AnimatedText delay={0.15} direction="bottom" className="px-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur-sm">
            <TestimonialAvatars lang={lang} />
          </div>
        </AnimatedText>

        {/* Titolo + sottotitolo */}
        <AnimatedText delay={0.2} direction="bottom" className="px-4">
          <h1 className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent font-display text-4xl md:text-6xl leading-[1.02] flex flex-col items-start">
            <span className="w-full max-w-lg lg:max-w-2xl uppercase">
              {dict.hero.title}
            </span>
          </h1>
          <p className="max-w-lg mt-5 text-lg md:text-xl font-light text-foreground/70">
            {dict.hero.subtitle}
          </p>
        </AnimatedText>

        {/* CTA */}
        <AnimatedText delay={0.3} direction="bottom" className="px-4 z-20">
          <div className="flex flex-col items-start gap-3 pt-4">
            <Link
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-12 py-4 font-display text-base uppercase tracking-wide text-primary-foreground shadow-glow transition-all duration-200 hover:scale-[1.03] hover:shadow-glow-lg"
              href={`https://app.trainody.com/${lang}/sign-up`}
            >
              {dict.hero.ctaButtonText}
            </Link>
            <span className="text-xs text-foreground/50">
              {lang === "it"
                ? "Nessuna carta richiesta · Inizia in 2 minuti"
                : "No card required · Get started in 2 minutes"}
            </span>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
};

export default Hero;
