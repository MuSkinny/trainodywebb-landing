import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getDictionary } from "@/lib/dictionary";
import { MessageCircleQuestion } from "lucide-react"

type FAQType = {
    question: string;
    response: string;
    question_en: string;
    response_en: string;
}

const FAQ = async ({
    lang
}: {
    lang: string
}) => {

    const faqs = [
        {
            question: `Cosa ottengo da Trainody?`,
            response: `Ottieni un portale dove poter gestire in totale autonomia e immediatezza i tuoi clienti. Stilare
            anamnesi, profili del cliente, piani di allenamento con spiegazioni e video esplicativi. A seconda del
            piano che selezionerai si avrà più o meno flessibilità e libertà di gestione dei propri clienti.`,
            question_en: "What do I get from Trainody?",
            response_en: "You get a portal where you can fully manage your clients independently and immediately. Create medical histories, client profiles, workout plans with explanations and explanatory videos. Depending on the plan you select, you'll have varying degrees of flexibility and freedom in managing your clients."
        },
        {
            question: `È possibile visionare in tempo reale l’andamento degli atleti?`,
            response: `Si. Offriamo un’applicazione mobile che consente agli atleti di segnare
            progressi, dubbi e video delle esecuzioni in modo da avere un contatto diretto coach-atleta,
            riducendo al massimo gli errori e massimizzando i risultati.`,
            question_en: "Is it possible to monitor athletes' progress in real-time?",
            response_en: "Yes. We offer a mobile application that allows athletes to log progress, questions, and execution videos to maintain direct coach-athlete contact, minimizing errors and maximizing results."
        },
        {
            question: `Posso provare Trainody gratis?`,
            response: `Si. E' possibile gestire gratuitamente fino ad un massimo di due clienti. Il piano gratuito è pensato per prendere dimistichezza con la piattaforma e capire se fa al caso tuo.`,
            question_en: "Can I try Trainody for free?",
            response_en: "Yes. You can manage up to two clients for free. The free plan is designed to help you familiarize yourself with the platform and determine if it's right for you."
        }
    ]

    if(!lang || lang !== "it" && lang !== "en") return
    const dict = await getDictionary(lang)

    return(
        <section id="faq" className="w-full flex flex-col pt-24 pb-24 px-6">
            <div className="px-14 w-full flex flex-col items-center justify-items-center py-8">
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <MessageCircleQuestion className="size-5" />
                    <span className="text-foreground text-sm">FAQ</span>
                </div>
                
                <h2 className="mt-4 text-3xl lg:text-4xl font-medium text-balance text-center tracking-tight">{dict.faq.title}</h2>
                <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                    {dict.faq.subtitle}
                </p>
            </div>

            <div className="w-full max-w-3xl mx-auto">
                
                {/**
                 * type can be 'single' or 'multiple'
                 * 
                 * single: only one accordion opened. need "collapsible" property (<Accordion type="single" collapsible></Accordion>)
                 * multiple: multiple accordion opened
                 */}
                <Accordion type="multiple" >
                    {
                        faqs.map((faq: FAQType, index: number ) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{lang == 'it' ? faq.question : faq.question_en}</AccordionTrigger>
                                <AccordionContent className="whitespace-pre-line">
                                    {lang == 'it' ? faq.response : faq.response_en}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }

                    
                </Accordion>
            </div>


        </section>
    )
}
  

export default FAQ