"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, LatLngBounds } from "leaflet";
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

export default function Wiki() {
  const frondIcon = new Icon({
    iconUrl: "/camp.png",
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
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
      <MapContainer
        preferCanvas={true}
        center={[0, 0]}
        zoom={0}
        scrollWheelZoom={true}
        style={{
          height: "800px",
          // width: "100vw"
        }}
        className="border-4 border-y-orange-400 border-x-orange-300"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="./FRONDMAP/{z}/{x}/{y}.png"
          minZoom={2}
          detectRetina={true}

          // zoomReverse={true}
        />
        <Marker position={[0, -0]}>
          <Popup>
            This Marker icon is displayed correctly with{" "}
            <i>leaflet-defaulticon-compatibility</i>.
          </Popup>
        </Marker>
        <Marker position={[10, -45]} icon={frondIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
