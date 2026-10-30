"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DesignPage } from "./DesignPage";
import { galleryAlbums } from "./galleryData";

const upcoming = [
  { title: "STREET FIGHTER IV FT10", image: "street-fighter", description: "Uma noite de FT10s para colocar os matchups à prova, conhecer a galera da comunidade e trocar aquela resenha entre partidas. Sets abertos, desafios entre jogadores e muito Street Fighter durante toda a noite.." },
  { title: "Noite Mágica de Sailor Moon", image: "sailor-moon", description: "Uma noite de Sailor Moon S para reunir a comunidade, colocar os golpes especiais à prova e aproveitar toda a energia caótica e divertida dos anime fighters dos anos 90. Partidas livres, rivalidades improvisadas e muita nostalgia arcade durante toda a noite." },
  { title: "Noite de Long Sets Street Fighter", image: "long-sets", description: "Uma noite de Street Fighter 6 para colocar a adaptação e a leitura de jogo à prova, reunir a comunidade e trocar aquela resenha entre uma partida e outra. Do Drive Rush à punição perfeita, a ideia é simples: jogar muito, aprender nos sets e aproveitar uma noite inteira de luta." },
];
const past = [{title: "Momentos da Fight Night", image: "past", description: galleryAlbums[1].description}];

function SearchIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current stroke-[2.5]"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 6 6"/></svg>; }

export function EventsPage() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const [selected, setSelected] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const entries = filter === "upcoming" ? upcoming : past;
  const event = selected === null ? null : entries[selected];
  const heading = filter === "upcoming" ? "PRÓXIMOS EVENTOS" : "EVENTOS ANTERIORES";
  function changeFilter(next: "upcoming" | "past") {setFilter(next);setSelected(null);setQuery("");}

  return (
    <DesignPage activePage="Eventos" desktopHeight={event ? 1838 : 2874} mobileHeight={event ? 1187 : 1696} background="#5f0808" mobileSearch={<button type="button" className="absolute left-[282px] top-[66px] z-30 hidden h-[32px] w-[32px] mobile:block" aria-label="Buscar eventos" onClick={()=>setSearchOpen(!searchOpen)}><SearchIcon /></button>}>
      <nav aria-label="Categorias de eventos" className={styles.subnav}>
        <button type="button" aria-current={filter === "upcoming" ? "page" : undefined} onClick={()=>changeFilter("upcoming")}>Próximos</button>
        <button type="button" aria-current={filter === "past" ? "page" : undefined} onClick={()=>changeFilter("past")}>Anteriores</button>
        <Link href="/leaderboard">Leaderboard</Link>
        <button type="button" aria-label="Buscar eventos" className="ml-auto h-[24px] w-[24px]" onClick={()=>setSearchOpen(!searchOpen)}><SearchIcon /></button>
      </nav>
      {searchOpen && <label className="absolute left-[100px] top-[145px] z-10 rounded bg-[#881411] p-[8px] mobile:left-[16px] mobile:top-[113px]">Buscar eventos <input autoFocus value={query} onChange={e=>{setQuery(e.target.value);setSelected(null)}} className="ml-[8px] w-[220px] rounded bg-white px-[8px] text-black" /></label>}
      <header className={`${styles.intro} ${event ? "left-[148px]" : "left-[100px]"}`}>
        {event && <button aria-label="Voltar aos eventos" type="button" onClick={()=>setSelected(null)} className="absolute left-[-48px] top-[15px] h-[32px] w-[32px] mobile:left-auto mobile:right-0">←</button>}
        <h1><span className="mobile:hidden">{heading}</span><span className="hidden mobile:inline">EVENTOS</span></h1>
        {!event && <p>Confira e se inscreva em nossos próximos eventos.</p>}
      </header>
      {event ? <article className={styles.detail}>
        <h2>{event.title}</h2>
        <p>{event.description.replace(/\.\.$/, ".")}</p>
        <Image src={filter === "past" ? "/assets/gallery-fight-night.png" : selected === 0 ? "/assets/events-detail.png" : `/assets/events-${event.image}.png`} alt={event.title} width={1240} height={548} className={styles.detailImage} unoptimized />
        <div className={styles.detailMeta}>{filter === "past" ? <p>Esse evento já passou!</p> : selected !== 0 ? <p>Consulte os detalhes e a inscrição nas nossas redes.</p> : <><p><strong>Data:</strong> 17/06/2026 às 19h</p><p><strong>Local:</strong> Centro de Convenções</p><p><strong>Valor da Inscrição:</strong> Gratuito</p></>}
          <a href={filter === "past" ? "/galeria/momentos-da-fight-night" : "https://www.instagram.com/r_dash_/"} className="mt-[24px] inline-flex h-[80px] items-center justify-center rounded-[10px] bg-[#e53935] px-[32px] text-[24px] font-medium mobile:mt-[16px] mobile:h-[40px] mobile:text-[20px]">{filter === "past" ? "Ver registros" : "Inscreva-se"}</a>
        </div>
      </article> : <>
        <div className={styles.banner}>
          <Image src="/assets/events-banner.png" alt="Prepare-se: novidades de Street Fighter, dia 10 de junho" width={1260} height={440} className="h-full w-full" unoptimized preload />
          <Image src="/assets/rdash_mini_logo_vazado.png" alt="R-DASH" width={66} height={66} className="absolute left-[61px] top-[80px] h-[66px] w-[66px] mobile:left-[18px] mobile:top-[24px] mobile:h-[20px] mobile:w-[20px]" />
        </div>
        <section className={styles.list} aria-label={heading}>
          <h2 className="mb-[24px] text-[48px] font-bold leading-[62px] mobile:mb-[16px] mobile:text-[32px] mobile:leading-[42px]">{filter === "upcoming" ? "EM BREVE..." : "EVENTOS ANTERIORES"}</h2>
          <div className="flex flex-col gap-[64px] mobile:gap-[16px]">
            {entries.map((item,index)=>item.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")) && <article key={item.title} className={styles.card}>
              <picture className={styles.photo}>
                <source media="(max-width: 600px)" srcSet={filter === "past" ? "/assets/gallery-fight-night-mobile.png" : `/assets/events-${item.image}-mobile.png`} />
                <Image src={filter === "past" ? "/assets/gallery-fight-night.png" : `/assets/events-${item.image}.png`} alt={item.title} width={1248} height={840} className="h-full w-full object-cover" unoptimized />
              </picture>
              <div className={styles.copy}><h3>{item.title}</h3><p>{item.description}</p>
                <button type="button" onClick={()=>{setSelected(index);window.scrollTo({top:0,behavior:"instant"})}} className={styles.more}><span className="mobile:hidden">Ver mais</span><span className="hidden mobile:inline">{filter === "past" ? "Ver mais" : "Inscreva-se"}</span><span aria-hidden="true">→</span></button>
              </div>
            </article>)}
            {query && !entries.some(item=>item.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))) && <p role="status">Nenhum evento encontrado.</p>}
          </div>
        </section>
      </>}
    </DesignPage>
  );
}

