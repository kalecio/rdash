import Link from "next/link";
import { Footer } from "../components/Footer";
import { GalleryImagePlaceholder } from "../components/GalleryImagePlaceholder";
import { Header } from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria de eventos e encontros",
  description:
    "Reviva os torneios, encontros e noites de jogos da comunidade R-DASH em Recife na galeria de fotos.",
};

const albums = [
  {
    title: "MAIS UMA NOITE PARA A HISTÓRIA",
    description:
      "Mais um evento de sucesso! Agradecemos demais aos nossos parceiros Super Smash Bros e HELLKOF PERNAMBUCO, assim como nosso novo local de colaboração QB Geek. Até o próximo encontro, R-Dashers!",
    href: "/galeria/momentos-da-fight-night",
  },
  {
    title: "MOMENTOS DA FIGHT NIGHT",
    description:
      "Mais uma noite especial na @coffee_gank marcada por partidas disputadas, conversas entre sets e aquela atmosfera que só a comunidade de jogos de luta consegue criar. Entre controles passando de mão em mão e jogadores reunidos ao redor das telas, ficam os registros de mais um encontro inesquecível.",
    href: "/galeria/momentos-da-fight-night",
  },
  {
    title: "NOITE NO BOTECO DO ABELARDO",
    description:
      "Fotos de mais um encontro que reuniu jogadores e amigos no Boteco do Abelardo para uma noite marcada por partidas intensas, muita resenha e momentos compartilhados pela comunidade. Obrigado a todos que compareceram e ajudaram a tornar a noite especial.",
    href: "/galeria/momentos-da-fight-night",
  },
  {
    title: "STREET FIGHTER FT10",
    description:
      "Uma noite inesquecível em que a comunidade se reuniu para explorar o universo mágico de Sailor Moon. Entre risadas, nostalgia e momentos épicos, cada partida transformou o encontro em uma lembrança especial para todos que participaram.",
    href: "/galeria/momentos-da-fight-night",
  },
];

