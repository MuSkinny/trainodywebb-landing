import { Banknote } from "lucide-react"
import ButtonCheckout from "./button-checkout"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"

const Pricing = async ({
    lang
}: {
    lang: string
}) => {
   
    if(!lang || lang !== 'it' && lang !== 'en') return 
    
    const dict = await getDictionary(lang)
    const plans = [
        {
            name: "Basic",
            price: "Gratis",
            price_en: "Free",
            oldPrice: "",
            bestSeller: false,
            features: [
                {
                    title: "Gestisci fino a 2 clienti",
                    title_en: "Manage up to 2 clients",
                    check: true
                },
                {
                    title: "Disdici in qualsiasi momento",
                    title_en: "Cancel anytime",
                    check: true
                },
                {
                    title: 'App Mobile (iOS / Android) per i clienti',
                    title_en: 'Mobile App (iOS / Android) for clients',
                    check: true
                },
                {
                    title: 'Chat Clienti',
                    title_en: 'Client Chat',
                    check: true
                },
                {
                    title: 'Gestione pagamenti online',
                    title_en: 'Online payment management',
                    check: false
                }
            ]
        },
        {
            name: "Pro",
            price: "€19.90",
            price_en: "€19.90",
            oldPrice: "",
            bestSeller: true,
            features: [
                {
                    title: "Gestisci fino a 20 clienti",
                    title_en: "Manage up to 20 clients",
                    check: true
                },
                {
                    title: "Disdici in qualsiasi momento",
                    title_en: "Cancel anytime",
                    check: true
                },
                {
                    title: 'App Mobile (iOS / Android) per i clienti',
                    title_en: 'Mobile App (iOS / Android) for clients',
                    check: true
                },
                {
                    title: 'Chat Clienti',
                    title_en: 'Client Chat',
                    check: true
                },
                {
                    title: 'Gestione pagamenti online',
                    title_en: 'Online payment management',
                    check: false
                }
            ]
        },
        {
            name: "Business",
            price: "€49.90",
            oldPrice: "",
            bestSeller: false,
            features: [
                {
                    title: "Gestisci fino a 50 clienti",
                    title_en: "Manage up to 50 clients",
                    check: true
                },
                {
                    title: "Disdici in qualsiasi momento",
                    title_en: "Cancel anytime",
                    check: true
                },
                {
                    title: 'App Mobile (iOS / Android) per i clienti',
                    title_en: 'Mobile App (iOS / Android) for clients',
                    check: true
                },
                {
                    title: 'Chat Clienti',
                    title_en: 'Client Chat',
                    check: true
                },
                {
                    title: 'Gestione pagamenti online',
                    title_en: 'Online payment management',
                    check: true
                }
            ]
        }
    ]

    return(
        <section className="w-full flex flex-col justify-center" id="pricing">
            <div className="px-14 w-full flex flex-col items-center justify-items-center  pt-8 pb-20">
                <div className="flex items-center justify-center gap-2 rounded-xl border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <Banknote className="size-5" />
                    <span className="text-foreground text-sm">{dict.pricing.badge_text}</span>
                </div>
                
                <h2 className="mt-4 text-3xl lg:text-4xl font-medium text-balance text-center tracking-tight">{dict.pricing.title}</h2>
                <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                    {dict.pricing.subtitle}
                </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-4">
                <div className="flex p-6 flex-col lg:flex-row w-full lg:flex-wrap lg:items-center md:justify-center gap-8 lg:gap-4">
                    
                    {
                        plans.map((plan: any, i: number) => (
                            <div className={`${plan.bestSeller ? 'bg-gradient-to-b from-primary to-primary/80 text-foreground' : 'bg-[#1A1A1A] text-white ring-inset ring-1 ring-primary/20'} text-card-foreground shadow-sm relative flex min-h-[550px] grow basis-[26rem] flex-col justify-between rounded-2xl px-7 py-6 md:grow-0 md:px-9 md:py-7`} key={i}>
                                {
                                    plan.bestSeller && <div className="inline-flex items-center text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent absolute right-8 top-0 -translate-y-1/2 rotate-6 rounded-full bg-[#1A1A1A] px-4 py-1.5 font-medium text-background shadow-lg">🔥 Bestseller</div>
                                }
                                
                                <div>
                                    <span className="text-xl">{plan.name}</span>
                                    <p className="relative flex items-end gap-1 py-5 md:py-7">
                                        <span className="text-3xl font-semibold md:text-4xl">{lang == 'it' ? plan.price : plan.price_en}</span>
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
                                            className={`flex justify-center px-4 py-2 rounded-lg ${plan.bestSeller ? 'bg-[#1A1A1A] text-background': 'bg-primary text-foreground'} `}>
                                            <span className="font-medium text-center ">{dict.pricing.try}</span>
                                        </a>
                                        
                                    }
                                    {
                                        plan.name == "Pro" && <a 
                                            href={`${process.env.REGISTER_LINK!}?plan=pro`}
                                            className={`flex justify-center px-4 py-2 rounded-lg ${plan.bestSeller ? 'bg-[#1A1A1A] text-background': 'bg-primary text-foreground'} `}>
                                            <span className="font-medium text-center ">{dict.pricing.try}</span>
                                        </a>
                                        
                                    }
                                    {
                                        plan.name == "Business" && <a 
                                            href={`${process.env.REGISTER_LINK!}?plan=business`}
                                            className={`flex justify-center px-4 py-2 rounded-lg ${plan.bestSeller ? 'bg-[#1A1A1A] text-background': 'bg-primary  text-foreground'} `}>
                                            <span className="font-medium text-center ">{dict.pricing.try}</span>
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
                    href="mailto:trainody@gmail.com"
                    className="flex px-6 py-2 bg-primary rounded-lg text-black font-medium"
                >
                    {dict.pricing.contact}
                </a>
            </div>
        </section>
    )
}

export default Pricing