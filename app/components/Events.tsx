"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import Link from "next/link";

export function Events() {
  const content = useSiteContent();
  const asset = useAsset();
  const event = content.home.featuredEvent;
  return (
    <section className={styles.redEvent} id="eventos" aria-labelledby="event-title">
        <div className={styles.eventArtWrap}>
          <Image unoptimized src={asset("/assets/red-event-art.png")}  alt="Arte do próximo evento R-DASH" width={710} height={386} className={styles.eventArt} />
        </div>
      <div className={styles.eventBoard}>

        <div className={styles.eventPosterWrap}>
          <Image unoptimized src={asset("/assets/red-event-poster.png")}  alt="Cartaz do torneio Under Night In-Birth II" width={533} height={705} className={styles.eventPoster} />
          <Image unoptimized src={asset("/assets/red-tape.png")}  alt="" width={114} height={122} className={styles.eventTape} />
          <Image unoptimized src={asset("/assets/red-tape.png")}  alt="" width={114} height={122} className={styles.eventTapeCombined} />
        </div>
        <div className={styles.eventInfo}>
          <Link href={event.infoHref} className={styles.eventInfoLink}>{event.infoLabel}</Link>
          <Image unoptimized src={asset("/assets/home-info-arrow.png")}  alt="" width={51} height={51} className={styles.eventKindIcon} />
          <h2 id="event-title">{event.typeLabel !== "Tipo do evento" ? event.typeLabel : <Image src={asset("/assets/home-event-label.svg")}  alt={event.typeLabel} width={224} height={42} unoptimized />}</h2>
          {event.type !== "Jogatina mensal" ? <p className="absolute left-[19px] top-[106px] flex h-[185px] w-[459px] items-center rounded-[12px] bg-[var(--cms-accent)] p-[24px] text-[40px] font-bold uppercase">{event.type}</p> : <Image src={asset("/assets/home-event-ribbon.png")}  alt={event.type} width={459} height={185} className="absolute left-[19px] top-[106px] h-[185px] w-[459px]" unoptimized />}
          <Image unoptimized src={asset("/assets/home-info-arrow.png")}  alt="" width={51} height={51} className={styles.eventLocationIcon} />
          <h3>{event.locationLabel !== "Local:" ? event.locationLabel : <Image src={asset("/assets/home-location-label.svg")}  alt={event.locationLabel} width={88} height={33} unoptimized />}</h3>
          <Image unoptimized src={asset("/assets/red-event-map.png")}  alt="Mapa da Galeria Hora Center" width={455} height={128} className={styles.eventMap} />
          <p className={`${styles.eventAddress} whitespace-pre-line`}>{event.address}</p>
          <div className={styles.eventActions}>
            <Link className={styles.eventJoin} href={event.buttonHref}>
              {event.buttonLabel !== "Inscreva-se" ? <span className="grid h-full place-items-center rounded-[29px] bg-[var(--cms-accent)] text-[32px] font-bold">{event.buttonLabel}</span> : <Image src={asset("/assets/home-join-button.png")}  alt={event.buttonLabel} width={326} height={121} unoptimized />}
            </Link>
            <p className={styles.eventPrice}>{event.price}</p>
          </div>
        </div>
      </div>
      <div className={styles.eventSticker}>TORNEIO • COMUNIDADE • RECIFE</div>
    </section>
  );
}

