import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react"


interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    icon?: ReactNode;
    className?: string; // Per classi aggiuntive
  }

const SectionBadge = ({text, icon, className}: BadgeProps) => {
    return(
        <div className={cn("flex items-center justify-center gap-2 rounded-xl border border-foreground/15 bg-card px-3 py-1.5 text-foreground/90 shadow-sm", className) }>
            {icon}
            <span className="text-foreground text-sm">{text}</span>
        </div>
    )
}

export default SectionBadge