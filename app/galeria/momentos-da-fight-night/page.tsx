import Link from "next/link";
import { Footer } from "../../components/Footer";
import { GalleryImagePlaceholder } from "../../components/GalleryImagePlaceholder";
import { Header } from "../../components/Header";

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
    <div className={styles.gallerySite}>
      <Header />
      <main className={styles.galleryMain}>
        <div className={styles.galleryContent}>
          <Link className={styles.galleryBack} href="/galeria"><span aria-hidden="true">←</span> GALERIA</Link>
          <header className={styles.galleryIntro}>
            <h1>MOMENTOS DA FIGHT NIGHT</h1>
            <p>
              Mais uma noite especial na @coffee_park, marcada por partidas disputadas,
              conversas entre Dashers e controles passando de mão em mão.
              Um registro de tudo que fez esse encontro inesquecível.
            </p>
          </header>
          <section className={styles.galleryPhotoGrid} aria-label="Fotos da Fight Night">
            {photos.map((description, index) => (
              <figure className={`${styles.galleryPhoto} gallery-photo-${index + 1}`} key={description}>
                <GalleryImagePlaceholder description={description} />
              </figure>
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
    "gallery-site gallery-detail-site",
    "relative isolate w-[1440px] h-[2743px] m-[0_auto] overflow-hidden [zoom:min(1,_calc(100vw_/_1440px))] text-white bg-[#881411]",
    "mobile:w-[402px] mobile:h-auto mobile:min-h-[100vh] mobile:m-[0_auto] mobile:[zoom:min(1,_calc(100vw_/_402px))] mobile:overflow-hidden",
  ].join(" "),
  galleryMain: [
    "absolute inset-0 w-[1440px] h-[2250px] overflow-hidden bg-[#881411]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-[88px_0_0] [&::before]:z-0 [&::before]:pointer-events-none [&::before]:opacity-[.94] [&::before]:[background:linear-gradient(180deg,_rgba(43,4,4,.18),_transparent_18%,_rgba(43,4,4,.2)),_url('/assets/gallery-brick-wall.svg')_center_top_/_270px_140px_repeat]",
    "mobile:relative mobile:inset-auto mobile:mt-[113px] mobile:w-full mobile:h-auto mobile:min-h-0 mobile:overflow-visible mobile:pb-[46px] mobile:bg-[#881411]",
    "mobile:[&::before]:inset-0 mobile:[&::before]:opacity-[.94] mobile:[&::before]:[background-size:270px_140px]",
  ].join(" "),
  galleryContent: [
    "relative z-1 w-[1240px] m-[0_auto] pt-[230px]",
    "mobile:w-[calc(100%_-_40px)] mobile:pt-[48px]",
    "mobile:[.gallery-detail-site_&]:pt-[36px]",
  ].join(" "),
  galleryBack: [
    "inline-flex items-center gap-[9px] m-[0_0_24px] text-[length:14px] font-bold",
    "[&_span]:grid [&_span]:w-[30px] [&_span]:h-[30px] [&_span]:place-items-center [&_span]:[border:1px_solid_rgba(255,255,255,.6)] [&_span]:rounded-[50%] [&_span]:text-[length:18px]",
    "[&:hover]:text-[#ffd4d2]",
    "mobile:gap-[7px] mobile:mb-[15px] mobile:text-[length:10px]",
    "mobile:[&_span]:w-[23px] mobile:[&_span]:h-[23px] mobile:[&_span]:text-[length:15px]",
  ].join(" "),
  galleryIntro: [
    "max-w-[900px] m-[0_0_50px] mb-[35px]",
    "[&_h1]:m-[0_0_8px] [&_h1]:text-[length:40px] [&_h1]:leading-[1.1] [&_h1]:font-extrabold",
    "[&_p]:m-0 [&_p]:text-[length:26px] [&_p]:leading-[1.35] [&_p]:max-w-[790px]",
    "mobile:mb-[16px]",
    "mobile:[&_h1]:mb-[4px] mobile:[&_h1]:text-[length:19px]",
    "mobile:[&_p]:text-[length:10px] mobile:[&_p]:leading-[1.4]",
  ].join(" "),
  galleryPhotoGrid: [
    "grid grid-cols-3 auto-rows-[330px] gap-[18px]",
    "mobile:grid-cols-2 mobile:auto-rows-[140px] mobile:gap-[8px]",
  ].join(" "),
  galleryPhoto: [
    "gallery-photo",
    "relative min-w-0 m-0 overflow-hidden [border:7px_solid_#df3833] rounded-[12px] bg-[#54100e] shadow-[0_7px_17px_rgba(0,0,0,.3)]",
    "[&_img]:object-cover [&_img]:[transition:transform_.35s_ease]",
    "[&:hover_img]:[transform:scale(1.04)]",
    "[&.gallery-photo-1]:[grid-row:span_2]",
    "[&.gallery-photo-4]:[grid-column:span_2]",
    "[&.gallery-photo-7]:[grid-column:span_2]",
    "mobile:[border-width:4px] mobile:rounded-[7px]",
    "mobile:[&.gallery-photo-1]:[grid-row:span_2]",
    "mobile:[&.gallery-photo-4]:[grid-column:span_1]",
    "mobile:[&.gallery-photo-7]:[grid-column:span_1]",
  ].join(" "),
};
