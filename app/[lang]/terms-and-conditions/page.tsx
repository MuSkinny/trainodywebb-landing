import TermsAndConditionsEN from "@/components/t&c-en"
import TermsAndConditionsIT from "@/components/t&c-it"
import { buildMetadata } from "@/lib/seo"
import type { Metadata } from "next"

const meta = {
    it: {
        title: "Termini e condizioni — Trainody",
        description: "I termini e le condizioni d'uso della piattaforma Trainody.",
    },
    en: {
        title: "Terms & Conditions — Trainody",
        description: "The terms and conditions for using the Trainody platform.",
    },
}

export async function generateMetadata({
    params,
}: {
    params: { lang: 'it' | 'en' }
}): Promise<Metadata> {
    const lang = params.lang === 'en' ? 'en' : 'it'
    return buildMetadata({
        lang,
        path: "/terms-and-conditions",
        title: meta[lang].title,
        description: meta[lang].description,
    })
}

export default async function TermsCondition({
    params
}: {
  params: { lang: 'it' | 'en' }
}) {
    const lang = params.lang
    return(
        <>
        {
            lang == 'it' ? <TermsAndConditionsIT /> : <TermsAndConditionsEN />
        }
        </>
    )
}