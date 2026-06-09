// Unica fonte di verità per i piani tariffari.
// Importato sia da components/pricing.tsx (UI) sia da components/json-ld.tsx (JSON-LD).
// Mantenere sincronizzati prezzi e feature qui.

export type PlanFeature = {
  title: string;
  title_en: string;
  check: boolean;
};

export type Plan = {
  name: string;
  price: string;
  price_en: string;
  // Prezzo numerico per i dati strutturati / offerte (valuta EUR).
  priceValue: number;
  oldPrice: string;
  bestSeller: boolean;
  features: PlanFeature[];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "Gratis",
    price_en: "Free",
    priceValue: 0,
    oldPrice: "",
    bestSeller: false,
    features: [
      {
        title: "Gestisci fino a 2 clienti",
        title_en: "Manage up to 2 clients",
        check: true,
      },
      {
        title: "Disdici in qualsiasi momento",
        title_en: "Cancel anytime",
        check: true,
      },
      {
        title: "App Mobile (iOS / Android) per i clienti",
        title_en: "Mobile App (iOS / Android) for clients",
        check: true,
      },
      {
        title: "Chat Clienti",
        title_en: "Client Chat",
        check: true,
      },
      {
        title: "Gestione pagamenti online",
        title_en: "Online payment management",
        check: false,
      },
    ],
  },
  {
    name: "Pro",
    price: "€19.90",
    price_en: "€19.90",
    priceValue: 19.9,
    oldPrice: "",
    bestSeller: true,
    features: [
      {
        title: "Gestisci fino a 20 clienti",
        title_en: "Manage up to 20 clients",
        check: true,
      },
      {
        title: "Disdici in qualsiasi momento",
        title_en: "Cancel anytime",
        check: true,
      },
      {
        title: "App Mobile (iOS / Android) per i clienti",
        title_en: "Mobile App (iOS / Android) for clients",
        check: true,
      },
      {
        title: "Chat Clienti",
        title_en: "Client Chat",
        check: true,
      },
      {
        title: "Gestione pagamenti online",
        title_en: "Online payment management",
        check: false,
      },
    ],
  },
  {
    name: "Business",
    price: "€49.90",
    price_en: "€49.90",
    priceValue: 49.9,
    oldPrice: "",
    bestSeller: false,
    features: [
      {
        title: "Gestisci fino a 50 clienti",
        title_en: "Manage up to 50 clients",
        check: true,
      },
      {
        title: "Disdici in qualsiasi momento",
        title_en: "Cancel anytime",
        check: true,
      },
      {
        title: "App Mobile (iOS / Android) per i clienti",
        title_en: "Mobile App (iOS / Android) for clients",
        check: true,
      },
      {
        title: "Chat Clienti",
        title_en: "Client Chat",
        check: true,
      },
      {
        title: "Gestione pagamenti online",
        title_en: "Online payment management",
        check: true,
      },
    ],
  },
];
