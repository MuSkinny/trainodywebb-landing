'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Progress } from './ui/progress';

const AutoRotatingTabs = () => {
  const tabs = [
    { id: 0, value: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 1, value: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 2, value: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tabs value={tabs[activeTab].value} className="w-full">
      <div className="w-full flex-col text-foreground p-4 rounded-md">
        {tabs[activeTab].label}
        <ProgressBar isActive={activeTab === tabs[activeTab].id} />
      </div>
      {tabs.map((tab, index) => (
        
        <TabsContent key={tab.value} value={tab.value} className={index === activeTab ? 'block' : 'hidden'}>
            
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AutoRotatingTabs;


const ProgressBar = ({ isActive, orientation = "horizontal" }: {
    isActive: boolean, orientation?: string }) => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // 50ms * 100 steps = 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Progress value={progress} className={` ${orientation == "vertical" ? 'rotate-90 w-14': 'w-full'}`} />
  );
};
