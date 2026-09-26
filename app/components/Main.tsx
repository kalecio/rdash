import { Hero } from "./Hero";
import { Events } from "./Events";
import { News } from "./News";
import { Crt } from "./Crt";
import { GamesCarousel } from "./GamesCarousel";

export function Main() {
  return (
    <main className={styles.redMain}>
      <div className={styles.redTextureOverlay} aria-hidden="true" />
      <div className={styles.redMetroOverlay} aria-hidden="true" />
      <Hero />
      <Events />
      <News />
      <Crt />
      <GamesCarousel />
    </main>
  );
}

const styles = {
  redMain: [
    "absolute inset-[0_0_493px] h-[4653px] overflow-visible bg-[#881411]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:z-0 [&::before]:w-[1715px] [&::before]:h-[2492px] [&::before]:pointer-events-none [&::before]:opacity-[.52] [&::before]:mix-blend-color-dodge [&::before]:[background:url('/assets/red-scan.png')_center_/_cover_no-repeat] [&::before]:left-[-62px] [&::before]:top-[630px]",
    "[&::after]:content-[''] [&::after]:absolute [&::after]:z-0 [&::after]:w-[1715px] [&::after]:h-[2492px] [&::after]:pointer-events-none [&::after]:opacity-[.52] [&::after]:mix-blend-color-dodge [&::after]:[background:url('/assets/red-scan.png')_center_/_cover_no-repeat] [&::after]:left-[-47px] [&::after]:top-[3122px] [&::after]:[transform:scaleY(-1)]",
    "mobile:absolute mobile:inset-[0_auto_auto_0] mobile:w-[402px] mobile:h-[1947px] mobile:overflow-visible mobile:bg-[#881411]",
    "mobile:[&::before]:left-[-93px] mobile:[&::before]:top-[297px] mobile:[&::before]:w-[517px] mobile:[&::before]:h-[750px] mobile:[&::before]:[background-size:100%_100%]",
    "mobile:[&::after]:left-[-37px] mobile:[&::after]:top-[1183px] mobile:[&::after]:w-[546px] mobile:[&::after]:h-[794px] mobile:[&::after]:[background-size:100%_100%]",
  ].join(" "),
  redTextureOverlay: [
    "absolute z-0 left-0 top-[630px] w-[1440px] h-[4140px] pointer-events-none opacity-[.14] mix-blend-color-dodge [background:url('/assets/red-texture.png')_center_top_/_1440px_1330px_repeat-y]",
    "mobile:left-[-14px] mobile:top-[305.84px] mobile:w-[406.5px] mobile:h-[1641px] mobile:[background-size:406.5px_375.434px]",
  ].join(" "),
  redMetroOverlay: [
    "absolute z-0 left-[-62px] top-[1380px] w-[1160px] h-[1160px] pointer-events-none opacity-[.07] mix-blend-color-dodge [background:url('/assets/red-metro.png')_center_/_cover_no-repeat]",
    "mobile:left-[-31.47px] mobile:top-[517.55px] mobile:w-[327.45px] mobile:h-[327.45px]",
  ].join(" "),
};
