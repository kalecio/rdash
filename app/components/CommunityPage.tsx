import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";

const about = "A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.";

export function CommunityPage() {
  return (
    <div className={styles.site}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[#e53935] mobile:block" />
      <Header communityDesign />
      <main className={styles.main}>
        <header className={styles.intro}>
          <h1>COMUNIDADE</h1>
          <p>Saiba mais sobre a nossa comunidade!</p>
        </header>

        <picture className={styles.heroPhoto}>
          <source media="(max-width: 600px)" srcSet="/assets/community-hero-mobile.png" />
          <Image src="/assets/community-hero.png" alt="Jogadores participando de um encontro da comunidade R-DASH" width={2476} height={1234} className="h-full w-full object-cover" preload unoptimized />
        </picture>

        <section className={styles.story} aria-label="Sobre a comunidade">
          <div className={styles.copy}>
            <article>
              <h2>QUEM SOMOS?</h2>
              <p>Somos uma comunidade Recifense focada em Anime Fighters. Temos encontros mensais com torneios e premiações.</p>
            </article>
            <article>
              <h2>ONDE ESTAMOS?</h2>
              <p>Nossos encontros variam de local, você pode saber mais acompanhando nossas redes sociais ou se juntando aos nossos grupos.</p>
            </article>
          </div>
          <picture className={styles.locationPhoto}>
            <source media="(max-width: 600px)" srcSet="/assets/community-location-mobile.png" />
            <Image src="/assets/community-location.png" alt="Partida de jogo de luta em uma TV durante um encontro R-DASH" width={1272} height={918} className="h-full w-full object-cover" unoptimized />
          </picture>
        </section>

        <Image src="/assets/community-controls.svg" alt="" aria-hidden="true" width={134} height={150} className="absolute z-2 left-[1270px] top-[544px] mobile:hidden" unoptimized />

        <section className={styles.join} aria-labelledby="community-join-title">
          <Image src="/assets/community-join-panel.svg" alt="" width={1440} height={357} className="absolute left-0 top-[106px] max-w-none mobile:hidden" unoptimized />
          <picture className={styles.mascot}>
            <source media="(max-width: 600px)" srcSet="/assets/community-mascot-mobile.png" />
            <Image src="/assets/community-mascot.png" alt="" width={1076} height={1176} className="h-full w-full" unoptimized />
          </picture>
          <div className={styles.joinCopy}>
            <h2 id="community-join-title">JUNTE-SE A NÓS</h2>
            <p>Faça parte da nossa comunidade!</p>
          </div>
          <div className={styles.joinLinks}>
            <a href="https://discord.com/">Nosso Discord</a>
            <a href="https://chat.whatsapp.com/">Nosso Grupo no WPP</a>
          </div>
        </section>
      </main>

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
    </div>
  );
}

const styles = {
  site: "community-site relative isolate mx-auto h-[2770px] w-[1440px] overflow-x-clip bg-[#881411] text-white [zoom:min(1,_calc(100vw_/_1440px))] mobile:h-[1630px] mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  main: "absolute inset-0 h-[2770px] w-[1440px] overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/assets/brickwall.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-30 mobile:h-[1630px] mobile:w-[402px]",
  intro: "absolute left-[100px] top-[210px] z-1 [&_h1]:m-0 [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[32px] [&_p]:font-medium [&_p]:leading-[42px] [&_p]:text-[#ededed] mobile:left-[16px] mobile:top-[137px] mobile:[&_h1]:text-[32px] mobile:[&_h1]:leading-[42px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  heroPhoto: "absolute left-[102px] top-[346px] z-1 block h-[617px] w-[1238px] overflow-hidden rounded-[15px] mobile:left-[16px] mobile:top-[237px] mobile:h-[221px] mobile:w-[370px]",
  story: "absolute left-[102px] top-[1027px] z-1 h-[459px] w-[1238px] mobile:left-[16px] mobile:top-[482px] mobile:h-[328px] mobile:w-[370px]",
  copy: "flex w-[528px] flex-col gap-[49px] [&_h2]:m-0 [&_h2]:text-[48px] [&_h2]:font-bold [&_h2]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[24px] [&_p]:font-medium [&_p]:leading-[31px] mobile:w-[370px] mobile:gap-[16px] mobile:[&_h2]:text-[20px] mobile:[&_h2]:leading-[26px] mobile:[&_p]:text-[12px] mobile:[&_p]:leading-[16px] mobile:[&_p]:text-[#ededed]",
  locationPhoto: "absolute left-[602px] top-0 block h-[459px] w-[636px] overflow-hidden rounded-[15px] mobile:left-0 mobile:top-[184px] mobile:h-[144px] mobile:w-[370px]",
  join: "absolute left-0 top-[1654px] z-1 h-[588px] w-[1440px] mobile:top-[834px] mobile:h-[802px] mobile:w-[402px] mobile:bg-[#e84e4a]",
  mascot: "absolute left-0 top-0 z-1 block h-[588px] w-[538px] mobile:left-[168px] mobile:top-[239px] mobile:h-[94px] mobile:w-[66px]",
  joinCopy: "absolute left-[543px] top-[129px] [&_h2]:m-0 [&_h2]:whitespace-nowrap [&_h2]:text-[64px] [&_h2]:font-bold [&_h2]:italic [&_h2]:leading-[83px] [&_p]:mt-[16px] [&_p]:text-[24px] [&_p]:font-medium [&_p]:leading-[31px] mobile:left-[41px] mobile:top-[35px] mobile:w-[319px] mobile:text-center mobile:[&_h2]:text-[32px] mobile:[&_h2]:leading-[42px] mobile:[&_p]:mt-[8px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  joinLinks: "absolute left-[538px] top-[324px] flex gap-[32px] [&_a]:flex [&_a]:h-[80px] [&_a]:w-[392px] [&_a]:items-center [&_a]:justify-center [&_a]:rounded-[10px] [&_a]:bg-[#5f0808] [&_a]:text-[24px] [&_a]:font-medium [&_a]:leading-[16px] [&_a:hover]:bg-[#42100f] mobile:left-[86px] mobile:top-[131px] mobile:flex-col mobile:gap-[20px] mobile:[&_a]:h-[47px] mobile:[&_a]:w-[229px] mobile:[&_a]:text-[20px]",
  footer: "absolute left-0 top-[2277px] z-5 h-[493px] w-[1440px] text-[#fafafa] [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:leading-[29px] [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 [&_li]:mt-[8px] [&_li:first-child]:mt-0 [&_a]:block [&_a]:p-[8px] [&_a]:text-[16px] [&_a]:leading-[21px] [&_a]:tracking-[-.176px] [&_a:hover]:underline mobile:left-[16px] mobile:top-[1135px] mobile:h-[495px] mobile:w-[370px] mobile:rounded-t-[16px] mobile:bg-[#e53935] mobile:shadow-[0_12px_50.5px_rgba(0,0,0,.25)]",
  footerAbout: "absolute left-[100px] top-[111.68px] w-[313.21px] [&_h2]:mt-[8px] [&_h2]:p-[8px] [&_p]:mt-[8px] [&_p]:p-[8px] [&_p]:text-[16px] [&_p]:leading-[21px] mobile:left-[8px] mobile:top-[32px] mobile:w-[354px] mobile:[&_h2]:mt-0",
  footerSitemap: "absolute left-[675.61px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:hidden",
  footerSocial: "absolute left-[1146px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:left-[8px] mobile:top-[251px]",
};
