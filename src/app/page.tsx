"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { Input } from "@/components/ui/input";
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
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export default function Home() {
  const team = [
    {
      name: "Amanda Borja - COO (Diretora de Operações)",
      image: "/ABorja.png",
    },
    {
      name: "Maithe Carvalho - CCO (Chief Creative Officer)",
      image: "/MCarvalho.png",
    },
    {
      name: "Hélio Rebelo - Diretor Criativo do Jogo",
      image: "/HRebelo.png",
    },
    {
      name: "Dayane Fragoso - Diretora de Gráficos de Computador",
      image: "/DFragoso.png",
    },
    {
      name: "Patricia Félix - Diretora de Concept",
      image: "/PFelix.png",
    },
    {
      name: "Ana Rosa - Diretora Arte",
      image: "/ARosa.png",
    },
    {
      name: "Mariana Simões - Diretora Setor de Graphics 3D",
      image: "/MSimoes.png",
    },
    {
      name: "Rafaela Diva - Modelagem de Personagens",
      image: "/RDiva.png",
    },
    {
      name: "Douglas Lage - Linha de Missão",
      image: "/DLage.png",
    },
    {
      name: "Valter Jesus - Linha de Missão",
      image: "/VJesus.png",
    },
    {
      name: "Felipe Pena - Gestor de Comunidade",
      image: "/FPena.png",
    },
  ];

  return (
    <>
      {/* <header className="bg-black"> */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Guia</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col bg-white border-4 border-y-orange-400 border-x-orange-300  justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/wiki"
                    >
                      <Image
                        src="/FrondOnlineLogo.png"
                        width={75}
                        height={100}
                        alt="logo"
                      />
                      <div className="mb-2 mt-4 text-lg text-black font-bold">
                        Classes
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground text-justify">
                        Tabela de relacionamento de clases. Entenda como
                        progredir para liberar a classe que deseja, alem de
                        obter informaç~~oes valiosas sobre todas as classes e
                        descobrir qual se encaixa em seu perfil
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
      {/* </header> */}
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <div className="min-h-screen"> */}
        <div
          className="min-h-screen min-w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(/background-frond.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center p-2 gap-2">
            <Image
              src="/FrondOnlineLogo.png"
              className="size-5/5"
              width={600}
              height={600}
              alt=""
            />

            <h1 className="font-bold md:text-4xl text-3xl">
              RECEBA NOSSAS NEWSLETTERS!
            </h1>
            <p className="text-center">
              Inscreva-se e receba as últimas notícias sobre o desenvolvimento!
            </p>
            <div className="size-8/12 rounded-xl border-4 border-y-orange-400 border-x-orange-300">
              <Input
                type="email"
                name=""
                id=""
                placeholder="seu_email@email.com"
                className="placeholder:bold placeholder:center placeholder:text-slate-400"
              />
            </div>
            <button className="bg-[#0c4f4e] hover:bg-[#0d6d6b] rounded-xl h-10 w-40 border-4 border-y-orange-400 border-x-orange-300">
              Inscreva-se
            </button>
          </div>
        </div>
        <div
          className="flex-col min-h-screen min-w-full flex justify-center items-center"
          style={{
            backgroundImage: "url(/floresta-frond.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="p-16 font-bold text-white text-4xl">
            Conheça a Equipe de Desenvolvimento
          </h1>
          {team.map((member, index) => {
            return (
              <div
                key={member.name}
                className=" md:size-3/6 size-5/6 p-4 flex flex-col flex-1 justify-center items-center gap-10"
              >
                <div className="min-w-full flex md:flex-row flex-col justify-around items-center">
                  {index % 2 === 0 ? (
                    <>
                      <Image
                        src={member.image}
                        width={100}
                        height={100}
                        alt=""
                        style={{
                          borderRadius: "24px",
                        }}
                        className="md:size-1/6 size-2/5 rounder-xl border-4 border-y-orange-400 border-x-orange-300"
                      />
                      <span className="flex justify-center flex-1 border-l-0 rounded-r-xl text-2xl text-center border-4 border-y-orange-400 border-x-orange-300 bg-green-900 text-white">
                        {member.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center flex-1 min-h-full text-2xl text-center rounded-l-xl border-r-0 border-4 border-y-orange-400 border-x-orange-300 bg-green-900 text-white">
                        {member.name}
                      </span>
                      <Image
                        src={member.image}
                        width={100}
                        height={100}
                        alt=""
                        style={{
                          borderRadius: "24px",
                        }}
                        className="md:size-1/6 size-2/5 rounder-xl border-4 border-y-orange-400 border-x-orange-300"
                      />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
        <div className="flex flex-col p-4 min-w-full  gap-3 justify-end items-center bg-black ">
          <h1 className="text-white pt-10">Apoio</h1>
          <div className=" min-w-full p-10  flex flex-row justify-center items-center gap-12 border-b border-gray-900">
            <Image
              src="/EpicGamesLogo.png"
              width={100}
              height={100}
              alt=""
              className="md:size-1/12 size-4/12"
            />
            <Image
              src="/UnrealEngineLogo.png"
              width={100}
              height={100}
              alt=""
              className="md:size-1/12 size-4/12"
            />
          </div>
        </div>
        <footer className="flex flex-col gap-3 p-5 items-start justify-start bg-black">
          <div className="border-b border-gray-900 p-4 min-w-screen flex md:flex-row flex-col md:gap-1 gap-8 md:justify-start justify-center md:items-start items-center">
            <div className="flex justify-start">
              <Image
                src="/RebelosPlanetGeekLogo.png"
                width={100}
                height={100}
                alt=""
                className="md:size-4/5 size-6/6"
              />
            </div>
            <div className="flex-1 flex md:flex-row flex-col justify-center gap-4">
              <div className="basis-1/3">
                <h1 className="border-b-4 border-white">
                  <span className="bg-white text-black rounded-r-xl p-1">
                    Sobre Nós
                  </span>
                </h1>
                <p className="text-justify">
                  Trazendo algo diferente para o RPG online nacional, focamos na
                  essência: o role play. Em 2021, estreamos com FROND, um mundo
                  original de D&D, que se tornou nosso carro-chefe. Estamos
                  constantemente buscando novas histórias intrigantes e
                  inspiradoras para trazer a você! Além de lives, também
                  produzimos outros conteúdos relacionados a esse mundo e gênero
                  de jogo que tanto amamos! Nossa equipe é apaixonada pelo que
                  faz, nas mais diversas áreas, e esperamos que você se divirta
                  e se emocione conosco!
                </p>
              </div>
              <div className="basis-1/3">
                <h1 className="border-b-4 border-white">
                  <span className="bg-white text-black rounded-r-xl p-1">
                    Contatos
                  </span>
                </h1>
                <ul>
                  <li>Fale Conosco</li>
                  <li>Parcerias</li>
                  <li>Eventos</li>
                  <li>Carreira</li>
                  <li>Suporte</li>
                </ul>
              </div>
              <div className="basis-1/3">
                <h1 className="border-b-4 border-white">
                  <span className="bg-white text-black rounded-r-xl p-1">
                    Outros
                  </span>
                </h1>
                <ul>
                  <li>Videos</li>
                  <li>Noticias</li>
                  <li>Mesas Privadas</li>
                  <li>Loja</li>
                  <li>Kit Publicitario</li>
                  <li>Equipe</li>
                  <li>Midia Kit</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">
              © 2024 Rebelo´s Planet Geek , Inc. Todos os Direitos Reservados.
            </p>
            <p className="text-white">
              Ilustrações by{" "}
              <a
                href="https://www.instagram.com/rainy_cloud81/"
                className="underline underline-offset-2 font-bold text-yellow-500"
              >
                Anna Rosa
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
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
