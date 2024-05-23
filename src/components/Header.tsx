"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Discord",
    href: "https://discord.com/invite/DHmv47vMyY",
    description: "Venha participar da nossa comuidade no Discord!",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/rebelosplanetgeek",

    description:
      "Acompanhe nosso trabalho pelo Instagram, veja as artes e devlogs de nossa equipe.",
  },
  {
    title: "Rebelos Game Studio",
    href: "https://rpgfrond.com.br/",
    description: "Conheça um pouco mais sobre a Rebelos Game Studio.",
  },
];
export function Header() {
  return (
    <header>
      <NavigationMenu>
        <NavigationMenuList>
          <a href="/" className="flex flex-row text-center items-center">
            <Image
              src="/FrondOnlineLogo.png"
              // className="size-5/5"
              width={100}
              height={100}
              alt=""
            />
            <h1>FROND ONLINE</h1>
          </a>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Guia</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col bg-white border-4 border-y-orange-400 border-x-orange-300  justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/worldmap"
                    >
                      <div className="mb-2 mt-4 text-lg text-black font-bold text-center">
                        World Map
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground text-center">
                        Conheça o mundo de Frond Online!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col bg-white border-4 border-y-orange-400 border-x-orange-300  justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/classesguid"
                    >
                      <div className="mb-2 mt-4 text-lg text-black font-bold text-center">
                        Classes
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground text-center">
                        Conheça todas as raças do mundo de Frond Online!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Comunidades</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Novidades
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
