"use client";

import { useAsset, useSiteTheme } from "./SiteContent";
import Image from "next/image";

export function Hero() {
  const asset = useAsset();
  const { theme } = useSiteTheme();
  return (
    <section id="home-hero" className={styles.redHero} aria-label="R-DASH">
      <Image unoptimized className={`${styles.heroBackdrop}${theme === 'blue' ? ' object-cover [object-position:50%_58.13%]' : ''}`} src={asset("/assets/home-hero-background.png")} alt="" width={1440} height={611} priority />
      {theme === 'red' && <div className={styles.heroShade} />}
      {theme !== 'blue' && <>
        <Image unoptimized className={theme === 'purple' ? styles.heroPurpleLeft : styles.heroSol} src={asset("/assets/red-sol.png")} alt={theme === 'purple' ? 'Hyde' : 'Sol Badguy'} width={theme === 'purple' ? 318 : 202} height={theme === 'purple' ? 420 : 431} priority />
        <Image unoptimized className={theme === 'purple' ? styles.heroPurpleRight : styles.heroKy} src={asset("/assets/red-ky.png")} alt={theme === 'purple' ? 'Wagner' : 'Ky Kiske'} width={theme === 'purple' ? 368 : 376} height={theme === 'purple' ? 397 : 431} priority />
      </>}
      <Image unoptimized className={styles.heroLogo} src={asset("/assets/red-logo.png")}  alt="R-DASH" width={339} height={174} priority />
      <div className={styles.heroRedEdge} />
      <Image unoptimized className={styles.heroRip} src={asset("/assets/red-rip.png")}  alt="" width={1479} height={192} />
    </section>
  );
}

const styles = {
  redHero: [
    "absolute inset-[0_0_auto] h-[716px] overflow-hidden z-1",
    "mobile:absolute mobile:inset-[0_auto_auto_0] mobile:w-[402px] mobile:h-[305px] mobile:bg-[var(--cms-dark)]",
  ].join(" "),
  heroBackdrop: [
    "absolute left-0 top-0 w-[1440px] h-[611px] max-w-none",
    "mobile:left-[-82px] mobile:top-[50px] mobile:w-[566px] mobile:h-[240px] mobile:object-cover",
  ].join(" "),
  heroShade: [
    "absolute inset-[0_0_auto] h-[630px] [background:linear-gradient(180deg,_rgba(0,0,0,.38),_transparent_64%,_rgba(0,0,0,.2))]",
    "mobile:top-[49px] mobile:h-[215px]",
  ].join(" "),
  heroSol: [
    "absolute object-contain left-[241px] top-[133px] w-[202px] h-[431px]",
    "mobile:left-[20px] mobile:top-[135px] mobile:w-[75px] mobile:h-[160px]",
  ].join(" "),
  heroKy: [
    "absolute object-contain left-[964px] top-[133px] w-[376px] h-[431px]",
    "mobile:left-auto mobile:right-[12px] mobile:top-[135px] mobile:w-[112px] mobile:h-[145px]",
  ].join(" "),
  heroPurpleLeft: "absolute object-contain left-[130px] top-[132px] w-[318px] h-[420px] mobile:left-[12px] mobile:top-[135px] mobile:w-[110px] mobile:h-[145px]",
  heroPurpleRight: "absolute -scale-x-100 object-contain left-[1020px] top-[155px] w-[368px] h-[397px] mobile:left-auto mobile:right-[12px] mobile:top-[140px] mobile:w-[120px] mobile:h-[130px]",
  heroLogo: [
    "absolute object-contain left-[551px] top-[275px] w-[339px] h-[174px]",
    "mobile:left-[130px] mobile:top-[129px] mobile:w-[143px] mobile:h-[73px]",
  ].join(" "),
  heroRedEdge: [
    "absolute z-2 top-[592px] left-0 w-[1440px] h-[38px] rounded-[15px_15px_0_0] bg-[var(--cms-heroEdge)]",
    "mobile:left-[-61px] mobile:top-[290px] mobile:w-[525px] mobile:h-[14px] mobile:rounded-[9px]",
  ].join(" "),
  heroRip: [
    "absolute z-3 top-[523px] left-[-22px] w-[1479px] h-[192px] max-w-none object-contain",
    "mobile:left-[-59px] mobile:top-[264px] mobile:w-[509px] mobile:h-[66px]",
  ].join(" "),
};
