import { CalendarCheck2, Play, Sparkles, UsersRound } from "lucide-react";
import RetroGrid from "./ui/retro-grid";
import ScrollReveal from "./animations/scroll-reveal";
import { Calendar } from "./ui/calendar";
import Iphone15Pro from "./ui/iphone-15-pro";
import { AnimatedListComp } from "./animated-list-comp";
import { getDictionary } from "@/lib/dictionary";


const BentoFeatures = async ({
  lang
}: {
  lang: string
}) => {

  if(!lang || lang !== 'it' && lang !== 'en') return
  const dict = await getDictionary(lang)

  return (
    <section className="w-full flex flex-col gap-y-14 pb-24 pt-32" id="funzioni">

    <ScrollReveal delay={0.2}>
        <div className="lg:px-14 w-full flex flex-col items-center justify-items-center pt-8">            
            <div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                <Sparkles className="size-5" />
                <span className="text-foreground text-sm">{dict.features.badge_text}</span>
            </div>
               
            
            
            <div className="mt-4 flex flex-col ">
                <h2 className="text-3xl lg:text-4xl font-medium text-balance text-center tracking-tight">
                  {dict.features.title}
                </h2>
                <p className="max-w-3xl text-pretty text-center text-muted-foreground md:text-lg">
                  {dict.features.subtitle}
                </p>
            </div>
            
        </div>
    </ScrollReveal>
    
    <div className="mx-auto mt-4 grid max-w-lg p-2 grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {/* features */}
        
        <div className="group relative flex flex-col justify-between items-start overflow-hidden p-6 rounded-lg bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out ">
            {/* card title */}
            <div className="flex flex-col items-start justify-center gap-2 pb-2">
                <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {dict.features.handle_clients}
                </h3>
                <p className="text-muted-foreground">
                  {dict.features.handle_clients_desc}
                </p>
                </div>
                {/* <p className="max-w-xl text-pretty text-muted-foreground">Description</p> */}
            </div>
            
            <div className="w-10 h-10 border mt-4 rounded-md flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
              <UsersRound className="size-5" fill="#fff" stroke="#fff" />
            </div>
            <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>
        
  
        <div className="group relative flex flex-col justify-between items-start overflow-hidden p-6 rounded-lg bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out ">
          {/* card title */}
          <div className="flex flex-col items-start justify-center gap-2">
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {dict.features.custom_workout}
              </h3>
              <p className="text-muted-foreground">
                {dict.features.custom_workout_desc}
              </p>
            </div>
          </div>

          {/* image */}
          <div className="w-10 h-10 border rounded-md mt-4 flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
              <CalendarCheck2 className="size-5"  stroke="#9C9C9C" />
          </div>
          <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>
        
        
        <div className="group relative items-start min-h-72 overflow-hidden pt-6 rounded-lg md:row-span-2 bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out ">
            <div className="flex flex-col items-start justify-center gap-2  px-6">
                <h3 className="font-semibold mb-2 text-primary">
                  {dict.features.calendar}
                </h3>
                <p className="text-muted-foreground">
                  {dict.features.calendar_desc}
                </p>
            </div>
            <Calendar
              mode="single"
              selected={new Date()}
              className="absolute right-0 mt-4 lg:mt-10 -mr-1 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />

            <div className="absolute bottom-0 right-0 h-64 w-full p-0 bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>
        
        
        <div className="group relative flex flex-col justify-between items-start overflow-hidden p-6 rounded-lg order-4 md:col-span-2 xl:order-none bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out">
          {/* card title */}
          <div className="flex flex-col items-start justify-center gap-2 ">
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {dict.features.exercises}
              </h3>
              <p className="text-muted-foreground">
              {dict.features.exercises_desc}
              </p>
            </div>
            {/* <p className="max-w-xl text-pretty text-muted-foreground">Description</p> */}
          </div>
          {/* image */}
          
          <div className="w-10 h-10 mt-4 border rounded-md flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
            <Play className="size-5" fill="#fff" stroke="#fff" />
          </div>
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>

        <div className="group relative items-start overflow-hidden pt-6 rounded-lg md:row-span-2 bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out ">
            <div className="flex flex-col items-start justify-center gap-2  px-6">
                <h3 className="font-semibold mb-2 text-primary">
                  {dict.features.chat}
                </h3>
                <p className="text-muted-foreground">
                  {dict.features.chat_desc}
                </p>
            </div>
            <div className="h-full">
              <AnimatedListComp />
            </div>
            
            <div className="absolute bottom-0 right-0 h-64 w-full p-0 bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>

        <div className="group relative flex flex-col justify-between items-start overflow-hidden p-6 rounded-lg order-4 md:col-span-2 xl:order-none bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out">
          {/* card title */}
          <div className="flex flex-col items-start justify-center gap-2 p-2">
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {dict.features.payment}
              </h3>
              <p className="text-muted-foreground">
              {dict.features.payment_desc}
              </p>
            </div>
            {/* <p className="max-w-xl text-pretty text-muted-foreground">Description</p> */}
          </div>
          {/* image */}
          <div className="flex items-center pt-2 gap-2">
              <div className="w-10 h-10 border rounded-md flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff" className="size-6"><title>MasterCard</title><path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z"/></svg>
              </div>
              <div className="w-10 h-10 border rounded-md flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-6" fill="#fff"><title>Visa</title><path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/></svg>
              </div>
              <div className="w-10 h-10 border rounded-md flex items-center justify-center bg-gradient-to-t from-black/80 to-black">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff" className="size-6"><title>PayPal</title><path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/></svg>
              </div>
              
            </div>
          
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>

        <div className="group relative items-start overflow-hidden p-6 rounded-lg z-10 flex-row order-4 md:col-span-2 md:flex-row xl:order-none bg-[#1A1A1A] ring-1 ring-primary/20 transition-all duration-500 ease-out">
          {/* card title */}
          <div className="flex flex-col items-start justify-center gap-2 p-2">
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {dict.features.app}
              </h3>
              <p className="text-muted-foreground w-1/2 pr-4 pb-4">
              {dict.features.app_desc}
              </p>
            </div>
            {/* <p className="max-w-xl text-pretty text-muted-foreground">Description</p> */}
          </div>
          {/* image */}
          
          <Iphone15Pro height={270} className="absolute pb-10 top-8 z-0 -right-48 lg:right-0 opacity-50" />
          <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral-800 pointer-events-none"></div>
        </div>


      </div>
    </section>
  );
};

export default BentoFeatures;
