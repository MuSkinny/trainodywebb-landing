import { Banknote } from "lucide-react"
import ButtonCheckout from "./button-checkout"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { plans } from "@/lib/plans"

const Pricing = async ({
    lang
}: {
    lang: string
}) => {

    if(!lang || lang !== 'it' && lang !== 'en') return

    const dict = await getDictionary(lang)

    return(
        <section className="w-full flex flex-col justify-center" id="pricing">
            <div className="px-14 w-full flex flex-col items-center justify-items-center  pt-8 pb-20">
                <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
                    <Banknote className="size-4 text-primary" />
                    <span className="text-foreground text-xs uppercase tracking-wider">{dict.pricing.badge_text}</span>
                </div>

                <h2 className="mt-5 font-display text-3xl uppercase lg:text-5xl text-balance text-center tracking-tight">{dict.pricing.title}</h2>
                <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                    {dict.pricing.subtitle}
                </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-4">
                <div className="flex p-6 flex-col lg:flex-row w-full lg:flex-wrap lg:items-center md:justify-center gap-8 lg:gap-4">
                    
                    {
                        plans.map((plan: any, i: number) => (
                            <div className={`${plan.bestSeller ? 'bg-gradient-to-b from-primary to-primary/85 text-[#0C0C0D] shadow-glow-lg' : 'bg-surface text-foreground ring-1 ring-border'} relative flex min-h-[550px] grow basis-[26rem] flex-col justify-between rounded-2xl px-7 py-6 md:grow-0 md:px-9 md:py-7`} key={i}>
                                {
                                    plan.bestSeller && <div className="inline-flex items-center text-xs absolute right-8 top-0 -translate-y-1/2 rotate-3 rounded-full bg-[#0C0C0D] px-4 py-1.5 font-display uppercase tracking-wide text-primary shadow-lg">🔥 Bestseller</div>
                                }

                                <div>
                                    <span className="text-sm uppercase tracking-wider opacity-70">{plan.name}</span>
                                    <p className="relative flex items-end gap-1 py-5 md:py-7">
                                        <span className="font-display text-4xl md:text-5xl">{lang == 'it' ? plan.price : plan.price_en}</span>
                                        { plan.oldPrice && <span className="ml-3 text-lg font-medium line-through opacity-45 md:text-3xl">{plan.oldPrice}</span>}
                                        {i !== 0 && <span>/{dict.common.month}</span> }
                                    </p>
                                </div>

                                <div className="mb-auto flex flex-col gap-3">
                                    {
                                        plan.features.map((feature: any, i: number) => (
                                            <div className={`flex items-center gap-3 ${feature.check ? '': 'opacity-30'}`} key={i}>
                                                { feature.check ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                    </svg>)
                                                    : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                      </svg>
                                                )}
                                                <span className="text-balance">
                                                    <span className="mr-1">{lang == 'it' ? feature.title : feature.title_en}</span>
                                                </span>
                                            </div>
                                        ))
                                    }
                                    
                                </div>

                                <div className="w-full">
                                    {
                                        plan.name == "Basic" && <a 
                                            href={process.env.REGISTER_LINK!}
                                            className={`flex justify-center px-4 py-3 rounded-lg font-display uppercase text-sm tracking-wide transition-transform hover:scale-[1.02] ${plan.bestSeller ? 'bg-[#0C0C0D] text-primary': 'bg-primary text-primary-foreground'} `}>
                                            <span className="text-center">{dict.pricing.try}</span>
                                        </a>
                                        
                                    }
                                    {
                                        plan.name == "Pro" && <a 
                                            href={`${process.env.REGISTER_LINK!}?plan=pro`}
                                            className={`flex justify-center px-4 py-3 rounded-lg font-display uppercase text-sm tracking-wide transition-transform hover:scale-[1.02] ${plan.bestSeller ? 'bg-[#0C0C0D] text-primary': 'bg-primary text-primary-foreground'} `}>
                                            <span className="text-center">{dict.pricing.try}</span>
                                        </a>
                                        
                                    }
                                    {
                                        plan.name == "Business" && <a 
                                            href={`${process.env.REGISTER_LINK!}?plan=business`}
                                            className={`flex justify-center px-4 py-3 rounded-lg font-display uppercase text-sm tracking-wide transition-transform hover:scale-[1.02] ${plan.bestSeller ? 'bg-[#0C0C0D] text-primary': 'bg-primary text-primary-foreground'} `}>
                                            <span className="text-center">{dict.pricing.try}</span>
                                        </a>
                                    }
                                    
                                </div>
                                    
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex max-w-md lg:max-w-3xl mx-auto w-full text-center flex-col items-center justify-center pt-14 gap-2">
                <span className="text-lg">{dict.pricing.contact_us}</span>
                <a 
                    href="mailto:info@trainody.com"
                    className="flex px-6 py-2 bg-primary rounded-lg text-black font-medium"
                >
                    {dict.pricing.contact}
                </a>
            </div>
        </section>
    )
}

export default Pricing