const styles = {
  redEvent: [
    "absolute z-3 left-0 top-[var(--home-eventTop)] w-[1440px] h-[950px]",
    "mobile:top-[var(--home-mobileEventTop)] mobile:left-0 mobile:w-[402px] mobile:h-[390px]",
  ].join(" "),
  eventBoard: [
    "absolute left-[102px] top-[107px] w-[1240px] h-[819px] rounded-[42px] [background:linear-gradient(180deg,_#2a2a2ae5,_#00000078_71%,_#66666600)] shadow-[0_13px_0_rgba(0,0,0,.45)]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-0 [&::before]:rounded-[inherit] [&::before]:[background:var(--asset-red-texture)_center/cover] [&::before]:opacity-[.18]",
    "mobile:left-[29.16px] mobile:top-[141.42px] mobile:w-[350.03px] mobile:h-[231.19px] mobile:rounded-[12px]",
    "mobile:[&::before]:rounded-[inherit]",
  ].join(" "),
  eventArtWrap: [
    "absolute z-4 left-[101.92px] top-[-138px] w-[710px] h-[386px] [transform:rotate(3.7deg)] overflow-hidden",
    "mobile:left-[29.14px] mobile:top-[72.26px] mobile:w-[200.42px] mobile:h-[108.86px] mobile:transform-none mobile:overflow-visible",
  ].join(" "),
  eventArt: [
    "block w-full h-full object-cover",
    "mobile:object-contain",
  ].join(" "),
  eventPosterWrap: [
    "absolute z-2 left-[92px] top-[69px] w-[533px] h-[705px] [transform:rotate(.74deg)] p-0 overflow-visible",
    "mobile:left-[23.44px] mobile:top-[19.64px] mobile:w-[150.41px] mobile:h-[199.06px] mobile:transform-none",
  ].join(" "),
  eventPoster: [
    "w-full h-full object-cover shadow-[8px_13px_0_#080808]",
    "mobile:w-full mobile:h-full",
  ].join(" "),
  eventTape: [
    "absolute w-[114px] h-[122px] object-contain z-3 left-[-5px] bottom-[-38px] [transform:rotate(56deg)]",
    "mobile:w-[32.28px] mobile:h-[34.36px] mobile:left-[-12px] mobile:bottom-[5px]",
  ].join(" "),
  eventTapeCombined: [
    "absolute w-[114px] h-[122px] object-contain z-3 right-[-46px] top-[-35px] [transform:rotate(56deg)]",
    "mobile:w-[32.28px] mobile:h-[34.36px] mobile:left-[132px] mobile:right-auto mobile:top-[-15px]",
  ].join(" "),
  eventInfo: [
    "absolute z-3 top-[42px] right-[40px] w-[502px] h-[762px] p-0 rounded-[0_0_38px_38px] bg-[rgba(0,0,0,.65)]",
    "[&_h2]:absolute [&_h2]:m-0 [&_h2]:left-[62px] [&_h2]:font-sans [&_h2]:text-[length:33.67px] [&_h2]:font-medium [&_h2]:text-white [&_h2]:[text-shadow:2px_3px_2px_#000] [&_h2]:top-[48px]",
    "[&_h3]:absolute [&_h3]:m-0 [&_h3]:left-[62px] [&_h3]:font-sans [&_h3]:text-[length:33.67px] [&_h3]:font-medium [&_h3]:text-white [&_h3]:[text-shadow:2px_3px_2px_#000] [&_h3]:top-[269px]",
    "mobile:left-[196.19px] mobile:right-auto mobile:top-[11.85px] mobile:[transform:scale(.2823)] mobile:origin-top-left",
  ].join(" "),
  eventInfoLink: "absolute left-[22px] top-[-26px] w-[414px] h-[53px] grid place-items-center rounded-[3px] bg-[rgba(0,0,0,.75)] font-mono text-[length:32px] font-normal text-white",
  eventKindIcon: [
    "absolute left-[19px] w-[51px] h-[51px] grid place-items-center overflow-hidden bg-[#292b2e] shadow-[2px_3px_3px_#0008] top-[45px]",
    "[&_svg]:w-full [&_svg]:h-full [&_svg]:p-[10px] [&_svg]:overflow-visible",
    "[&_svg_path]:fill-none [&_svg_path]:stroke-white [&_svg_path]:stroke-[6] [&_svg_path]:[stroke-linecap:square] [&_svg_path]:[stroke-linejoin:miter]",
  ].join(" "),
  eventLocationIcon: [
    "absolute left-[19px] w-[51px] h-[51px] grid place-items-center overflow-hidden bg-[#292b2e] shadow-[2px_3px_3px_#0008] top-[269px]",
    "[&_svg]:w-full [&_svg]:h-full [&_svg]:p-[10px] [&_svg]:overflow-visible",
    "[&_svg_path]:fill-none [&_svg_path]:stroke-white [&_svg_path]:stroke-[6] [&_svg_path]:[stroke-linecap:square] [&_svg_path]:[stroke-linejoin:miter]",
  ].join(" "),
  eventMap: "absolute left-[19px] top-[331px] w-[455px] h-[128px] rounded-[15px] object-cover",
  eventAddress: "absolute left-[23px] top-[475px] w-[336px] m-0 text-[length:16px] leading-[1.35] [text-shadow:2px_3px_3px_#000]",
  eventActions: [
    "absolute top-[567px] inset-x-0 flex flex-col items-center gap-[10px]",
  ].join(" "),
  eventJoin: "relative block h-[121px] w-[326px]",
  eventPrice: "relative m-0 text-center text-[length:20px] whitespace-nowrap",
  eventSticker: "hidden",
};
