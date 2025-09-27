import { CircleUser, Dumbbell, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from '@/public/android-chrome-192x192.png'

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
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image src={logo} width={40} height={40} alt="trainody_logo" />
              <span className="">Trainody</span>
            </Link>
            <div className="flex items-center gap-x-6 px-2">
              {menuContent.map((content: any, i: number) => (
                <Link
                    key={i}
                    href={content.href}
                    className="text-background transition-colors hover:text-background/90 hover:underline"
                >
                    {lang == 'it' ? content.title_it : content.title_en}
                </Link>
              ))}
              <a href="https://app.trainody.com/sign-in" className="bg-primary px-4 py-1 text-black rounded-lg">Login</a>
            </div>
        </nav>
        <Image src={logo} width={40} height={40} alt="trainody_logo" className="md:hidden" />
        
        <Sheet>
            <SheetTrigger asChild>
              <Button  size="icon" className="shrink-0 md:hidden bg-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-foreground">
            <nav className="grid gap-6 text-lg font-medium ">
                <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
                >
                 <Image src={logo} width={30} height={30} alt="trainody_logo" />
                  <span className="sr-only">Trainody</span>
                </Link>

                {menuContent.map((content: any, i: number) => (
                <Link
                    key={i}
                    href={content.href}
                    className="text-muted-foreground hover:text-foreground"
                >
                    {content.title}
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
