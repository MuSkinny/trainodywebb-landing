import PrivacyPolicyEN from '@/components/privacy-policy-en'
import PrivacyPolicyIT from '@/components/privacy-policy-it'
import { buildMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import React from 'react'

const meta = {
    it: {
        title: 'Privacy Policy — Trainody',
        description: 'Come Trainody raccoglie, utilizza e protegge i tuoi dati personali.',
    },
    en: {
        title: 'Privacy Policy — Trainody',
        description: 'How Trainody collects, uses and protects your personal data.',
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
        path: '/privacy-policy',
        title: meta[lang].title,
        description: meta[lang].description,
    })
}

export default function PrivacyPolicy({
    params
}: {
    params: {lang: string}
}) {

    const lang = params.lang
    
    return (
        <>
        {
            lang == 'it' ? <PrivacyPolicyIT /> : <PrivacyPolicyEN />
        }
        </>
    )
}
