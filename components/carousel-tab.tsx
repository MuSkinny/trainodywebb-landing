'use client'

import React, { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

import { Progress } from './ui/progress';

interface CarouselItem {
  id: number;
  content: string;
}

const items: CarouselItem[] = [
  { id: 0, content: "Slide 1" },
  { id: 1, content: "Slide 2" },
  { id: 2, content: "Slide 3" },
  { id: 3, content: "Slide 4" },
  { id: 4, content: "Slide 5" },
]

const durationSlide = 5000 //5s

export default function AutoScrollingCarousel(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (api) {
        if (current === items.length - 1) {
          api.scrollTo(0)
        } else {
          api.scrollNext()
        }
      }
    }, durationSlide)

    return () => clearInterval(intervalId)
  }, [api, current])

  return (
    <Carousel setApi={setApi} className="w-full max-w-xs">
      <CarouselContent>
        {items.map((item) => (
            <CarouselItem key={item.id}>
                <div className='flex flex-col'>
                   
                   <ProgressBar current={current === item.id} />
                </div>
                <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{item.content}</span>
                </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}


const ProgressBar = ({current}:{current: boolean}) => {
    const [progress, setProgress] = useState(0);
    

    

    useEffect(() => {

        if (!current) {
            setProgress(0);
            return;
        }

        
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 0
                }
                return prevProgress + 1;
            });
        }, (durationSlide)/100); // 50ms * 100 steps = 5000ms (5 seconds)

        return () => clearInterval(interval);
    }, [current]);

  return (
    <Progress value={progress} className={`w-full`} />
  );
};