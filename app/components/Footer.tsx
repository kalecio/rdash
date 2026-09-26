import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.redFooter}>
      <img src="/assets/red-footer.svg" alt="" className={styles.footerOutline} />
      <div className={styles.footerColumns}>
        <section className={styles.footerAbout}>
          <Image src="/assets/rdash_ mini_logo.png" alt="R-DASH" width={79} height={79} />
          <h2><span className={styles.footerAboutDesktop}>Sobre nós</span><span className={styles.footerAboutMobile}>Sobre</span></h2>
          <p>A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.</p>
        </section>
        <section className={styles.footerSitemap}>
          <h2>Sitemap</h2>
          <div><ul><li><Link href="/">Home</Link></li><li><Link href="/comunidade">Comunidade</Link></li><li><Link href="/eventos">Eventos</Link></li></ul><ul><li><Link href="/galeria">Galeria</Link></li><li><Link href="/loja">Loja</Link></li></ul></div>
        </section>
        <section className={styles.footerSocial}>
          <h2>Social</h2>
          <ul className={styles.footerSocialDesktop}><li><a href="https://www.instagram.com/r_dash_/">Instagram</a></li><li><a href="https://www.twitch.tv/r_dash_">Twitch</a></li><li><a href="https://www.youtube.com/@rdashrecife">YouTube</a></li></ul>
          <ul className={styles.footerSocialMobile}><li><a href="https://www.instagram.com/r_dash_/">Instagram</a></li><li><a href="https://www.facebook.com/rdashrecife">Facebook</a></li><li><a href="https://www.youtube.com/@rdashrecife">YouTube</a></li></ul>
        </section>
      </div>
      <div className={styles.footerMascot} aria-hidden="true">
        <Image className={styles.footerMascotImage} src="/assets/raissa_dash.gif" alt="" width={2048} height={2048} unoptimized />
      </div>
    </footer>
  );
}

const styles = {
  redFooter: [
    "relative z-5 mx-auto w-[1440px] h-[493px] bg-[transparent] overflow-visible",
    "mobile:w-[370px] mobile:h-[495px] mobile:overflow-hidden mobile:rounded-[16px_16px_0_0] mobile:bg-[#e53935]",
    "mobile:[&::before]:content-[''] mobile:[&::before]:absolute mobile:[&::before]:inset-0 mobile:[&::before]:z-0 mobile:[&::before]:pointer-events-none mobile:[&::before]:[background:url('/assets/red-texture.png')_center_/_406px_375px_repeat] mobile:[&::before]:opacity-[.14] mobile:[&::before]:mix-blend-color-dodge",
  ].join(" "),
  footerOutline: [
    "absolute z-1 left-[-17px] top-[-25px] w-auto h-auto max-w-none",
    "mobile:hidden",
  ].join(" "),
  footerColumns: [
    "absolute inset-[95px_100px_55px] grid grid-cols-[320px_1fr_220px] gap-[120px] z-2 text-[#fafafa] [font-family:var(--font-dm-sans),sans-serif]",
    "[&_h2]:m-[0_0_12px] [&_h2]:text-[length:22px] [&_h2]:font-semibold",
    "[&_ul]:list-none [&_ul]:m-0 [&_ul]:p-0 [&_ul]:text-[length:16px] [&_ul]:leading-[1.9]",
    "mobile:inset-[24px_8px_64px] mobile:flex mobile:flex-col mobile:gap-[24px] mobile:z-2 mobile:text-[#fafafa]",
    "mobile:[&_h2]:m-0 mobile:[&_h2]:p-[8px] mobile:[&_h2]:text-[length:22px] mobile:[&_h2]:font-semibold",
  ].join(" "),
  footerAbout: [
    "[&_>_img]:object-contain",
    "[&_h2]:mt-[8px]",
    "[&_p]:m-0 [&_p]:text-[length:16px] [&_p]:leading-[1.3]",
    "mobile:flex mobile:flex-col mobile:gap-[8px]",
    "mobile:[&_>_img]:hidden",
    "mobile:[&_h2]:m-0 mobile:[&_h2]:p-[8px] mobile:[&_h2]:text-[length:22px] mobile:[&_h2]:font-semibold",
    "mobile:[&_p]:p-[8px] mobile:[&_p]:text-[length:16px] mobile:[&_p]:leading-[1.3]",
  ].join(" "),
  footerAboutDesktop: [
    "mobile:hidden",
  ].join(" "),
  footerAboutMobile: [
    "hidden",
    "mobile:block",
  ].join(" "),
  footerSitemap: [
    "[&_>_div]:flex [&_>_div]:gap-[65px]",
    "mobile:hidden",
  ].join(" "),
  footerSocial: [
    "[&_ul]:leading-[1.9]",
    "mobile:flex mobile:flex-col mobile:gap-0",
  ].join(" "),
  footerSocialDesktop: [
    "mobile:hidden",
  ].join(" "),
  footerSocialMobile: [
    "hidden",
    "mobile:flex mobile:flex-col mobile:gap-[8px] mobile:list-none mobile:m-0 mobile:p-0 mobile:text-[length:16px] mobile:leading-[normal]",
    "mobile:[&_a]:block mobile:[&_a]:p-[8px]",
  ].join(" "),
  footerMascot: [
    "absolute z-3 top-[-117px] left-[-17px] w-[241px] h-[230px] overflow-hidden",
    "mobile:top-[-50px] mobile:left-[-2px] mobile:w-[68px] mobile:h-[65px]",
  ].join(" "),
  footerMascotImage: "absolute left-[-76.11%] top-[-158.16%] w-[261.98%] h-[273.8%] max-w-none object-fill",
};
