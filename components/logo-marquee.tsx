import { getDictionary } from "@/lib/dictionary";
import Marquee from "./ui/marquee";

const LogoMarquee = async ({
  lang
}:{
  lang: any
}) => {
    const dict = await getDictionary(lang)  
    return(
        <div className="relative flex  bg-primary w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:20s] filter grayscale">
            
              <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-black font-extrabold uppercase">{dict.marquee.text}</h3>
              </div>
              <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-black font-extrabold uppercase">{dict.marquee.text}</h3>
              </div>
              <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-black font-extrabold uppercase">{dict.marquee.text}</h3>
              </div>
              <div className="h-20 flex items-center justify-center">
                <h3 className="text-xl text-black font-extrabold uppercase">{dict.marquee.text}</h3>
              </div>
            </Marquee>
        {/*
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-foreground dark:from-background2"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-foregound dark:from-background2"></div>
        */}
    </div>
    )
}

export default LogoMarquee