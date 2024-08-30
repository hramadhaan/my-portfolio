"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const MENU = ["Works", "About", "Contact"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  console.log("Theme: ", theme);
  return (
    <header className="flex flex-row items-center justify-between py-8">
      <div>
        <p className="font-black text-xl uppercase">Hanif Ramadhan</p>
        <p className="font-light text-sm text-slate-500">
          Mobile Apps Developer
        </p>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {MENU.map((item, index) => {
            return (
              <NavigationMenuItem key={`index-nav-${index}`}>
                <Link href={"#"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  if (theme === "dark") setTheme("light");
                  else setTheme("dark");
                }}
                variant="outline"
                size="icon"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
