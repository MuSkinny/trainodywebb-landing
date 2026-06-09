import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./header/floating-header";

const LegalShell = ({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) => {
  const it = lang === "it";

  return (
    <div className="relative min-h-screen bg-background">
      <Header lang={lang} />

      {/* atmosfera coerente con hero/bento */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-grid-tech [background-size:46px_46px] opacity-[0.22] [mask-image:radial-gradient(60%_100%_at_50%_0%,#000,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 bg-lime-mesh" />

      <div className="relative mx-auto max-w-4xl px-4 pt-28 md:pt-32">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {it ? "Torna alla home" : "Back to home"}
        </Link>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default LegalShell;
