
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header/floating-header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Banner from "@/components/banner";
import { TranslationsProvider } from "@/context/translation-context";
import { getDictionary } from "@/lib/dictionary";
import { SITE_URL } from "@/lib/seo";


export async function generateMetadata({
  params,
}: {
  params: { lang: "it" | "en" };
}): Promise<Metadata> {
  const lang = params.lang === "en" ? "en" : "it";
  return {
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      siteName: "Trainody",
      locale: lang === "it" ? "it_IT" : "en_US",
      images: [{ url: `/og-image-${lang}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`/og-image-${lang}.png`],
    },
  };
}

export async function generateStaticParams() {
  return ['it', 'en'].map((locale) => ({ lang: locale }))
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: 'it' | 'en' }
}) {

  const lang = params.lang
  // Verifica che lang sia definito
  if (!lang || (lang !== 'it' && lang !== 'en')) {
    return 
  }

  const dictionary = await getDictionary(lang)

  return (
    <TranslationsProvider dictionary={dictionary}>
    <html lang={lang} className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-[#0f0f0f] text-background">
        
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col  items-center">
              {/*<Header /> */}
              <div className="w-full overflow-x-hidden">
                {children}
              </div>
              <Banner lang={lang} />
              <Footer lang={lang} />
            </div>
          </main>
        
      </body>
    </html>
    </TranslationsProvider>
  );
}
