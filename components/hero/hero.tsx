import Link from "next/link";
import AnimatedText from "../AnimatedText";
import TestimonialAvatars from "../testimonials/TestimonialAvatars";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import body from "@/public/assets/img_body.png";

const Hero = async ({ lang }: { lang: any }) => {
  const dict = await getDictionary(lang);

  return (
    <section
      className="w-full relative flex flex-col overflow-hidden h-screen py-32 lg:py-40 pb-24 lg:px-24 bg-left-top sm:bg-center bg-[#282828]"
    >
         <div className="absolute inset-0">
            {/* Usa Next/Image per l'ottimizzazione automatica */}
            <Image
                src={body}  // Sostituisci con il path della tua immagine
                alt="Hero background"
                fill
                priority  // Indica a Next.js di caricare questa immagine con priorità
                quality={75}  // Ottimizza la qualità dell'immagine (default è 75)
                className="object-cover"  // Mantiene le proporzioni corrette
            />
      </div>

      <div className="relative container z-10 flex flex-col items-start gap-6">
        <AnimatedText delay={0.3} direction="bottom" className="px-4">
          <TestimonialAvatars lang={lang} />
        </AnimatedText>

        <AnimatedText delay={0.2} direction="bottom" className="px-4">
          <h1 className="bg-gradient-to-b from-secondary-foreground to-primary-foreground bg-clip-text font-bold text-3xl md:text-5xl flex flex-col items-start">
            <span className="w-full max-w-lg lg:max-w-2xl">
              {dict.hero.title}
            </span>
          </h1>
          <p className="max-w-lg mt-3 text-lg md:text-xl font-light">
            {dict.hero.subtitle}
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3} direction="bottom" className="px-4 z-20">
          <div className="cta pt-4">
            <Link
              className="hover:cursor-pointer flex justify-center bg-[#97D731] px-14 py-4 rounded-lg hover:scale-[1.05] transition-all duration-150 ease-in"
              href={`https://app.trainody.com/${lang}/sign-up`}
            >
              <span className="text-[#282828] font-semibold text-base">
                {dict.hero.ctaButtonText}
              </span>
            </Link>
          </div>
        </AnimatedText>

      </div>
    </section>
  );
};

export default Hero;
