'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from './ui/progress';

const ProgressBar = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 70); // 70ms * 100 steps = 7000ms (7 seconds)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Progress value={progress} className='w-full' />
  );
};


const TabbedProgress = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = ["tab1", "tab2", "tab3"];

  const handleComplete = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-transparent">
        <TabsTrigger value="tab1" className='flex flex-col gap-y-4'>
            <span>Tab 1</span>
             
        </TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      
      {tabs.map((tab) => (
        <>
        
        <TabsContent key={tab} value={tab}>
            <div className='bg-red-500'>
                <h2 className="text-lg font-semibold mb-2">Contenuto {tab.charAt(tab.length - 1)}</h2>
                <ProgressBar onComplete={handleComplete} />  
          </div>
          
        </TabsContent>
        </>
      ))}
    </Tabs>
  );
};

export default TabbedProgress;