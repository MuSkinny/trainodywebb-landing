import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { MessageSquareCode, Sparkles } from "lucide-react";

const reviews = [
    {
      name: "Online E Non Solo SRL",
      username: "@jack",
      body: "Appena iscritto e già recuperato un sacco di prodotti arretrati. Grazie!",
      img: "https://avatar.vercel.sh/jack"
    },
    {
      name: "Egc",
      username: "@jill",
      body: "Usiamo il software da mesi, assolutamente consigliato per chi vende su Amazon",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Rocco Tamara",
      username: "@john",
      body: "Consigliato! Per ora ho avuto solo guadagno",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Atlantik SRL",
      username: "@jane",
      body: "Ogni giorno Amazon mi commette errori logistici per decine di euro, ogni mese riesco a recuperare dai 400 ai 500 euro senza fare niente. il software fa tutto al posto mio, l'unica pecca è averlo scoperto troppo tardi",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Mowtech di Walter Bonifazi",
      username: "@jenny",
      body: "Vendere su Amazon è facile, ma recuperare i soldi è un’altra cosa. Grazie a voi ho recuperato un sacco di soldi",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Business Development & Strategy",
      username: "@james",
      body: "Sosfba.it è un servizio eccellente, che consiglio a tutti i venditori su Amazon",
      img: "https://avatar.vercel.sh/james",
    },
    {
        name: "MP TRADING SL",
        username: "@james",
        body: "Consigliato per chi vende su Amazon",
        img: "https://avatar.vercel.sh/james",
      },
      {
        name: "ONLY BIG BRANDS",
        username: "@james",
        body: "Grande servizio, grazie!",
        img: "https://avatar.vercel.sh/james",
      },
  ];

const TestimonialsMarquee = () => {
    return(
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
            <div className="px-14 w-full flex flex-col items-center justify-items-center gap-6 py-14">
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-3 py-1.5 text-foreground/90 shadow-sm">
                    <MessageSquareCode className="size-5" />
                    <span className="text-foreground text-sm">Recensioni</span>
                </div>
            </div>
            {/*<h3 className="text-center uppercase font-semibold text-sm text-gray-500 mb-8">Dicono di noi</h3>*/}
            <Marquee pauseOnHover className="[--duration:20s] gap-1">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}            
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}            
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    )
}



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-lg border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};


export default TestimonialsMarquee