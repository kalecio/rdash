import Image from "next/image";

export function Hero() {
  return (
    <section id="home-hero" className={styles.redHero} aria-label="R-DASH">
      <Image className={styles.heroBackdrop} src="/assets/red-hero-bg.png" alt="" width={1440} height={900} priority />
      <div className={styles.heroShade} />
      <Image className={styles.heroSol} src="/assets/red-sol.png" alt="Sol Badguy" width={202} height={431} priority />
      <Image className={styles.heroKy} src="/assets/red-ky.png" alt="Ky Kiske" width={376} height={431} priority />
      <Image className={styles.heroLogo} src="/assets/red-logo.png" alt="R-DASH" width={339} height={174} priority />
      <div className={styles.heroRedEdge} />
      <Image className={styles.heroRip} src="/assets/red-rip.png" alt="" width={1479} height={192} />
    </section>
  );
}

const styles = {
  redHero: [
    "absolute inset-[0_0_auto] h-[716px] overflow-hidden z-1 bg-[#881411]",
    "mobile:absolute mobile:inset-[0_auto_auto_0] mobile:w-[402px] mobile:h-[305px] mobile:bg-[#5b0c0a]",
  ].join(" "),
  heroBackdrop: [
    "absolute left-0 top-[-209px] w-[1440px] h-[900px] max-w-none",
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
  heroLogo: [
    "absolute object-contain left-[551px] top-[275px] w-[339px] h-[174px]",
    "mobile:left-[130px] mobile:top-[129px] mobile:w-[143px] mobile:h-[73px]",
  ].join(" "),
  heroRedEdge: [
    "absolute z-2 top-[592px] left-0 w-[1440px] h-[124px] rounded-[15px_15px_0_0] bg-[#df3833]",
    "mobile:left-[-61px] mobile:top-[290px] mobile:w-[525px] mobile:h-[14px] mobile:rounded-[9px]",
  ].join(" "),
  heroRip: [
    "absolute z-3 top-[523px] left-[-22px] w-[1479px] h-[192px] max-w-none object-contain",
    "mobile:left-[-59px] mobile:top-[264px] mobile:w-[509px] mobile:h-[66px]",
  ].join(" "),
};
