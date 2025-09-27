'use client'

import { MessageSquareCode } from "lucide-react"
import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "@/context/translation-context";

const TestimonialGrid = ({
    lang
}: {
    lang: string
}) => {

    const dict = useTranslations()

    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const reviews = [
        {
          name: "Giovanni",
          username: "@jack",
          body: "Ora posso gestire tutti i miei clienti comodamente dal mio tablet ",
          img: "https://avatar.vercel.sh/jack"
        },
        {
          name: "Marco",
          username: "@jill",
          body: "Trainody è stata una svolta per la mia attività di coach",
          img: "https://avatar.vercel.sh/jill",
        },
        {
          name: "Rocco",
          username: "@john",
          body: "Consigliato! Non so come ho fatto a stare senza fino ad oggi",
          img: "https://avatar.vercel.sh/john",
        }
    ];

    const displayedItems = showAll ? reviews : reviews.slice(0, 6);

    return(
        <section className="relative max-w-6xl mx-auto flex w-full flex-col items-center justify-center py-24 p-6">

            <div className="px-14 w-full flex flex-col items-center justify-items-center py-8">
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <MessageSquareCode className="size-5" />
                    <span className="text-foreground text-sm">{dict.reviews.badge_text}</span>
                </div>
                
                <div className="mt-4 flex flex-col">
                    <h2 className="text-4xl font-medium text-balance text-center tracking-tight">{dict.reviews.title}</h2>
                    <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                        {dict.reviews.subtitle}
                    </p>
                </div>
            </div>
            
            <div className="grid w-full grid-cols-1 py-10 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {
                    displayedItems.map((review: any, i: number) => (
                        <div key={i} className="rounded-lg bg-[#1A1A1A] ring-1 ring-primary/20 text-card-foreground flex flex-col justify-between">
                            <div className="p-6">
                                <span className="text-muted">{review.body}</span>
                            </div>

                            <div className="p-6 pt-0 flex flex-row items-center gap-3">
                                <img className="overflow-hidden rounded-full" width="40" height="40" src={review.img} alt="profile_image" />
                                <div className="text-sm font-medium text-muted">{review.name}</div>
                            </div>
                        </div>
                    ))
                }    
            </div>
            <div className="">
                {reviews.length > 6 && (
                    <div className="border bg-card-foreground/5 py-2 px-4 rounded-lg cursor-pointer" onClick={toggleShowAll}>
                        {showAll ? (
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EE651A" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <span className="text-sm">{dict.common.show_less}</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EE651A" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                                <span className="text-sm">{dict.common.show_all}</span>
                            </div>
                        )}
                    </div>
                )}            
            </div>
        </section>
    )
}    

export default TestimonialGrid