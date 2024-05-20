import Image from "next/image";
import backgroundFrist from "../../public/background-frond.svg";

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <div className="min-h-screen"> */}
      <div
        className="min-h-screen min-w-full flex justify-center items-center"
        style={{
          backgroundImage: `url(/background-frond.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center p-2 gap-2">
          <img src="/FrondOnlineLogo.png" alt="" className="size-5/5" />

          <h1 className="font-bold md:text-4xl text-3xl">
            RECEBA NOSSAS NEWSLETTERS!
          </h1>
          <p className="text-center">
            Inscreva-se e receba as últimas notícias sobre o desenvolvimento!
          </p>
          <div className="border border-r-black ">
            <input
              type="email"
              name=""
              id=""
              placeholder="seu_email@email.com"
            />
          </div>
          <button className="bg-[#0c4f4e] rounded-xl h-10 w-40 border-4 border-y-orange-400 border-x-orange-300">
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
              className=" size-3/6 p-4 flex flex-col flex-1 justify-center items-center gap-10"
            >
              <div className="min-w-full flex md:flex-row flex-col justify-around items-center">
                {index % 2 === 0 ? (
                  <>
                    <img
                      src={member.image}
                      alt=""
                      className="md:size-1/6 size-2/5"
                    />
                    <span className=" flex-1 rounded-xl text-2xl text-center border-4 border-y-orange-400 border-x-orange-300 bg-green-900 text-white">
                      {member.name}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex-1 text-2xl text-center rounded-xl border-4 border-y-orange-400 border-x-orange-300 bg-green-900 text-white">
                      {member.name}
                    </span>
                    <img
                      src={member.image}
                      alt=""
                      className="md:size-1/6 size-2/5"
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
          <img
            src="/EpicGamesLogo.png"
            alt=""
            className="md:size-1/12 size-4/12"
          />
          <img
            src="/UnrealEngineLogo.png"
            alt=""
            className="md:size-1/12 size-4/12"
          />
        </div>
      </div>
      <footer className="flex flex-col gap-3 p-5 items-start justify-start bg-black">
        <div className="border-b border-gray-900 p-4 min-w-screen flex md:flex-row flex-col md:gap-1 gap-8 md:justify-start justify-center md:items-start items-center">
          <div className="flex justify-start">
            <img
              src="/RebelosPlanetGeekLogo.png"
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
                faz, nas mais diversas áreas, e esperamos que você se divirta e
                se emocione conosco!
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
  );
}