'use client'

import { CheckCheck, Rocket, ShieldX } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { useState } from "react"

const CompareSides = () => {
    
    const [activeTab, setActiveTab] = useState(0)

    return(
        <section className="w-full max-w-6xl mx-auto flex flex-col justify-center py-24">
            <div className="px-14 w-full flex flex-col items-center justify-items-center gap-6 py-8">
                <div className="flex items-center justify-center gap-2 rounded-xl border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <Rocket className="size-5" />
                    <span className="text-foreground text-sm">Inizia subito</span>
                </div>
                
                    <h2 className="text-4xl font-medium text-balance text-center tracking-tight">Scopri tutti i vantaggi</h2>
            </div>

            <div className="w-full flex flex-col items-center justify-center ">
                
                {/* tab picker */}
                <div className="p-1 bg-gray-300 max-w-sm w-full rounded-full flex ">
                    <div    
                        onClick={() => setActiveTab(0)} 
                        className={`${activeTab == 0 ? 'bg-primary text-black': 'text-white'} p-4 w-1/2 flex items-center justify-center rounded-full cursor-pointer`}>
                        <span>Senza Trainody</span>    
                    </div>
                    <div
                        onClick={() => setActiveTab(1)} 
                        className={`${activeTab == 1 ? 'bg-primary text-black':'text-white'} p-4 w-1/2 flex items-center justify-center rounded-full cursor-pointer`}>
                        <span>Con Trainody</span>    
                    </div>
                </div>

                <div className="w-full grid lg:grid-cols-2 py-14 min-h-[300px]">
                    {
                        activeTab == 0 ? (
                            <div className="w-full flex">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4">
                                        <ShieldX className="size-6" />
                                        <span>Ore spese preparando schede</span>

                                    </div>
                                    
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex">
                            <div className="flex flex-col gap-y-4">
                                <div className="flex items-center gap-2">
                                    <CheckCheck className="size-6"/>
                                    <span className="">Zero pacchi persi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCheck className="size-6"/>
                                    <span className="">Tool gratuito</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCheck className="size-6"/>
                                    <span className="">Consulente dedicato</span>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    
                    
                </div>
            </div>
            
    </section>
    )
}

export default CompareSides