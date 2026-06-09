import {
  CalendarCheck2,
  Check,
  CreditCard,
  Dumbbell,
  MessageSquare,
  Smartphone,
  Sparkles,
  TrendingUp,
  UsersRound,
  Video,
} from "lucide-react";
import ScrollReveal from "./animations/scroll-reveal";
import { Calendar } from "./ui/calendar";
import { getDictionary } from "@/lib/dictionary";

const cardCls =
  "group relative flex flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-all duration-300 hover:ring-primary/40 hover:shadow-glow";

const CardHeader = ({
  Icon,
  title,
  desc,
}: {
  Icon: any;
  title: string;
  desc: string;
}) => (
  <div className="p-6 pb-4">
    <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
      <Icon className="size-[18px]" />
    </div>
    <h3 className="font-display text-base uppercase tracking-tight text-foreground">
      {title}
    </h3>
    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
  </div>
);

const BentoFeatures = async ({ lang }: { lang: string }) => {
  if (!lang || (lang !== "it" && lang !== "en")) return;
  const dict = await getDictionary(lang);
  const it = lang === "it";

  const clients = [
    { initials: "MR", name: "Marco R.", prog: 82 },
    { initials: "AB", name: "Anna B.", prog: 64 },
    { initials: "LG", name: "Luca G.", prog: 45 },
    { initials: "SF", name: "Sara F.", prog: 91 },
  ];

  const exercises = it
    ? [
        ["Panca piana", "4 × 10", true],
        ["Squat", "5 × 8", true],
        ["Stacco da terra", "3 × 12", true],
        ["Lat machine", "4 × 12", false],
      ]
    : [
        ["Bench Press", "4 × 10", true],
        ["Squat", "5 × 8", true],
        ["Deadlift", "3 × 12", true],
        ["Lat Pulldown", "4 × 12", false],
      ];

  const revenue = [45, 62, 50, 78, 60, 88, 72];

  return (
    <section className="w-full flex flex-col gap-y-14 pb-24 pt-32" id="funzioni">
      <ScrollReveal delay={0.2}>
        <div className="lg:px-14 w-full flex flex-col items-center pt-8">
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
            <Sparkles className="size-4 text-primary" />
            <span className="text-foreground text-xs uppercase tracking-wider">
              {dict.features.badge_text}
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl uppercase lg:text-5xl text-balance text-center tracking-tight">
            {dict.features.title}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
            {dict.features.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid w-full max-w-lg grid-cols-1 gap-5 px-4 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
        {/* 1 — Gestione Clienti */}
        <div className={cardCls}>
          <CardHeader
            Icon={UsersRound}
            title={dict.features.handle_clients}
            desc={dict.features.handle_clients_desc}
          />
          <div className="flex flex-1 flex-col justify-center gap-3.5 px-6 pb-6">
            {clients.map((c) => (
              <div key={c.initials} className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[11px] font-semibold text-foreground ring-1 ring-border">
                  {c.initials}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-foreground/80">{c.name}</span>
                    <span className="text-primary">{c.prog}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${c.prog}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 — Schede Personalizzate */}
        <div className={cardCls}>
          <CardHeader
            Icon={Dumbbell}
            title={dict.features.custom_workout}
            desc={dict.features.custom_workout_desc}
          />
          <div className="flex flex-1 flex-col justify-center gap-2.5 px-6 pb-6">
            {exercises.map(([name, reps, done]) => (
              <div
                key={name as string}
                className="flex items-center justify-between rounded-lg bg-surface-2 px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                  <span
                    className={`flex size-4 items-center justify-center rounded-[5px] ${
                      done
                        ? "bg-primary text-primary-foreground"
                        : "ring-1 ring-border"
                    }`}
                  >
                    {done && <Check className="size-3" strokeWidth={3} />}
                  </span>
                  {name}
                </div>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary ring-1 ring-primary/20">
                  {reps}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 — Calendario Integrato */}
        <div className={cardCls}>
          <CardHeader
            Icon={CalendarCheck2}
            title={dict.features.calendar}
            desc={dict.features.calendar_desc}
          />
          <div className="flex flex-1 items-center justify-center px-4 pb-5">
            <Calendar
              mode="single"
              selected={new Date()}
              className="scale-95 rounded-lg border border-border bg-surface-2/50 transition-transform duration-300 group-hover:scale-100"
            />
          </div>
        </div>

        {/* 4 — Video Esercizi (wide) — biblioteca/catalogo, niente play */}
        <div className={`${cardCls} md:col-span-2`}>
          <CardHeader
            Icon={Video}
            title={dict.features.exercises}
            desc={dict.features.exercises_desc}
          />
          <div className="grid flex-1 content-center grid-cols-1 gap-2.5 px-6 pb-6 pt-1 sm:grid-cols-2">
            {(it
              ? [
                  ["Squat", "Gambe", "0:45"],
                  ["Panca piana", "Petto", "1:10"],
                  ["Stacco da terra", "Schiena", "0:58"],
                  ["Plank", "Core", "0:30"],
                ]
              : [
                  ["Squat", "Legs", "0:45"],
                  ["Bench Press", "Chest", "1:10"],
                  ["Deadlift", "Back", "0:58"],
                  ["Plank", "Core", "0:30"],
                ]
            ).map(([name, muscle, dur]) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg bg-surface-2 px-3 py-2.5"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/20">
                  <Video className="size-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs text-foreground/85">{name}</div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {muscle}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                  {dur}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 — Gestione Pagamenti (compatta) */}
        <div className={cardCls}>
          <CardHeader
            Icon={CreditCard}
            title={dict.features.payment}
            desc={dict.features.payment_desc}
          />
          <div className="flex flex-1 flex-col justify-center px-6 pb-6 pt-1">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-end gap-2">
                  <span className="font-display text-3xl text-foreground">€2.450</span>
                  <span className="mb-1 inline-flex items-center gap-0.5 text-xs text-primary">
                    <TrendingUp className="size-3.5" />
                    +18%
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  {it ? "Incassi questo mese" : "Revenue this month"}
                </p>
              </div>
              <div className="flex h-12 items-end gap-1.5">
                {revenue.map((h, i) => (
                  <div
                    key={i}
                    className={`w-2.5 rounded-t ${
                      i === revenue.length - 2 ? "bg-primary" : "bg-primary/30"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 — Chat Integrata (wide) — conversazione reale */}
        <div className={`${cardCls} md:col-span-2`}>
          <CardHeader
            Icon={MessageSquare}
            title={dict.features.chat}
            desc={dict.features.chat_desc}
          />
          <div className="flex flex-1 flex-col justify-center gap-3 px-6 pb-6 pt-1">
            {(it
              ? [
                  ["in", "Giulia", "Ciao! Ho finito la scheda di oggi 💪"],
                  ["out", "", "Grande Giulia! Com'è andato lo squat?"],
                  ["in", "Giulia", "Bene, sono salita a 60kg! 🔥"],
                  ["out", "", "Perfetto, la prossima settimana aumentiamo ancora"],
                ]
              : [
                  ["in", "Giulia", "Hi! Just finished today's workout 💪"],
                  ["out", "", "Great Giulia! How did the squat feel?"],
                  ["in", "Giulia", "Good, I went up to 60kg! 🔥"],
                  ["out", "", "Perfect, we'll add more next week"],
                ]
            ).map(([dir, name, text], i) =>
              dir === "in" ? (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[10px] font-semibold text-foreground ring-1 ring-border">
                    {(name as string).charAt(0)}
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface-2 px-3.5 py-2">
                    <span className="mb-0.5 block text-[10px] text-muted-foreground">
                      {name}
                    </span>
                    <span className="text-xs leading-relaxed text-foreground/90">
                      {text}
                    </span>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2">
                    <span className="text-xs leading-relaxed text-primary-foreground">
                      {text}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* 7 — App Mobile — solo disponibilità, niente mockup */}
        <div className={cardCls}>
          <CardHeader
            Icon={Smartphone}
            title={dict.features.app}
            desc={dict.features.app_desc}
          />
          <div className="flex flex-1 flex-col px-6 pb-6 pt-1">
            <div className="space-y-2.5">
              {(it
                ? [
                    "Schede sempre a portata di mano",
                    "Traccia allenamenti e progressi",
                    "Promemoria e notifiche push",
                  ]
                : [
                    "Workouts always in their pocket",
                    "Track training and progress",
                    "Reminders and push notifications",
                  ]
              ).map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-[5px] bg-primary text-primary-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground/80">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-2.5 pt-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-muted-foreground">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-muted-foreground">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
              </svg>
              <span className="text-xs text-muted-foreground">
                {it ? "Disponibile per iOS e Android" : "Available for iOS & Android"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
