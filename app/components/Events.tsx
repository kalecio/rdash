import Image from "next/image";

export function Events() {
  return (
    <section className={styles.redEvent} id="eventos" aria-labelledby="event-title">
      <div className={styles.eventBoard}>
        <div className={styles.eventArtWrap}>
          <Image src="/assets/red-event-art.png" alt="Arte do próximo evento R-DASH" width={710} height={386} className={styles.eventArt} />
        </div>
        <div className={styles.eventPosterWrap}>
          <Image src="/assets/red-event-poster.png" alt="Cartaz do torneio Under Night In-Birth II" width={533} height={705} className={styles.eventPoster} />
          <Image src="/assets/red-tape.png" alt="" width={114} height={122} className={styles.eventTape} />
          <Image src="/assets/red-tape.png" alt="" width={114} height={122} className={styles.eventTapeCombined} />
        </div>
        <div className={styles.eventInfo}>
          <a href="/eventos" className={styles.eventInfoLink}>&gt;&gt; INFO</a>
          <div className={styles.eventKindIcon} aria-hidden="true"><svg viewBox="0 0 51 51"><path d="M11 40 40 11M22 11h18v18" /></svg></div>
          <h2 id="event-title">Tipo do evento</h2>
          <div className={styles.eventRibbon}><span>JOGATINA<br />MENSAL</span></div>
          <div className={styles.eventLocationIcon} aria-hidden="true"><svg viewBox="0 0 51 51"><path d="M11 40 40 11M22 11h18v18" /></svg></div>
          <h3>Local:</h3>
          <Image src="/assets/red-event-map.png" alt="Mapa da Galeria Hora Center" width={455} height={128} className={styles.eventMap} />
          <p className={styles.eventAddress}>Galeria Hora Center<br />Rua da Hora, 345 - Espinheiro</p>
          <div className={styles.eventActions}>
            <a className={styles.eventJoin} href="/eventos">
              <img className={styles.eventJoinEdge} src="/assets/red-join-button-edge.svg" alt="" />
              <Image className={styles.eventJoinFace} src="/assets/red-join-button-face.png" alt="" width={320} height={115} />
              <span>Inscreva-se</span>
            </a>
            <p className={styles.eventPrice}>Valor: R$10 (pago no local)</p>
          </div>
        </div>
      </div>
      <div className={styles.eventSticker}>TORNEIO • COMUNIDADE • RECIFE</div>
    </section>
  );
}

const styles = {
  redEvent: [
    "absolute z-3 left-0 top-[716px] w-[1440px] h-[950px]",
    "mobile:top-[218.9px] mobile:left-0 mobile:w-[402px] mobile:h-[390px]",
  ].join(" "),
  eventBoard: [
    "absolute left-[102px] top-[107px] w-[1240px] h-[819px] rounded-[42px] [background:linear-gradient(180deg,_#242424,_#111)] shadow-[0_13px_0_rgba(0,0,0,.45)]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:inset-0 [&::before]:rounded-[inherit] [&::before]:[background:url('/assets/red-texture.png')_center/cover] [&::before]:opacity-[.18]",
    "mobile:left-[29.16px] mobile:top-[141.42px] mobile:w-[350.03px] mobile:h-[231.19px] mobile:rounded-[12px]",
    "mobile:[&::before]:rounded-[inherit]",
  ].join(" "),
  eventArtWrap: [
    "absolute left-0 top-[77px] w-[710px] h-[386px] [transform:rotate(3.7deg)] overflow-hidden",
    "mobile:left-[20px] mobile:top-[-80px] mobile:w-[218px] mobile:h-[118px] mobile:transform-none mobile:overflow-visible",
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
  eventRibbon: [
    "absolute left-[19px] top-[106px] w-[455px] h-[128px] grid place-items-center overflow-hidden rounded-[13px] bg-[#151515] shadow-[5px_5px_0_#a81412]",
    "[&::before]:content-[''] [&::before]:absolute [&::before]:left-[-51.29%] [&::before]:top-[-352.1%] [&::before]:w-[170.51%] [&::before]:h-[667.63%] [&::before]:[background:url('/assets/red-game-5.png')_center_/_100%_100%_no-repeat]",
    "[&::after]:content-[''] [&::after]:absolute [&::after]:inset-0 [&::after]:[background:linear-gradient(90deg,_rgba(0,0,0,.58)_15.385%,_transparent_89.423%)]",
    "[&_span]:relative [&_span]:z-1 [&_span]:grid [&_span]:place-items-center [&_span]:w-full [&_span]:h-full [&_span]:[font-family:'Dirty_Stains_DEMO',_'Dirty_Stains',_var(--font-dm-sans),_sans-serif] [&_span]:text-[length:33.67px] [&_span]:font-normal [&_span]:leading-[.92] [&_span]:text-center [&_span]:text-white [&_span]:[text-shadow:2px_3px_1px_#000]",
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
  eventJoin: [
    "relative block w-[326px] h-[121px] overflow-hidden text-white [font-family:'NUKLEAR',_var(--font-dm-sans),_Arial,_sans-serif] text-[length:30.76px] font-normal [text-shadow:2px_3px_1px_#222]",
    "[&_span]:absolute [&_span]:z-2 [&_span]:inset-[0_auto_auto_0] [&_span]:grid [&_span]:w-[320px] [&_span]:h-[115px] [&_span]:place-items-center [&_span]:text-center [&_span]:whitespace-nowrap",
  ].join(" "),
  eventJoinEdge: "absolute max-w-none object-fill top-[6px] left-[3px]",
  eventJoinFace: "absolute max-w-none object-fill top-0 left-0 w-[320px] h-[115px] rounded-[29px]",
  eventPrice: "relative m-0 text-center text-[length:20px] whitespace-nowrap",
  eventSticker: "hidden",
};
