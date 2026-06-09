// Unica fonte di verità per le FAQ.
// Importato sia da components/faq.tsx (UI) sia da components/json-ld.tsx (FAQPage JSON-LD).

export type FAQType = {
  question: string;
  response: string;
  question_en: string;
  response_en: string;
};

export const faqs: FAQType[] = [
  {
    question: `Cosa ottengo da Trainody?`,
    response: `Ottieni un portale dove poter gestire in totale autonomia e immediatezza i tuoi clienti. Stilare
            anamnesi, profili del cliente, piani di allenamento con spiegazioni e video esplicativi. A seconda del
            piano che selezionerai si avrà più o meno flessibilità e libertà di gestione dei propri clienti.`,
    question_en: "What do I get from Trainody?",
    response_en:
      "You get a portal where you can fully manage your clients independently and immediately. Create medical histories, client profiles, workout plans with explanations and explanatory videos. Depending on the plan you select, you'll have varying degrees of flexibility and freedom in managing your clients.",
  },
  {
    question: `È possibile visionare in tempo reale l’andamento degli atleti?`,
    response: `Si. Offriamo un’applicazione mobile che consente agli atleti di segnare
            progressi, dubbi e video delle esecuzioni in modo da avere un contatto diretto coach-atleta,
            riducendo al massimo gli errori e massimizzando i risultati.`,
    question_en: "Is it possible to monitor athletes' progress in real-time?",
    response_en:
      "Yes. We offer a mobile application that allows athletes to log progress, questions, and execution videos to maintain direct coach-athlete contact, minimizing errors and maximizing results.",
  },
  {
    question: `Posso provare Trainody gratis?`,
    response: `Si. E' possibile gestire gratuitamente fino ad un massimo di due clienti. Il piano gratuito è pensato per prendere dimestichezza con la piattaforma e capire se fa al caso tuo.`,
    question_en: "Can I try Trainody for free?",
    response_en:
      "Yes. You can manage up to two clients for free. The free plan is designed to help you familiarize yourself with the platform and determine if it's right for you.",
  },
];
