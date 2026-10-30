import Image from "next/image";
import Link from "next/link";

const about = "A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.";

export function DesignFooter() {
  return (
      <footer className={styles.footer}>
        <Image src="/assets/community-footer.svg" alt="" width={1440} height={518} className="absolute left-0 top-[-25px] max-w-none mobile:hidden" unoptimized />
        <section className={styles.footerAbout}>
          <Image src="/assets/community-footer-logo.png" alt="R-DASH" width={79} height={79} className="mobile:hidden" />
          <h2><span className="mobile:hidden">Sobre nós</span><span className="hidden mobile:inline">Sobre</span></h2>
          <p>{about}</p>
        </section>
        <section className={styles.footerSitemap}>
          <h2>Sitemap</h2>
          <div className="flex gap-[48px]">
            <ul><li><Link href="/">Home</Link></li><li><Link href="/comunidade">Comunidade</Link></li><li><Link href="/eventos">Eventos</Link></li></ul>
            <ul><li><Link href="/galeria">Galeria</Link></li><li><Link href="/loja">Loja</Link></li></ul>
          </div>
        </section>
        <section className={styles.footerSocial}>
          <h2>Social</h2>
          <ul>
            <li><a href="https://www.instagram.com/r_dash_/">Instagram</a></li>
            <li><a href="https://www.facebook.com/rdashrecife">Facebook</a></li>
            <li><a href="https://www.youtube.com/@rdashrecife">Youtube</a></li>
          </ul>
        </section>
      </footer>
  );
}

const styles = {
  footer: "relative left-0 top-0 z-5 h-[493px] w-[1440px] text-[#fafafa] [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:leading-[29px] [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 [&_li]:mt-[8px] [&_li:first-child]:mt-0 [&_a]:block [&_a]:p-[8px] [&_a]:text-[16px] [&_a]:leading-[21px] [&_a]:tracking-[-.176px] [&_a:hover]:underline mobile:left-0 mobile:top-0 mobile:h-[495px] mobile:w-[370px] mobile:rounded-t-[16px] mobile:bg-[#e53935] mobile:shadow-[0_12px_50.5px_rgba(0,0,0,.25)]",
  footerAbout: "absolute left-[100px] top-[111.68px] w-[313.21px] [&_h2]:mt-[8px] [&_h2]:p-[8px] [&_p]:mt-[8px] [&_p]:p-[8px] [&_p]:text-[16px] [&_p]:leading-[21px] mobile:left-[8px] mobile:top-[32px] mobile:w-[354px] mobile:[&_h2]:mt-0",
  footerSitemap: "absolute left-[675.61px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:hidden",
  footerSocial: "absolute left-[1146px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:left-[8px] mobile:top-[251px]",
};