const styles = {
  subnav: "absolute left-[88px] top-[93px] z-10 flex h-[38px] w-[1266px] items-center gap-[24px] bg-[#881411] px-[56px] text-[16px] leading-[21px] shadow-[0_4px_4px_#0004] [&_button]:cursor-pointer [&_button[aria-current]]:underline mobile:hidden",
  intro: "absolute top-[208px] [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[32px] [&_p]:font-medium [&_p]:leading-[42px] [&_p]:text-[#ededed] mobile:left-[16px] mobile:top-[137px] mobile:w-[370px] mobile:[&_h1]:text-[32px] mobile:[&_h1]:leading-[42px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  banner: "absolute left-[87px] top-[342px] h-[440px] w-[1260px] mobile:left-[13px] mobile:top-[260px] mobile:h-[131.3px] mobile:w-[376px]",
  list: "absolute left-[97px] top-[804px] w-[1246px] mobile:left-[16px] mobile:top-[413px] mobile:w-[370px]",
  card: "relative flex h-[420px] gap-[44px] mobile:h-[222px] mobile:w-[370px] mobile:gap-[12px] mobile:rounded-[7.25px] mobile:bg-[#881411] mobile:p-[15px_8px]",
  photo: "block h-[420px] w-[624px] shrink-0 overflow-hidden rounded-[15px] mobile:h-[192px] mobile:w-[171px] mobile:rounded-[7.25px]",
  copy: "relative w-[497px] [&_h3]:text-[32px] [&_h3]:font-semibold [&_h3]:leading-[42px] [&_p]:mt-[16px] [&_p]:line-clamp-4 [&_p]:text-[20px] [&_p]:font-light [&_p]:leading-[32px] [&_p]:tracking-[-.5px] mobile:w-[171px] mobile:h-[203px] mobile:mt-[-5.5px] mobile:[&_h3]:text-[20px] mobile:[&_h3]:leading-[26px] mobile:[&_h3]:line-clamp-2 mobile:[&_p]:mt-[8px] mobile:[&_p]:line-clamp-7 mobile:[&_p]:text-[12px] mobile:[&_p]:font-normal mobile:[&_p]:leading-[16px] mobile:[&_p]:tracking-normal",
  more: "absolute bottom-0 left-0 flex h-[44px] w-full cursor-pointer items-center justify-between rounded-[10px] bg-[#e53935] px-[16px] text-[16px] font-semibold leading-[16px] hover:brightness-110 mobile:h-[23px] mobile:rounded-[3px] mobile:px-[8px] mobile:text-[12px]",
  detail: "absolute left-[100px] top-[328px] w-[1240px] [&_h2]:text-[44px] [&_h2]:font-bold [&_h2]:leading-[57px] [&_>_p]:mt-[16px] [&_>_p]:text-[24px] [&_>_p]:font-light [&_>_p]:leading-[38px] [&_>_p]:tracking-[-.6px] mobile:left-[16px] mobile:top-[203px] mobile:w-[370px] mobile:[&_h2]:text-[20px] mobile:[&_h2]:leading-[26px] mobile:[&_>_p]:mt-[8px] mobile:[&_>_p]:text-[12px] mobile:[&_>_p]:font-medium mobile:[&_>_p]:leading-[16px] mobile:[&_>_p]:tracking-normal",
  detailImage: "mt-[24px] h-[548px] w-[1240px] rounded-[15px] object-cover mobile:mt-[20px] mobile:h-[208px] mobile:w-[370px]",
  detailMeta: "mt-[24px] text-right text-[24px] font-light leading-[38px] tracking-[-.6px] [&_strong]:font-medium mobile:mt-[20px] mobile:text-[12px] mobile:leading-[19px] mobile:tracking-[-.3px]",
};
