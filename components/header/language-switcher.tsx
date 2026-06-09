"use client";

import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const locales = [
  { code: "it", label: "Italiano", short: "IT" },
  { code: "en", label: "English", short: "EN" },
];

const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (code: string) => {
    if (code === lang) return;
    const segments = pathname.split("/");
    // segments[1] è il locale corrente (segments[0] è "")
    segments[1] = code;
    router.push(segments.join("/") || `/${code}`);
  };

  const current = locales.find((l) => l.code === lang) ?? locales[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground focus:outline-none">
        <Globe className="size-4" />
        {current.short}
        <ChevronDown className="size-3.5 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[9rem] border-border bg-surface"
      >
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchTo(l.code)}
            className="flex cursor-pointer items-center justify-between focus:bg-primary/10 focus:text-foreground"
          >
            {l.label}
            {l.code === lang && <Check className="size-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
