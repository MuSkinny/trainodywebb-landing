import { ChartSpline } from "lucide-react"
import Link from "next/link"

const Banner = ({
    lang
}: {
    lang: string
}) => {
    return(
        <div className="mx-auto py-4 w-full">
            <div className="bg-primary py-24 flex items-center justify-center">
                <div className="flex flex-col items-center gap-y-8">
                    {/*<div className="w-10 h-10 bg-white"></div>*/}
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <h3 className="text-base text-[#0F0F0F] font-light text-center">{lang == 'it' ? 'Pronto a rivoluzionare il tuo modo di allenare?' : 'Are you ready to revolutionize your way of training?'}</h3>
                        <p className="text-3xl lg:text-4xl text-[#0F0F0F] font-semibold text-center">{lang == 'it' ? 'Inizia subito la tua prova gratuita' : 'Start your free trial now'}</p>
                    </div>
                    

                    <Link
                        href={`https://app.trainody.com/${lang}/sign-up`} 
                        id="cta" className="px-14 py-3  gap-x-2 cursor-pointer bg-[#0F0F0F] text-white rounded-lg flex items-center justify-center">
                        <span>{lang == 'it' ? 'Inizia' : 'Join'}</span>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Banner