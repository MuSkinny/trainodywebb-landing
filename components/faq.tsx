import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getDictionary } from "@/lib/dictionary";
import { faqs, type FAQType } from "@/lib/faqs";
import { MessageCircleQuestion } from "lucide-react"

const FAQ = async ({
    lang
}: {
    lang: string
}) => {

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