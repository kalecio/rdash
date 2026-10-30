import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DesignPage } from "../../components/DesignPage";
import { galleryAlbums } from "../../components/galleryData";

export const metadata: Metadata = {
  title: "Fotos da Fight Night",
  description: "Veja os registros da Fight Night da comunidade R-DASH: partidas, jogadores e momentos de uma noite de jogos de luta em Recife.",
};

const photos = [
  "Encontro da comunidade R-DASH",
  "Jogadores reunidos durante uma partida",
  "Registro da Fight Night",
  "Partida de Anime Fighters",
  "Momento do campeonato",
  "A comunidade reunida para jogar",
  "Registro do evento",
  "Momento entre partidas",
  "Noite de jogos da comunidade",
];

export default function FightNightAlbumPage() {
  return (
    <DesignPage activePage="Galeria" desktopHeight={2800} mobileHeight={1866}>
      <Link href="/galeria" className="sr-only focus:not-sr-only">Voltar à galeria</Link>
      <header className="absolute left-[100px] top-[210px] w-[1240px] mobile:left-[16px] mobile:top-[137px] mobile:w-[370px]">
        <h1 className="text-[48px] font-bold uppercase leading-[62px] mobile:text-[32px] mobile:leading-[42px]">Momentos da Fight Night</h1>
        <p className="mt-[8px] text-[32px] font-medium leading-[42px] text-[#ededed] mobile:text-[20px] mobile:leading-[26px]">{galleryAlbums[1].description}</p>
      </header>
      <section aria-label="Fotos da Fight Night" className="absolute left-[100px] top-[480px] grid w-[1240px] grid-cols-3 auto-rows-[394px] gap-[32px] mobile:left-[16px] mobile:top-[487px] mobile:w-[370px] mobile:grid-cols-2 mobile:auto-rows-[151px] mobile:gap-x-[8px] mobile:gap-y-[16px]">
        {photos.map((description, index) => (
          <picture key={description} className={`block overflow-hidden rounded-[16px] mobile:rounded-[4.77px] ${index === 0 ? "col-span-3 mobile:col-span-2" : ""}`}>
            <source media="(max-width: 600px)" srcSet={`/assets/gallery-photo-${index+1}-mobile.png`} />
            <Image src={`/assets/gallery-photo-${index+1}.png`} alt={description} width={index === 0 ? 1240 : 588} height={index === 0 ? 394 : 591} className="h-full w-full object-cover" unoptimized />
          </picture>
        ))}
      </section>
    </DesignPage>
  );
}
