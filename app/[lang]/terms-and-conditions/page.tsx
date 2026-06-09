import TermsAndConditionsEN from "@/components/t&c-en"
import TermsAndConditionsIT from "@/components/t&c-it"
import LegalShell from "@/components/legal-shell"
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
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang: rawLang } = await params
    const lang = rawLang === 'en' ? 'en' : 'it'
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
  params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    return(
        <LegalShell lang={lang}>
            {lang == 'it' ? <TermsAndConditionsIT /> : <TermsAndConditionsEN />}
        </LegalShell>
    )
}