export default function GaleriaPage() {
  return (
    <div className={styles.gallerySite}>
      <Header />
      <main className={styles.galleryMain}>
        <div className={styles.gallerySoundControl} aria-hidden="true">
          <span className={styles.gallerySoundDisc}>♫</span>
          <span className={styles.gallerySoundPalette}><i /><i /><i /></span>
        </div>
        <div className={styles.galleryContent}>
          <header className={styles.galleryIntro}>
            <h1>GALERIA</h1>
            <p>Fotos dos campeonatos, encontros e eventos da comunidade</p>
          </header>
          <section className={styles.galleryAlbums} aria-label="Álbuns da galeria">
            {[albums.filter((_, index) => index % 2 === 0), albums.filter((_, index) => index % 2 === 1)].map((column, index) => (
              <div className={styles.galleryAlbumColumn} key={index}>
                {column.map((album) => (
                  <Link className={styles.galleryAlbum} href={album.href} key={album.title}>
                    <div className={styles.galleryAlbumPhoto}>
                      <GalleryImagePlaceholder description={album.title} />
                    </div>
                    <div className={styles.galleryAlbumCopy}>
                      <h2>{album.title}</h2>
                      <p>{album.description}</p>
                      <span>Veja os registros</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </section>
        </div>
      </main>
      <div className="absolute inset-x-0 top-[2250px] mobile:relative mobile:top-auto">
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  gallerySite: [
    "gallery-site",
    "relative isolate w-[1440px] h-[2743px] m-[0_auto] overflow-x-clip [zoom:min(1,_calc(100vw_/_1440px))] text-white bg-[#881411]",
    "mobile:w-[402px] mobile:h-auto mobile:min-h-[100vh] mobile:m-[0_auto] mobile:[zoom:min(1,_calc(100vw_/_402px))] mobile:overflow-x-clip",
  ].join(" "),
  galleryMain: [
    "absolute inset-0 w-[1440px] h-[2160px] overflow-hidden bg-[#881411]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-[88px_0_0] [&::before]:z-0 [&::before]:pointer-events-none [&::before]:opacity-[.94] [&::before]:[background-color:#681712] [&::before]:[background-image:linear-gradient(180deg,_rgba(43,4,4,.18),_transparent_18%,_rgba(43,4,4,.2)),_url('/assets/brickwall.png')] [&::before]:[background-size:100%_100%,_100%_auto] [&::before]:[background-position:0_0,_center_top] [&::before]:[background-repeat:no-repeat,_repeat-y] [&::before]:[background-blend-mode:normal,_screen]",
    "mobile:relative mobile:inset-auto mobile:mt-[113px] mobile:w-full mobile:h-auto mobile:min-h-0 mobile:overflow-visible mobile:pb-[46px] mobile:bg-[#881411]",
    "mobile:[&::before]:inset-0 mobile:[&::before]:opacity-[.94] mobile:[&::before]:[background-size:100%_100%,_100%_auto]",
  ].join(" "),
  gallerySoundControl: [
    "absolute z-2 top-[540px] right-[55px] flex w-[120px] flex-col items-center",
    "mobile:top-[380px] mobile:right-[8px] mobile:[transform:scale(.72)] mobile:origin-top-right",
  ].join(" "),
  gallerySoundDisc: "z-1 grid w-[78px] h-[78px] place-items-center [border:5px_solid_#fff] rounded-[50%] bg-[#f8f8f8] text-[#1f1f1f] text-[length:38px] shadow-[0_3px_5px_#0005]",
  gallerySoundPalette: [
    "flex w-[120px] h-[42px] items-center justify-center gap-[9px] mt-[-4px] [border:5px_solid_#fff] rounded-[12px] bg-[#df3835] shadow-[0_3px_5px_#0005]",
    "[&_i]:w-[21px] [&_i]:h-[21px] [&_i]:[border:3px_solid_#302526] [&_i]:rounded-[50%] [&_i]:bg-[#1947bf]",
    "[&_i:nth-child(2)]:bg-[#d83f37]",
    "[&_i:nth-child(3)]:bg-[#873887]",
  ].join(" "),
  galleryContent: [
    "relative z-1 w-[1240px] m-[0_auto] pt-[230px]",
    "mobile:w-[calc(100%_-_40px)] mobile:pt-[48px]",
    "mobile:[.gallery-detail-site_&]:pt-[36px]",
  ].join(" "),
  galleryIntro: [
    "max-w-[900px] m-[0_0_50px]",
    "[&_h1]:m-[0_0_8px] [&_h1]:text-[length:40px] [&_h1]:leading-[1.1] [&_h1]:font-extrabold",
    "[&_p]:m-0 [&_p]:text-[length:26px] [&_p]:leading-[1.35]",
    "mobile:mb-[20px]",
    "mobile:[&_h1]:mb-[4px] mobile:[&_h1]:text-[length:20px]",
    "mobile:[&_p]:text-[length:12px] mobile:[&_p]:leading-[1.4]",
  ].join(" "),
  galleryAlbums: [
    "grid grid-cols-2 [align-items:start] gap-[30px]",
    "mobile:grid-cols-1 mobile:gap-[16px]",
  ].join(" "),
  galleryAlbumColumn: [
    "flex min-w-0 flex-col gap-[30px]",
    "mobile:gap-[16px]",
  ].join(" "),
  galleryAlbum: [
    "gallery-album",
    "relative block min-w-0 overflow-hidden p-[15px] rounded-[12px] bg-[#b92f26] shadow-[0_8px_16px_rgba(30,0,0,.25)] [transition:transform_.2s_ease,_box-shadow_.2s_ease]",
    "[&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-[0_17px_30px_rgba(25,0,0,.42)]",
    "mobile:p-[10px] mobile:rounded-[9px]",
  ].join(" "),
  galleryAlbumPhoto: [
    "gallery-album-photo",
    "relative overflow-hidden aspect-[1.22] rounded-[8px]",
    "[&_img]:object-cover [&_img]:[transition:transform_.4s_ease]",
    "[.gallery-album:hover_&_img]:[transform:scale(1.04)]",
    "mobile:min-h-0 mobile:aspect-[1.35]",
  ].join(" "),
  galleryAlbumCopy: [
    "flex flex-col items-start p-[36px_0_8px]",
    "[&_h2]:m-[0_0_14px] [&_h2]:text-[length:40px] [&_h2]:leading-[1.08] [&_h2]:font-[750]",
    "[&_p]:m-[0_0_14px] [&_p]:text-[length:22px] [&_p]:leading-[1.32]",
    "[&_span]:self-end [&_span]:mt-auto [&_span]:text-[length:14px] [&_span]:underline [&_span]:underline-offset-[3px]",
    "mobile:p-[14px_0_5px]",
    "mobile:[&_h2]:mb-[8px] mobile:[&_h2]:text-[length:20px]",
    "mobile:[&_p]:mb-[10px] mobile:[&_p]:text-[length:13px] mobile:[&_p]:leading-[1.4]",
    "mobile:[&_span]:text-[length:10px]",
  ].join(" "),
};
