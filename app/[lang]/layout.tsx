
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});
import Header from "@/components/header/floating-header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Banner from "@/components/banner";
import { TranslationsProvider } from "@/context/translation-context";
import { getDictionary } from "@/lib/dictionary";
import { SITE_URL } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "it";
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
  params: Promise<{ lang: string }>
}) {

  const { lang } = await params
  // Verifica che lang sia definito
  if (!lang || (lang !== 'it' && lang !== 'en')) {
    return 
  }

  const dictionary = await getDictionary(lang)

  return (
    <TranslationsProvider dictionary={dictionary}>
    <html
      lang={lang}
      className={`dark ${archivo.variable} ${archivoBlack.variable} ${archivo.className}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans">
        
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

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
    </TranslationsProvider>
  );
}
