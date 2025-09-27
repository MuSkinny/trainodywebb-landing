import Link from "next/link"
import { ScrollImage } from "../animations/scroll-image"
import AnimatedText from "../AnimatedText"
import TestimonialAvatars from "../testimonials/TestimonialAvatars";
import { cookies } from "next/headers";
import { getDictionary } from "@/lib/dictionary";

const VerticalHero = async ({
    lang
}:{
    lang: any
}) => {
    
    const dict = await getDictionary(lang)

    return(
        <section className="max-w-6xl w-full mx-auto min-h-screen lg:min-h-[150vh] h-full py-8 lg:py-10 relative pb-24 bg-[#0f0f0f]">
            
            <div className="relative w-full mx-auto max-w-7xl flex flex-col gap-y-6 items-center z-10">

                <AnimatedText delay={0.3} direction="bottom">
                    <TestimonialAvatars lang={lang} />
                </AnimatedText>
                
                <AnimatedText delay={0.2} direction="bottom"> 
                    <h1 className="bg-gradient-to-b from-secondary-foreground to-primary-foreground bg-clip-text z-20 lg:leading-[60px] leading-8 font-bold text-2xl md:text-4xl lg:text-6xl flex flex-col items-center">
                        <span className="text-center max-w-4xl">{dict.hero.title}</span>
                    </h1>
                    <p className="mx-auto max-w-md lg:max-w-4xl text-sm lg:text-lg leading-relaxed text-center mt-3">
                        {dict.hero.subtitle}
                    </p>
                </AnimatedText>
            
                <AnimatedText delay={0.3} direction="bottom">
                    <div className="cta pt-8">
                        <Link 
                            className="flex justify-center bg-gradient-to-t from-primary to-primary/80 px-14 py-4 rounded-full hover:scale-[1.05] transition-all duration-150 ease-in" 
                            href={`https://app.trainody.com/${lang}/sign-up`}
                        >
                            <span className="text-[#0F0F0F] font-semibold text-base">{dict.hero.ctaButtonText}</span>
                        </Link>
                        
                    </div>
                </AnimatedText>

                <AnimatedText delay={0.6} direction="bottom" className="w-full ">
                    <ScrollImage />
                </AnimatedText>
            </div>
        </section>
    )
}

export default VerticalHero