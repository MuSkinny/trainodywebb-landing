import PrivacyPolicyEN from '@/components/privacy-policy-en'
import PrivacyPolicyIT from '@/components/privacy-policy-it'
import LegalShell from '@/components/legal-shell'
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
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang: rawLang } = await params
    const lang = rawLang === 'en' ? 'en' : 'it'
    return buildMetadata({
        lang,
        path: '/privacy-policy',
        title: meta[lang].title,
        description: meta[lang].description,
    })
}

export default async function PrivacyPolicy({
    params
}: {
    params: Promise<{ lang: string }>
}) {

    const { lang } = await params

    return (
        <LegalShell lang={lang}>
            {lang == 'it' ? <PrivacyPolicyIT /> : <PrivacyPolicyEN />}
        </LegalShell>
    )
}
