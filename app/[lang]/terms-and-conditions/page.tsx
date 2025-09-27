import TermsAndConditionsEN from "@/components/t&c-en"
import TermsAndConditionsIT from "@/components/t&c-it"

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