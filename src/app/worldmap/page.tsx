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

import dynamic from "next/dynamic";

const MapWoldComponent = dynamic(
  () => import("../../components/MapWoldComponent"),
  {
    ssr: false,
  }
);

export default function Woldmap() {
  return (
    <div
      className="bg-fixed min-h-screen grid md:grid-cols-2 grid-cols-1 gap-10 justify-between items-center md:p-16 p-3"
      style={{
        backgroundImage: `url(/background-frond.png)`,
      }}
    >
      <aside className="flex flex-col flex-1 grow min-h-full bg-amber-800 border-4 border-y-orange-400 border-x-orange-300 ">
        <footer className="flex justify-center items-center p-5">
          <h1 className="">TITLE</h1>
        </footer>
        <menu className="flex justify-center items-center p-2">
          <div className="h-60 min-w-full p-10 bg-white">MAP</div>
        </menu>
        <div className="flex-1 flex flex-col justify-start  min-h-full items-center p-2">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Descrição
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      População
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Economia
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Politica
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex-1 min-h-full min-w-full p-10 bg-white"></div>
        </div>
      </aside>
      <main>
        <MapWoldComponent></MapWoldComponent>
      </main>
    </div>
  );
}
