import React from 'react';
import { Button } from '@/components/ui/button';

import { CheckCircle2, Calendar, Users, ClipboardList, VideoIcon, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

const PricingCard = ({ title, price, features, isPopular }: {title: string, price: string, features: any, isPopular?: boolean}) => (
  <Card className={`w-full max-w-sm p-6 ${isPopular ? 'border-2 border-primary' : ''}`}>
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-3xl font-bold">{price}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature: any, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full">Inizia Ora</Button>
    </div>
  </Card>
);

const Feature = ({ icon: Icon, title, description }:{
    title: string, description: string, icon: any
}) => (
  <div className="flex flex-col items-center text-center space-y-3 p-4">
    <div className="p-3 bg-primary/10 rounded-full">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Gestisci i tuoi clienti come un vero professionista
            </h1>
            <p className="text-xl text-gray-600">
              La piattaforma all-in-one per personal trainer che semplifica la gestione dei clienti, 
              delle schede di allenamento e degli appuntamenti
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                Prova Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Scopri di più
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tutto ciò di cui hai bisogno</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature 
              icon={Users}
              title="Gestione Clienti"
              description="Traccia e gestisci i tuoi clienti in modo efficiente con profili dettagliati e analisi dei progressi"
            />
            <Feature 
              icon={ClipboardList}
              title="Schede Personalizzate"
              description="Crea e condividi schede di allenamento su misura per ogni cliente"
            />
            <Feature 
              icon={Calendar}
              title="Calendario Integrato"
              description="Gestisci appuntamenti e sessioni di allenamento in modo semplice e intuitivo"
            />
            <Feature 
              icon={VideoIcon}
              title="Video Esercizi"
              description="Biblioteca di video dimostrativi per garantire la corretta esecuzione degli esercizi"
            />
            <Feature 
              icon={CreditCard}
              title="Gestione Pagamenti"
              description="Accetta pagamenti e gestisci gli abbonamenti direttamente dalla piattaforma"
            />
            <Feature 
              icon={Smartphone}
              title="App Mobile"
              description="App dedicata per i tuoi clienti per tracciare allenamenti e visualizzare schede"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Piani e Prezzi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <PricingCard
              title="Start"
              price="Gratis"
              features={[
                "Fino a 2 clienti",
                "Gestione profili base",
                "Calendario appuntamenti",
                "App mobile per i clienti"
              ]}
            />
            <PricingCard 
              title="Pro"
              price="€29/mese"
              features={[
                "Fino a 15 clienti",
                "Gestione profili avanzata",
                "Video esercizi",
                "Gestione pagamenti",
                "Supporto prioritario"
              ]}
              isPopular={true}
            />
            <PricingCard 
              title="Business"
              price="€99/mese"
              features={[
                "Clienti illimitati",
                "Tutte le funzionalità Pro",
                "API personalizzate",
                "Onboarding dedicato",
                "Account manager"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Pronto a far crescere il tuo business?
            </h2>
            <p className="text-xl text-gray-600">
              Inizia oggi stesso con la prova gratuita e scopri come possiamo aiutarti 
              a gestire meglio i tuoi clienti
            </p>
            <Button size="lg" className="mt-4">
              Inizia Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
