import { Footer } from "./Footer";
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
          role="img"
          aria-label="Encontro da comunidade R-DASH jogando Anime Fighters"
        />

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
          <div
            className={styles.communityLocationPhoto}
            role="img"
            aria-label="Jogadores reunidos em torno de uma TV durante um encontro"
          />
        </section>

        <section className={styles.communityJoin} aria-labelledby="community-join-title">
          <div className={styles.communityJoinMascot} aria-hidden="true">
            <img src="/assets/raissa_dash.gif" alt="" />
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
    "relative isolate w-[1440px] h-[2853px] m-[0_auto] overflow-hidden [zoom:min(1,_calc(100vw_/_1440px))] text-white bg-[#881411]",
    "mobile:w-[402px] mobile:h-[1630px] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
  communityMain: [
    "absolute inset-0 w-[1440px] h-[2770px] overflow-hidden bg-[#8e1d17]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-[88px_0_0] [&::before]:z-0 [&::before]:pointer-events-none [&::before]:bg-[#90211b] [&::before]:[background-image:linear-gradient(180deg,_rgba(43,4,4,.28),_transparent_18%,_rgba(43,4,4,.2)),_linear-gradient(0deg,_transparent_0_70px,_rgba(60,10,10,.64)_71px_82px,_transparent_83px_164px),_linear-gradient(90deg,_transparent_0_155px,_rgba(60,10,10,.52)_156px_168px,_transparent_169px_324px)] [&::before]:[background-size:100%_100%,_324px_164px,_324px_164px] [&::before]:[background-position:0_0,_0_0,_0_0]",
    "mobile:w-[402px] mobile:h-[1630px] mobile:bg-[#8e1d17]",
    "mobile:[&::before]:inset-[96px_0_0] mobile:[&::before]:bg-[#90211b] mobile:[&::before]:[background-image:linear-gradient(180deg,_rgba(43,4,4,.3),_transparent_18%,_rgba(43,4,4,.2)),_linear-gradient(0deg,_transparent_0_34px,_rgba(60,10,10,.64)_35px_41px,_transparent_42px_82px),_linear-gradient(90deg,_transparent_0_77px,_rgba(60,10,10,.52)_78px_84px,_transparent_85px_162px)] mobile:[&::before]:[background-size:100%_100%,_162px_82px,_162px_82px]",
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
    "absolute z-1 overflow-hidden [border:1px_solid_rgba(255,255,255,.2)] rounded-[18px] [background:linear-gradient(135deg,_rgba(15,13,15,.28),_rgba(15,13,15,.8)),_url('/assets/red-texture.png')_center/cover] shadow-[0_10px_24px_rgba(30,0,0,.25)] left-[100px] top-[342px] w-[1240px] h-[620px]",
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
    "overflow-hidden [border:1px_solid_rgba(255,255,255,.2)] rounded-[18px] [background:linear-gradient(135deg,_rgba(15,13,15,.28),_rgba(15,13,15,.8)),_url('/assets/red-texture.png')_center/cover] shadow-[0_10px_24px_rgba(30,0,0,.25)] w-[620px] h-[470px]",
    "mobile:rounded-[9px] mobile:w-[362px] mobile:h-[150px]",
  ].join(" "),
  communityJoin: [
    "absolute z-1 left-0 top-[1750px] w-[1440px] h-[370px] flex items-center justify-center bg-[#df3833]",
    "mobile:left-0 mobile:top-[820px] mobile:w-[402px] mobile:h-[295px]",
  ].join(" "),
  communityJoinMascot: [
    "absolute left-[8px] top-[-48px] w-[250px] h-[300px] overflow-hidden",
    "[&_img]:absolute [&_img]:left-[-76.11%] [&_img]:top-[-158.16%] [&_img]:w-[261.98%] [&_img]:h-[273.8%] [&_img]:max-w-none [&_img]:object-fill",
    "mobile:left-0 mobile:top-[-24px] mobile:w-[88px] mobile:h-[105px]",
  ].join(" "),
  communityJoinCopy: [
    "flex flex-col items-center text-center",
    "[&_h2]:m-[0_0_6px] [&_h2]:text-[length:40px] [&_h2]:italic [&_h2]:font-extrabold [&_h2]:leading-[1.1]",
    "[&_p]:m-[0_0_22px] [&_p]:text-[length:18px]",
    "mobile:ml-[62px]",
    "mobile:[&_h2]:mb-[4px] mobile:[&_h2]:text-[length:22px]",
    "mobile:[&_p]:mb-[12px] mobile:[&_p]:text-[length:11px]",
  ].join(" "),
  communityJoinLinks: [
    "flex gap-[22px]",
    "[&_a]:min-w-[245px] [&_a]:p-[15px_25px] [&_a]:rounded-[5px] [&_a]:bg-[#5b0c0a] [&_a]:text-[length:18px] [&_a]:text-center",
    "[&_a:hover]:bg-[#42100f]",
    "mobile:flex-col mobile:gap-[8px]",
    "mobile:[&_a]:min-w-[170px] mobile:[&_a]:p-[9px_12px] mobile:[&_a]:text-[length:11px]",
  ].join(" "),
};
