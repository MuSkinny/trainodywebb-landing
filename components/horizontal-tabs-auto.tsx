'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from './ui/progress';
import { MessageCircleQuestion } from 'lucide-react';
import SectionBadge from './section-badge';
import AutoScrollingCarousel from './carousel-tab';
import ScrollReveal from './animations/scroll-reveal';

const ProgressBar = ({ isActive, onComplete, orientation = "horizontal" }: {
    isActive: boolean, onComplete: () => void, orientation?: string }) => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          onComplete();
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // 50ms * 100 steps = 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  return (
    <Progress value={progress} className={` ${orientation == "vertical" ? 'rotate-90 w-14': 'w-3/4'}`} />
  );
};

const HorizontalTabsAuto = () => {
    const tabs = [
        {
            id: "tab1",
            title: "Inizia in 2 minuti",
            description: "Registrazione gratuita e zero rischi. Connetti il tuo account Amazon Seller con due clic e lascia che SoS FBA inizi a lavorare per te. Zero configurazioni complesse, zero tempo perso.",
            img: "./assets/dash_white.png"

        },
        {
            id: "tab2",
            title: "Monitoraggio 24/7",
            description: "Il nostro algoritmo scansiona ininterrottamente la tua inventory FBA, tracciando ongi singolo pacco, identificando danni non segnalati e rilevando discrepanze nell'inventario.",
            img: "./assets/dashboard.png"
        },
        {
            id: "tab3",
            title: "Automazione Totale",
            description: "Mentre dormi, SoS FBA invia richieste di rimborso e segue l'intero processo fino all'accredito",
            img: "./assets/dash_white.png"
        },
        {
            id: "tab4",
            title: "Formula Win-to-Win",
            description: "La nostra formula Win-to-Win significa: zero costi fissi, zero rischi, paghi solo una percentuale sui rimborsi ottenuti. Se non recuperi nulla non paghi nulla!",
            img: "./assets/dashboard.png"
        }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);
  
    const scrollContainerRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(tabs.findIndex((tab) => tab.id === activeTab));

    const handleComplete = () => {
        //const currentIndex = tabs.indexOf(activeTab);
        setCurrentIndex(tabs.findIndex((tab) => tab.id === activeTab))
        const nextIndex = (tabs.findIndex((tab) => tab.id === activeTab) + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
    }

    return (
        <section className="w-full flex flex-col justify-center pt-14 pb-44 mx-auto max-w-6xl">
                <ScrollReveal delay={0.2}>
                    <div className="lg:px-14 w-full flex flex-col items-center justify-items-center gap-6 py-8 p-4">
                        
                        <SectionBadge 
                            text='Come funziona?'
                            icon={<MessageCircleQuestion className="size-5" />}
                            className='bg-background2'
                        />
                        
                        <div className="flex flex-col gap-y-2">
                            <h2 className="max-w-4xl mx-auto w-full text-4xl font-medium text-balance text-center tracking-tight">La soluzione ai tuoi problemi</h2>
                            <p className="max-w-3xl mx-auto text-pretty text-center text-muted-foreground md:text-lg">
                            Dimentica le ore spese a cercare errori e compilare reclami. SoS FBA fa tutto al posto tuo, mentre tu ti concentri sulla crescita del business
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden lg:block w-full h-full py-10">
                    <TabsList className="flex flex-1 items-start bg-transparent w-full gap-x-4 h-full">
                        {tabs.map((tab) => (
                            <TabsTrigger key={tab.id} value={tab.id} className='w-full !flex !whitespace-normal !min-h-60 h-full items-start justify-center data-[state=active]:bg-[#161B27]'>
                                
                                <div className='px-1 !w-full !h-full flex flex-col items-center gap-y-2 '>
                                    <div className='flex flex-col h-full min-h-52'>
                                        <span className={`${activeTab === tab.id ? 'text-[#FA7315]':'text-foreground'} font-bold text-xl my-2`}>{tab.title}</span>
                                        <p>{tab.description}</p>
                                    </div>
                                    
                                    <ProgressBar 
                                        isActive={activeTab === tab.id} 
                                        onComplete={handleComplete}
                                        orientation='horizontal'
                                    />
                                </div>
                           
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    
                    <div className='h-[90vh] overflow-hidden'>
                    {tabs.map((tab) => (
                        <TabsContent key={tab.id} value={tab.id} className='col-span-1 pt-14'>
                            <img src={tab.img} alt='dash' className='rounded-xl' />
                        </TabsContent>
                    ))}
                    </div>
                </Tabs>

                <div className='w-full lg:hidden'>
                    <AutoScrollingCarousel /> 
                </div>
                
        </section>
    );
};

export default HorizontalTabsAuto;