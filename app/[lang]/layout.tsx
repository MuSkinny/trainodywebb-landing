
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header/floating-header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Banner from "@/components/banner";
import { TranslationsProvider } from "@/context/translation-context";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Trainody - La soluzione migliore per i personal trainer",
  description: "Tieni traccia delle schede dei tuoi clienti, monitora i loro progressi e risolvi ogni loro dubbio grazie a Trainody",
  openGraph: {
    description: "Tieni traccia delle schede dei tuoi clienti, monitora i loro progressi e risolvi ogni loro dubbio grazie a Trainody"
  }
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
      <Head>
        {/* Aggiunge un link preload per l'immagine */}
        <link
          rel="preload"
          href="../../public/assets/img_body.png"  // Sostituisci con il path della tua immagine
          as="image"
          type="image/png"
        />
      </Head>
      <body className="bg-[#0f0f0f] text-background">
        
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col  items-center">
              {/*<Header /> */}
              <div className="w-full overflow-x-hidden">
                {children}
              </div>
              <Banner lang={lang} />
              <Footer />
            </div>
          </main>
        
      </body>
    </html>
    </TranslationsProvider>
  );
}
