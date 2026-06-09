import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const paths = ["", "/privacy-policy", "/terms-and-conditions"];
const langs = ["it", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      alternates: {
        languages: {
          it: `${SITE_URL}/it${path}`,
          en: `${SITE_URL}/en${path}`,
          "x-default": `${SITE_URL}/it${path}`,
        },
      },
    }))
  );
}
