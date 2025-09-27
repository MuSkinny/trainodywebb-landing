import type { Metadata } from 'next'
import { useRouter } from 'next/navigation';

export const generateMetadata = (params: Metadata) : Metadata => {

    const canonicalUrl = `https://yourdomain.com`;

    const title = params.title
    const description = params.description
    const keywords = params.keywords //['parola chiave1', 'parola chiave2', 'parola chiave3']
    const author = params.authors
    
    const og_title = params.openGraph?.title
    const og_description = params.openGraph?.description
    const og_images = params.openGraph?.images //['https://yourdomain.com/og-image.jpg'],

    const tw_title = params.twitter?.title
    const tw_description = params.twitter?.description
    const tw_images = params.twitter?.images //['https://yourdomain.com/twitter-image.jpg'],

    return {
        title: title,
        description: description,
        keywords: keywords,
        authors: author,
        
        openGraph: {
            type: "website",
            url: canonicalUrl,
            title: og_title,
            description: og_description,
            images: og_images
        },

        twitter: {
            card: 'summary_large_image',
            title: tw_title,
            description: tw_description,
            images: tw_images
        },
        viewport: "width=device-width, initial-scale=1",
        robots: "index, follow"    
        
    }
}