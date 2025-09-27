import PrivacyPolicyEN from '@/components/privacy-policy-en'
import PrivacyPolicyIT from '@/components/privacy-policy-it'
import React from 'react'

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
