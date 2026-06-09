import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trainody.com";

type Lang = "it" | "en";

type BuildMetadataParams = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
};

export function buildMetadata({
  lang,
  path,
  title,
  description,
}: BuildMetadataParams): Metadata {
  const canonical = `${SITE_URL}/${lang}${path}`;
  const languages = {
    "it-IT": `${SITE_URL}/it${path}`,
    en: `${SITE_URL}/en${path}`,
    "x-default": `${SITE_URL}/it${path}`,
  };
  const ogLocale = lang === "it" ? "it_IT" : "en_US";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Trainody",
      title,
      description,
      url: canonical,
      locale: ogLocale,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}
