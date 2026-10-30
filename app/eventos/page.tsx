import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Eventos e torneios de jogos de luta",
  description:
    "Veja os próximos encontros, torneios e partidas da comunidade R-DASH em Recife. Jogue, conheça outros fãs e participe.",
};

const pastEvents = [
  {
    title: "Jogatina mensal",
    description: "Um dia inteiro de partidas, desafios e encontro da comunidade.",
    image: "/assets/red-news-1.png",
    date: "EDIÇÃO ANTERIOR",
  },
  {
    title: "Torneio de Anime Fighters",
    description: "Competição amistosa para jogadores de todos os níveis.",
    image: "/assets/red-news-2.png",
    date: "NA COMUNIDADE",
  },
  {
    title: "Encontro R-DASH",
    description: "Conheça a galera, jogue com a gente e faça novas amizades.",
    image: "/assets/red-event-art.png",
    date: "RECIFE · PE",
  },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

export default function EventosPage() {
  return (
    <div className={styles.eventsSite}>
      <Header />
      <main className={styles.eventsMain}>
        <section className={styles.eventsHero} aria-labelledby="events-title">
          <div className={styles.eventsHeroCopy}>
            <p className={styles.eventsEyebrow}>R-DASH · RECIFE</p>
            <h1 id="events-title">EVENTOS</h1>
            <p className={styles.eventsLead}>Encontre a comunidade, jogue e viva Anime Fighters com a gente.</p>
          </div>
          <div className={styles.eventsHeroArt} aria-hidden="true">
            <Image src="/assets/red-event-art.png" alt="" fill priority sizes="(max-width: 700px) 100vw, 55vw" />
            <span>PLAY<br />TOGETHER</span>
          </div>
          <div className={styles.eventsHeroScribble} aria-hidden="true">GG!</div>
        </section>

        <section className={styles.eventsFeatured} aria-labelledby="featured-event-title">
          <div className={styles.eventsSectionHeading}>
            <p className={styles.eventsEyebrow}>PRÓXIMO ENCONTRO</p>
            <h2 id="featured-event-title">Jogatina mensal</h2>
            <p>Um dia de torneio, partidas casuais e muita conversa.</p>
          </div>
          <article className={styles.eventsFeatureCard}>
            <div className={styles.eventsFeaturePoster}>
              <Image src="/assets/red-event-poster.png" alt="Cartaz do torneio de Under Night In-Birth II" fill sizes="(max-width: 700px) 88vw, 40vw" />
              <span className={styles.eventsPosterTape} aria-hidden="true" />
            </div>
            <div className={styles.eventsFeatureDetails}>
              <div className={styles.eventsDetailTopline}><span className={styles.eventsLiveDot} /> PRÓXIMO EVENTO <span className={styles.eventsDetailId}>RD–001</span></div>
              <h3>Jogatina<br className={styles.eventsDesktopBreak} /> mensal</h3>
              <p className={styles.eventsFeatureDescription}>Chega junto para jogar, torcer e conhecer outros fãs de Anime Fighters. A inscrição é feita no local.</p>
              <div className={styles.eventsMetaGrid}>
                <div className={styles.eventsMetaItem}><span className={styles.eventsMetaIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg></span><span><small>QUANDO</small><strong>Acompanhe as novidades</strong></span></div>
                <div className={styles.eventsMetaItem}><span className={styles.eventsMetaIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span><small>ONDE</small><strong>Galeria Hora Center<br />Espinheiro · Recife</strong></span></div>
              </div>
              <div className={styles.eventsVenueMap}><Image src="/assets/red-event-map.png" alt="Mapa da Galeria Hora Center" fill sizes="(max-width: 700px) 88vw, 38vw" /></div>
              <div className={styles.eventsFeatureActions}><a className={styles.eventsCta} href="https://www.instagram.com/r_dash_/">Saiba como participar <ArrowIcon /></a><span className={styles.eventsPrice}>R$ 10 <small>pago no local</small></span></div>
            </div>
          </article>
        </section>

        <section className={styles.eventsArchive} aria-labelledby="archive-title">
          <div className={styles.eventsArchiveHeading}>
            <div><p className={styles.eventsEyebrow}>DA NOSSA COMUNIDADE</p><h2 id="archive-title">Mais encontros.<br /><span>Mais histórias.</span></h2></div>
            <p>Relembre alguns dos momentos que fazem a R-DASH acontecer.</p>
          </div>
          <div className={styles.eventsArchiveGrid}>
            {pastEvents.map((event) => (
              <article className={styles.eventsArchiveCard} key={event.title}>
                <div className={styles.eventsArchiveImage}><Image src={event.image} alt="" fill sizes="(max-width: 700px) 88vw, 30vw" /></div>
                <div className={styles.eventsArchiveContent}><p className={styles.eventsEyebrow}>{event.date}</p><h3>{event.title}</h3><p>{event.description}</p><span className={styles.eventsCardArrow}><ArrowIcon /></span></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.eventsCommunityCta} aria-labelledby="events-community-title">
          <div className={styles.eventsCtaMascot} aria-hidden="true"><Image src="/assets/raissa_dash.gif" alt="" fill sizes="180px" /></div>
          <div><p className={styles.eventsEyebrow}>A PRÓXIMA PARTIDA PODE SER SUA</p><h2 id="events-community-title">Bora jogar?</h2><p>Acompanhe nossas redes e fique por dentro dos próximos encontros.</p></div>
          <a href="https://www.instagram.com/r_dash_/">Acompanhar novidades <ArrowIcon /></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  eventsSite: [
    "events-site",
    "relative isolate w-[1440px] [zoom:min(1,_calc(100vw_/_1440px))] m-[0_auto] overflow-x-clip text-white bg-[#881411]",
    "mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))] mobile:overflow-x-clip",
  ].join(" "),
  eventsMain: [
    "relative -mt-[133px] mobile:mt-0 min-h-[2330px] overflow-hidden bg-[#881411]",
    "[&::before]:absolute [&::before]:z-0 [&::before]:inset-0 [&::before]:content-[''] [&::before]:pointer-events-none [&::before]:[background:url('/assets/red-texture.png')_center_top_/_1440px_1330px_repeat-y] [&::before]:opacity-[.14] [&::before]:mix-blend-color-dodge",
    "[&::after]:absolute [&::after]:z-0 [&::after]:top-[1090px] [&::after]:left-[-140px] [&::after]:w-[600px] [&::after]:h-[600px] [&::after]:content-[''] [&::after]:pointer-events-none [&::after]:[background:url('/assets/red-metro.png')_center_/_contain_no-repeat] [&::after]:opacity-[.08]",
    "[&_>_section]:relative [&_>_section]:z-1",
    "mobile:min-h-0",
    "mobile:[&::before]:[background-size:402px_372px]",
  ].join(" "),
  eventsHero: [
    "flex min-h-[612px] items-center p-[130px_8%_75px] isolate overflow-hidden [background:linear-gradient(120deg,_#4b0a09,_#941a17_60%,_#d63732)]",
    "[&::after]:absolute [&::after]:z-[-1] [&::after]:right-[-8%] [&::after]:bottom-[-42%] [&::after]:w-[70%] [&::after]:h-[110%] [&::after]:[border:1px_solid_rgba(255,255,255,.12)] [&::after]:rounded-[50%] [&::after]:content-[''] [&::after]:[transform:rotate(-19deg)] [&::after]:shadow-[0_0_0_32px_rgba(255,255,255,.025),_0_0_0_68px_rgba(255,255,255,.02)]",
    "[&_h1]:m-0 [&_h1]:text-[length:clamp(76px,_10.7vw,_154px)] [&_h1]:font-black [&_h1]:leading-[.82] [&_h1]:tracking-[-.08em]",
    "mobile:block mobile:min-h-[640px] mobile:p-[139px_24px_40px]",
    "mobile:[&_h1]:text-[length:clamp(73px,_19vw,_98px)]",
  ].join(" "),
  eventsHeroCopy: [
    "relative z-2 w-[58%]",
    "mobile:w-full",
  ].join(" "),
  eventsEyebrow: [
    "events-eyebrow",
    "m-[0_0_13px] text-[#ffaaa4] font-mono text-[length:12px] font-bold tracking-[.16em]",
    "[.events-section-heading_&]:basis-[100%]",
    "[.events-archive-content_&]:mb-[9px] [.events-archive-content_&]:text-[length:10px]",
    "[.events-community-cta_&]:text-[#ffceca]",
  ].join(" "),
  eventsLead: [
    "max-w-[490px] m-[27px_0_0] text-[length:clamp(18px,_2vw,_24px)] leading-[1.4]",
    "mobile:max-w-[330px] mobile:mt-[18px] mobile:text-[length:18px]",
  ].join(" "),
  eventsHeroArt: [
    "absolute z-1 top-[112px] right-[7%] w-[44%] h-[425px] overflow-hidden [border:8px_solid_rgba(255,255,255,.92)] rounded-[3px] [transform:rotate(4deg)] shadow-[16px_18px_0_rgba(31,3,3,.5)]",
    "[&::after]:absolute [&::after]:inset-0 [&::after]:content-[''] [&::after]:[background:linear-gradient(0deg,_rgba(40,4,3,.68),_transparent_70%)]",
    "[&_img]:object-cover",
    "[&_span]:absolute [&_span]:z-1 [&_span]:right-[20px] [&_span]:bottom-[16px] [&_span]:text-white [&_span]:font-mono [&_span]:text-[length:20px] [&_span]:font-black [&_span]:leading-[.92] [&_span]:text-right [&_span]:[text-shadow:2px_2px_0_#a51b17]",
    "mobile:top-auto mobile:right-[27px] mobile:bottom-[44px] mobile:w-[calc(100%_-_70px)] mobile:h-[255px] mobile:[border-width:5px]",
    "mobile:[&_span]:text-[length:16px]",
  ].join(" "),
  eventsHeroScribble: [
    "absolute right-[6%] bottom-[34px] z-2 text-[#ffca5e] text-[length:64px] font-black italic [transform:rotate(-12deg)] [text-shadow:3px_4px_0_#6c100e]",
    "mobile:right-[18px] mobile:bottom-[17px] mobile:text-[length:42px]",
  ].join(" "),
  eventsFeatured: [
    "p-[84px_8%_112px]",
    "mobile:p-[62px_20px_78px]",
  ].join(" "),
  eventsSectionHeading: [
    "events-section-heading",
    "flex items-baseline flex-wrap gap-[0_24px] mb-[34px]",
    "[&_h2]:m-0 [&_h2]:text-[length:clamp(34px,_4vw,_54px)] [&_h2]:font-[850] [&_h2]:tracking-[-.05em]",
    "[&_>_p:last-child]:m-0 [&_>_p:last-child]:text-[#f5c7c2] [&_>_p:last-child]:text-[length:16px]",
    "mobile:block mobile:mb-[23px]",
    "mobile:[&_h2]:mb-[8px] mobile:[&_h2]:text-[length:36px]",
    "mobile:[&_>_p:last-child]:text-[length:14px]",
  ].join(" "),
  eventsFeatureCard: [
    "grid grid-cols-[minmax(340px,_.88fr)_1.12fr] min-h-[624px] overflow-hidden [border:1px_solid_rgba(255,255,255,.12)] rounded-[18px] bg-[#1c1718] shadow-[0_24px_65px_rgba(36,0,0,.32)]",
    "tablet:grid-cols-[minmax(260px,.8fr)_1.2fr]",
    "mobile:flex mobile:flex-col mobile:min-h-0 mobile:rounded-[12px]",
  ].join(" "),
  eventsFeaturePoster: [
    "relative min-h-[624px] overflow-hidden bg-[#302425]",
    "[&_>_img]:object-cover [&_>_img]:object-center",
    "mobile:min-h-0 mobile:h-[370px]",
    "mobile:[&_>_img]:object-[top_center]",
  ].join(" "),
  eventsPosterTape: "absolute top-[24px] left-[-25px] w-[168px] h-[52px] [background:url('/assets/red-tape.png')_center_/_contain_no-repeat] [transform:rotate(-23deg)]",
  eventsFeatureDetails: [
    "flex flex-col p-[35px_clamp(26px,_4vw,_56px)_34px]",
    "[&_h3]:m-[22px_0_8px] [&_h3]:text-[length:clamp(46px,_5.3vw,_74px)] [&_h3]:font-black [&_h3]:leading-[.9] [&_h3]:tracking-[-.07em]",
    "tablet:p-[28px_24px]",
    "mobile:p-[25px_20px_23px]",
    "mobile:[&_h3]:m-[21px_0_4px] mobile:[&_h3]:text-[length:57px]",
  ].join(" "),
  eventsDetailTopline: [
    "flex items-center gap-[9px] text-[#ffaaa4] font-mono text-[length:11px] font-bold tracking-[.12em]",
    "mobile:text-[length:10px]",
  ].join(" "),
  eventsLiveDot: "w-[8px] h-[8px] rounded-[50%] bg-[#ff514a] shadow-[0_0_0_4px_rgba(255,81,74,.15)]",
  eventsDetailId: "ml-auto text-[#897f80]",
  eventsDesktopBreak: "mobile:hidden",
  eventsFeatureDescription: [
    "max-w-[485px] m-[10px_0_25px] text-[#d0c7c7] text-[length:16px] leading-[1.55]",
    "mobile:m-[10px_0_22px] mobile:text-[length:14px]",
  ].join(" "),
  eventsMetaGrid: [
    "grid grid-cols-2 gap-[14px] mb-[18px]",
    "tablet:grid-cols-1",
    "mobile:grid-cols-1 mobile:gap-[15px] mobile:mb-[19px]",
  ].join(" "),
  eventsMetaItem: [
    "flex gap-[11px] items-start text-white text-[length:14px] leading-[1.35]",
    "[&_small]:block [&_small]:m-[0_0_4px] [&_small]:text-[#9d9091] [&_small]:font-mono [&_small]:text-[length:10px] [&_small]:tracking-[.1em]",
    "[&_strong]:font-semibold",
  ].join(" "),
  eventsMetaIcon: [
    "grid flex-[0_0_36px] w-[36px] h-[36px] place-items-center rounded-[7px] bg-[#322a2b]",
    "[&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:fill-none [&_svg]:stroke-[#ff7770] [&_svg]:stroke-[1.6] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]",
  ].join(" "),
  eventsVenueMap: [
    "relative min-h-[119px] overflow-hidden rounded-[9px]",
    "[&_img]:object-cover",
    "tablet:min-h-[96px]",
    "mobile:min-h-[100px]",
  ].join(" "),
  eventsFeatureActions: [
    "flex items-center gap-[20px] mt-auto pt-[20px]",
    "mobile:justify-between mobile:gap-[10px]",
  ].join(" "),
  eventsCta: [
    "inline-flex min-h-[52px] items-center justify-center gap-[15px] p-[0_22px] rounded-[5px] bg-[#e53935] text-white text-[length:15px] font-[750] [transition:background_.18s_ease,_transform_.18s_ease]",
    "[&:hover]:bg-[#ff514a] [&:hover]:[transform:translateY(-2px)]",
    "[&_svg]:w-[20px] [&_svg]:h-[20px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:[stroke-linecap:square] [&_svg]:[stroke-linejoin:miter]",
    "mobile:min-h-[48px] mobile:gap-[8px] mobile:p-[0_12px] mobile:text-[length:13px]",
  ].join(" "),
  eventsPrice: [
    "text-white text-[length:20px] font-extrabold",
    "[&_small]:block [&_small]:mt-[2px] [&_small]:text-[#a99e9e] [&_small]:text-[length:11px] [&_small]:font-normal",
    "mobile:text-[length:18px]",
  ].join(" "),
  eventsArchive: [
    "p-[0_8%_120px]",
    "mobile:p-[0_20px_75px]",
  ].join(" "),
  eventsArchiveHeading: [
    "flex [align-items:end] justify-between gap-[35px] mb-[36px]",
    "[&_h2]:m-0 [&_h2]:text-[length:clamp(40px,_5vw,_66px)] [&_h2]:font-black [&_h2]:leading-[.98] [&_h2]:tracking-[-.07em]",
    "[&_h2_span]:text-[#ff7770]",
    "[&_>_p]:max-w-[335px] [&_>_p]:m-[0_0_5px] [&_>_p]:text-[#e2c5c3] [&_>_p]:text-[length:16px] [&_>_p]:leading-[1.5]",
    "mobile:block mobile:mb-[25px]",
    "mobile:[&_h2]:text-[length:48px]",
    "mobile:[&_>_p]:mt-[15px] mobile:[&_>_p]:text-[length:14px]",
  ].join(" "),
  eventsArchiveGrid: [
    "grid grid-cols-3 gap-[22px]",
    "tablet:gap-[12px]",
    "mobile:grid-cols-1 mobile:gap-[15px]",
  ].join(" "),
  eventsArchiveCard: [
    "events-archive-card",
    "relative overflow-hidden [border:1px_solid_rgba(255,255,255,.14)] rounded-[12px] bg-[#22191a]",
  ].join(" "),
  eventsArchiveImage: [
    "relative h-[210px] overflow-hidden",
    "[&::after]:absolute [&::after]:inset-0 [&::after]:content-[''] [&::after]:[background:linear-gradient(0deg,_rgba(25,9,9,.48),_transparent_55%)]",
    "[&_img]:object-cover [&_img]:[transition:transform_.3s_ease]",
    "[.events-archive-card:hover_&_img]:[transform:scale(1.04)]",
    "tablet:h-[150px]",
    "mobile:h-[205px]",
  ].join(" "),
  eventsArchiveContent: [
    "events-archive-content",
    "relative min-h-[185px] p-[23px_23px_45px]",
    "[&_h3]:m-[0_0_9px] [&_h3]:text-[length:22px] [&_h3]:font-extrabold [&_h3]:tracking-[-.035em]",
    "[&_>_p:not(.events-eyebrow)]:m-0 [&_>_p:not(.events-eyebrow)]:text-[#c8b9b9] [&_>_p:not(.events-eyebrow)]:text-[length:14px] [&_>_p:not(.events-eyebrow)]:leading-[1.5]",
    "mobile:min-h-[153px] mobile:p-[19px_20px_42px]",
    "mobile:[&_h3]:text-[length:21px]",
  ].join(" "),
  eventsCardArrow: [
    "[&_svg]:w-[20px] [&_svg]:h-[20px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:[stroke-linecap:square] [&_svg]:[stroke-linejoin:miter]",
    "absolute right-[19px] bottom-[16px] text-[#ff7770]",
  ].join(" "),
  eventsCommunityCta: [
    "events-community-cta",
    "[&_>_a]:inline-flex [&_>_a]:min-h-[52px] [&_>_a]:items-center [&_>_a]:justify-center [&_>_a]:gap-[15px] [&_>_a]:p-[0_22px] [&_>_a]:rounded-[5px] [&_>_a]:bg-[#5b0c0a] [&_>_a]:text-white [&_>_a]:text-[length:15px] [&_>_a]:font-[750] [&_>_a]:[transition:background_.18s_ease,_transform_.18s_ease] [&_>_a]:relative [&_>_a]:z-1 [&_>_a]:flex-[0_0_auto]",
    "[&_>_a:hover]:bg-[#42100f] [&_>_a:hover]:[transform:translateY(-2px)]",
    "[&_>_a_svg]:w-[20px] [&_>_a_svg]:h-[20px] [&_>_a_svg]:fill-none [&_>_a_svg]:stroke-current [&_>_a_svg]:stroke-[2] [&_>_a_svg]:[stroke-linecap:square] [&_>_a_svg]:[stroke-linejoin:miter]",
    "relative flex min-h-[270px] items-center justify-between gap-[30px] overflow-hidden p-[45px_9%_45px_19%] bg-[#df3835]",
    "[&::before]:absolute [&::before]:inset-0 [&::before]:content-[''] [&::before]:pointer-events-none [&::before]:[background:url('/assets/red-texture.png')_center_/_700px_auto_repeat] [&::before]:opacity-[.1] [&::before]:mix-blend-color-dodge",
    "[&_>_div:not(.events-cta-mascot)]:relative [&_>_div:not(.events-cta-mascot)]:z-1",
    "[&_h2]:m-[0_0_8px] [&_h2]:text-[length:clamp(43px,_5vw,_67px)] [&_h2]:font-black [&_h2]:leading-[.95] [&_h2]:tracking-[-.07em]",
    "[&_p:last-child]:m-0 [&_p:last-child]:text-[#ffe4e2] [&_p:last-child]:text-[length:16px]",
    "mobile:min-h-[315px] mobile:flex mobile:items-start mobile:flex-col mobile:justify-center mobile:gap-[22px] mobile:p-[45px_25px_45px_94px]",
    "mobile:[&_h2]:text-[length:48px]",
    "mobile:[&_p:last-child]:max-w-[250px] mobile:[&_p:last-child]:text-[length:14px] mobile:[&_p:last-child]:leading-[1.45]",
    "mobile:[&_>_a]:min-h-[47px] mobile:[&_>_a]:p-[0_14px] mobile:[&_>_a]:text-[length:13px]",
  ].join(" "),
  eventsCtaMascot: [
    "events-cta-mascot",
    "absolute bottom-[-30px] left-[6%] w-[210px] h-[220px]",
    "[&_img]:object-contain [&_img]:object-bottom",
    "mobile:left-[-32px] mobile:bottom-[-8px] mobile:w-[127px] mobile:h-[150px]",
  ].join(" "),
};
