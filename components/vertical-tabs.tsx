'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from './ui/progress';
import { MessageCircleQuestion } from 'lucide-react';

import AutoRotatingTabs from './responsive-tab';

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
    <Progress value={progress} className={` ${orientation == "vertical" ? 'rotate-90 w-14': 'w-full'}`} />
  );
};

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = ["tab1", "tab2", "tab3"];
  const scrollContainerRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(tabs.indexOf(activeTab));

    const handleComplete = () => {
        //const currentIndex = tabs.indexOf(activeTab);
        setCurrentIndex(tabs.indexOf(activeTab))
        const nextIndex = (tabs.indexOf(activeTab) + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
    }


    /*
    useEffect(() => {
        
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const nextIndex = (currentIndex + 1) % tabs.length;
                scrollContainerRef.current.scrollTo({
                    left: nextIndex * scrollContainerRef.current.offsetWidth,
                    behavior: 'smooth'
                });
                setCurrentIndex(nextIndex);
            }
        }

            const intervalId = setInterval(handleScroll, 5000);
        
        return () => clearInterval(intervalId);
    }, [currentIndex]);
    */


  return (
    <section className="w-full flex flex-col justify-center">
            <div className="px-14 w-full flex flex-col items-center justify-items-center gap-6 py-8">
                <div className="flex items-center justify-center gap-2 rounded-xl border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <MessageCircleQuestion className="size-5" />
                    <span className="text-foreground text-sm">Come funziona?</span>
                </div>
                
                    <h2 className="text-4xl font-medium text-balance text-center tracking-tight">Bastano pochi click</h2>
                    <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                    SOS FBA individua, monitora e chiede il rimborso ad Amazon consentendoti di guadagnare per ogni errore logistico FBA individuato
                    </p>
            </div>
            <Tabs orientation='vertical' value={activeTab} onValueChange={setActiveTab} className="hidden lg:grid w-full h-full py-24 lg:grid-cols-2 bg-transparent">
                <TabsList className="flex flex-col gap-y-10 items-start pl-4 bg-transparent h-full">
                    {tabs.map((tab) => (
                    <TabsTrigger key={tab} value={tab} className="flex justify-center h-14 items-center ">
                        
                        <ProgressBar 
                            isActive={activeTab === tab} 
                            onComplete={handleComplete}
                            orientation='vertical'
                        />
                        <div className='flex items-center gap-x-4 w-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div className='flex flex-col items-start' >
                                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                <p className='break-words'>Descrizoine delle cose tante tante </p>
                                
                            </div>
                            
                        </div>
                        
                    </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent key={tab} value={tab}>
                        <h2 className="text-lg font-semibold mb-2">Contenuto {tab.charAt(tab.length - 1)}</h2>
                        <p>Questo è il contenuto del {tab}.</p>
                    </TabsContent>
                ))}
            </Tabs>

            <div className='w-full lg:hidden'>
                {/* <AutoRotatingTabs /> */}
            </div>
            {/*
            <Tabs orientation='horizontal' value={activeTab} onValueChange={setActiveTab} className="lg:hidden bg-transparent">
                <TabsList 
                    ref={scrollContainerRef}
                    style={{ scrollSnapType: 'x mandatory' }}
                    className="flex w-full snap-x snap-mandatory scrollbar-hide overflow-x-auto ">
                    {tabs.map((tab) => (
                    <TabsTrigger 
                        style={{ scrollSnapAlign: 'center' }}
                        key={tab} value={tab} className="flex flex-col h-14 items-center ">
                        
                        <ProgressBar 
                            isActive={activeTab === tab} 
                            onComplete={handleComplete}
                            
                        />
                        <div className='flex items-center gap-x-4 w-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div className='flex flex-col items-start' >
                                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                                <p className='break-words'>Descrizoine delle cose tante tante </p>
                                
                            </div>
                            
                        </div>
                        
                    </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent key={tab} value={tab}>
                        <h2 className="text-lg font-semibold mb-2">Contenuto {tab.charAt(tab.length - 1)}</h2>
                        <p>Questo è il contenuto del {tab}.</p>
                    </TabsContent>
                ))}
            </Tabs>
            */}
             
    </section>
  );
};

export default VerticalTabs;