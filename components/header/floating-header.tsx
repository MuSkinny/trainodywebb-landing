import { CircleUser, Dumbbell, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import LanguageSwitcher from "./language-switcher";
import logo from "@/public/trainody-logo.svg";

const Brand = ({ withText = true }: { withText?: boolean }) => (
  <span className="flex items-center gap-2">
    <Image
      src={logo}
      alt="Trainody"
      width={36}
      height={36}
      unoptimized
      className="rounded-lg"
    />
    {withText && (
      <span className="font-display text-lg uppercase tracking-tight text-foreground">
        Trainody
      </span>
    )}
  </span>
);

const menuContent = [
  {
    href: "#funzioni",
    title_it: "Funzionalità",
    title_en: "Features",
  },
  {
    href: "#pricing",
    title_it: "Prezzi",
    title_en: "Pricing",
  },
  {
    href: "#faq",
    title_it: "FAQ",
    title_en: "FAQ",
  },
];

const Header = ({lang}: {lang: string}) => {
  return (
    <header className="w-full absolute flex justify-between h-16 items-center gap-4 px-4 md:px-6 z-50 bg-transparent">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between w-full md:gap-5 md:text-sm lg:gap-6">
            <Link href={`/${lang}`} className="flex items-center">
              <Brand />
            </Link>
            <div className="flex items-center gap-x-6 px-2">
              {menuContent.map((content: any, i: number) => (
                <Link
                    key={i}
                    href={content.href}
                    className="text-foreground/80 transition-colors hover:text-primary"
                >
                    {lang == 'it' ? content.title_it : content.title_en}
                </Link>
              ))}
              <LanguageSwitcher lang={lang} />
              <a href="https://app.trainody.com/sign-in" className="bg-primary px-4 py-1 text-black rounded-lg">Login</a>
            </div>
        </nav>
        <Link href={`/${lang}`} className="md:hidden">
          <Brand />
        </Link>
        
        <Sheet>
            <SheetTrigger asChild>
              <Button  size="icon" className="shrink-0 md:hidden bg-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-foreground">
            <nav className="grid gap-6 text-lg font-medium ">
                <Link href={`/${lang}`} className="flex items-center gap-2">
                  <Brand withText={false} />
                  <span className="sr-only">Trainody</span>
                </Link>

                {menuContent.map((content: any, i: number) => (
                <Link
                    key={i}
                    href={content.href}
                    className="text-muted-foreground hover:text-foreground"
                >
                    {lang == 'it' ? content.title_it : content.title_en}
                </Link>
                ))}
                <Link href={"https://app.trainody.com/sign-in"}>
                  Login
                </Link>
            </nav>
            </SheetContent>
        </Sheet>
        
        {/*
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative"></div>
            </form>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          
        </div>
        */}
    </header>
  );
};

export default Header;
