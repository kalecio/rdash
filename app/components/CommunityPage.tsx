import { Footer } from "./Footer";
import { GalleryImagePlaceholder } from "./GalleryImagePlaceholder";
import { Header } from "./Header";

export function CommunityPage() {
  return (
    <div className={styles.communitySite}>
      <Header />
      <main className={styles.communityMain}>
        <header className={styles.communityIntro}>
          <h1>COMUNIDADE</h1>
          <p>Saiba mais sobre a nossa comunidade!</p>
        </header>

        <div
          className={styles.communityHeroPhoto}
        >
          <GalleryImagePlaceholder description="Encontro da comunidade R-DASH" />
        </div>

        <section className={styles.communityStory} aria-label="Sobre a comunidade">
          <div className={styles.communityCopy}>
            <article>
              <h2>QUEM SOMOS?</h2>
              <p>
                Somos uma comunidade Recifense focada em Anime Fighters. Temos
                encontros mensais com torneios e premiações.
              </p>
            </article>
            <article>
              <h2>ONDE ESTAMOS?</h2>
              <p>
                Nossos encontros variam de local, você pode saber mais
                acompanhando nossas redes sociais ou se juntando aos nossos
                grupos.
              </p>
            </article>
          </div>
          <div className={styles.communityLocationPhoto}>
            <GalleryImagePlaceholder description="Encontro de jogos da comunidade" />
          </div>
        </section>

        <section className={styles.communityJoin} aria-labelledby="community-join-title">
          <div className={styles.communityJoinMascot} aria-hidden="true">
            <img src="/assets/raissa.png" alt="" />
          </div>
          <div className={styles.communityJoinCopy}>
            <h2 id="community-join-title">JUNTE-SE A NÓS</h2>
            <p>Faça parte da nossa comunidade!</p>
            <div className={styles.communityJoinLinks}>
              <a href="https://discord.com/">Nosso Discord</a>
              <a href="https://chat.whatsapp.com/">Nosso Grupo no WPP</a>
            </div>
          </div>
        </section>
      </main>
      <div className="absolute inset-x-0 top-[2360px] mobile:top-[1135px]">
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  communitySite: [
    "community-site",
    "relative isolate w-[1440px] h-[2853px] m-[0_auto] overflow-x-clip [zoom:min(1,_calc(100vw_/_1440px))] text-white bg-[#881411]",
    "mobile:w-[402px] mobile:h-[1630px] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
  communityMain: [
    "absolute inset-0 w-[1440px] h-[2770px] overflow-hidden bg-[#881411]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-0 [&::before]:z-0 [&::before]:pointer-events-none [&::before]:opacity-30 [&::before]:bg-[url('/assets/brickwall.png')] [&::before]:bg-cover [&::before]:bg-center [&::before]:bg-no-repeat",
    "mobile:w-[402px] mobile:h-[1630px]",
  ].join(" "),
  communityIntro: [
    "absolute z-1 left-[100px] top-[211px]",
    "[&_h1]:m-[0_0_6px] [&_h1]:font-sans [&_h1]:text-[length:40px] [&_h1]:font-extrabold [&_h1]:leading-[1.1]",
    "[&_p]:m-0 [&_p]:text-[length:18px] [&_p]:leading-[1.3]",
    "mobile:left-[20px] mobile:top-[138px]",
    "mobile:[&_h1]:mb-[3px] mobile:[&_h1]:text-[length:20px]",
    "mobile:[&_p]:text-[length:12px]",
  ].join(" "),
  communityHeroPhoto: [
    "absolute z-1 overflow-hidden [border:1px_solid_rgba(255,255,255,.2)] rounded-[18px] shadow-[0_10px_24px_rgba(30,0,0,.25)] left-[100px] top-[342px] w-[1240px] h-[620px] [&_.gallery-image-placeholder]:rounded-[inherit]",
    "mobile:rounded-[9px] mobile:left-[20px] mobile:top-[220px] mobile:w-[362px] mobile:h-[220px]",
  ].join(" "),
  communityStory: [
    "absolute z-1 left-[100px] top-[1000px] grid w-[1240px] grid-cols-[540px_620px] gap-[80px] [align-items:start]",
    "mobile:left-[20px] mobile:top-[466px] mobile:flex mobile:w-[362px] mobile:flex-col mobile:gap-[14px]",
  ].join(" "),
  communityCopy: [
    "flex flex-col gap-[45px] pt-[6px]",
    "[&_h2]:m-[0_0_8px] [&_h2]:text-[length:32px] [&_h2]:leading-[1.15] [&_h2]:font-extrabold",
    "[&_p]:max-w-[490px] [&_p]:m-0 [&_p]:text-[length:20px] [&_p]:leading-[1.35] [&_p]:font-normal",
    "mobile:gap-[13px] mobile:pt-0",
    "mobile:[&_h2]:mb-[3px] mobile:[&_h2]:text-[length:14px]",
    "mobile:[&_p]:max-w-full mobile:[&_p]:text-[length:10px] mobile:[&_p]:leading-[1.35]",
  ].join(" "),
  communityLocationPhoto: [
    "overflow-hidden [border:1px_solid_rgba(255,255,255,.2)] rounded-[18px] shadow-[0_10px_24px_rgba(30,0,0,.25)] w-[620px] h-[470px] [&_.gallery-image-placeholder]:rounded-[inherit]",
    "mobile:rounded-[9px] mobile:w-[362px] mobile:h-[150px]",
  ].join(" "),
  communityJoin: [
    "absolute z-1 left-0 top-[1750px] w-[1440px] h-[370px] flex items-center bg-[#e94a45]",
    "mobile:left-0 mobile:top-[820px] mobile:w-[402px] mobile:h-[295px]",
  ].join(" "),
  communityJoinMascot: [
    "absolute left-[-55px] top-[-260px] w-[760px] h-[890px] overflow-hidden",
    "[&_img]:absolute [&_img]:inset-0 [&_img]:w-full [&_img]:h-full [&_img]:max-w-none [&_img]:object-contain",
    "mobile:left-0 mobile:top-[-24px] mobile:w-[88px] mobile:h-[105px]",
  ].join(" "),
  communityJoinCopy: [
    "absolute left-[540px] top-[24px] flex flex-col items-start text-left",
    "[&_h2]:m-[0_0_20px] [&_h2]:text-[length:60px] [&_h2]:italic [&_h2]:font-extrabold [&_h2]:leading-[1.1]",
    "[&_p]:m-[0_0_56px] [&_p]:text-[length:18px]",
    "mobile:left-[96px] mobile:top-[24px] mobile:items-start mobile:text-left",
    "mobile:[&_h2]:mb-[4px] mobile:[&_h2]:text-[length:22px]",
    "mobile:[&_p]:mb-[12px] mobile:[&_p]:text-[length:11px]",
  ].join(" "),
  communityJoinLinks: [
    "flex gap-[32px]",
    "[&_a]:min-w-[392px] [&_a]:p-[24px_25px] [&_a]:rounded-[10px] [&_a]:bg-[#5b0c0a] [&_a]:text-[length:18px] [&_a]:text-center",
    "[&_a:hover]:bg-[#42100f]",
    "mobile:flex-col mobile:gap-[8px]",
    "mobile:[&_a]:min-w-[170px] mobile:[&_a]:p-[9px_12px] mobile:[&_a]:text-[length:11px]",
  ].join(" "),
};
