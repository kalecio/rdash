"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DesignPage } from "./DesignPage";

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current stroke-[2.5]"><circle cx="10.5" cy="10.5" r="7.5" /><path d="m16 16 6 6" /></svg>;
}

export function LeaderboardPage() {
  const content = useSiteContent();
  const asset = useAsset();
  const players = content.players;
  const page = content.leaderboardPage;
  const eventsPage = content.eventsPage;
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const visiblePlayers = players.filter(player => player.name.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")));

  return (
    <DesignPage activePage="Eventos" desktopHeight={1925 + Math.max(0, players.length - 3) * 223} mobileHeight={1238 + Math.max(0, players.length - 3) * 97} background="#5f0808" mobileTexture mobileSearch={
      <button type="button" aria-label={page.searchLabel} aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)} className="absolute left-[282px] top-[66px] z-30 hidden h-[32px] w-[32px] mobile:block"><SearchIcon /></button>
    }>
      <nav aria-label="Navegação do ranking" className="absolute left-[88px] top-[93px] z-10 flex h-[38px] w-[1266px] items-center gap-[24px] bg-[var(--cms-background)] px-[56px] text-[16px] leading-[21px] shadow-[0_4px_4px_#0004] mobile:hidden">
        <Link href="/eventos" className="px-[8px] font-medium">{eventsPage.upcomingLabel}</Link>
        <Link href="/eventos" className="px-[8px]">{eventsPage.pastLabel}</Link>
        <Link href="/leaderboard" aria-current="page" className="px-[8px] font-bold underline">{eventsPage.leaderboardLabel}</Link>
        <button type="button" aria-label={page.searchLabel} aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)} className="ml-auto h-[24px] w-[24px] cursor-pointer"><SearchIcon /></button>
      </nav>
      {searchOpen && <label className="absolute left-[100px] top-[145px] z-10 rounded bg-[var(--cms-background)] p-[8px] mobile:left-[16px] mobile:top-[113px]">{page.searchLabel} <input autoFocus value={query} onChange={event => setQuery(event.target.value)} className="ml-[8px] w-[200px] rounded bg-white px-[8px] text-black" /></label>}
      <section aria-labelledby="leaderboard-title">
        <h1 id="leaderboard-title" className="absolute left-[98px] top-[250px] text-[48px] font-bold leading-[62px] mobile:left-[16px] mobile:top-[137px] mobile:text-[32px] mobile:leading-[42px]">{page.title}</h1>
        <p className="absolute left-[16px] top-[187px] hidden w-[370px] whitespace-pre-line text-[20px] font-medium leading-[26px] mobile:block">{page.subtitle}</p>
        <table aria-label="Ranking dos jogadores" style={{ "--table-height": `${805 + Math.max(0, players.length - 3) * 223}px`, "--mobile-table-height": `${405 + Math.max(0, players.length - 3) * 97}px` } as React.CSSProperties} className="absolute left-[100px] top-[344px] block h-[var(--table-height)] w-[1240px] overflow-hidden rounded-[15px] bg-[var(--cms-table)] ring-2 ring-inset ring-[var(--cms-dark)] mobile:left-[16px] mobile:top-[263px] mobile:h-[var(--mobile-table-height)] mobile:w-[370px]">
          <thead className="block bg-[var(--cms-tableHeader)]">
            <tr className={`${styles.columns} h-[83px] items-center pt-[7px] text-[28px] font-semibold leading-[36px] mobile:h-[51px] mobile:pt-0 mobile:text-[16px] mobile:leading-[24px]`}>
              <th scope="col" className="text-[32px] leading-[42px] mobile:pl-[24px] mobile:text-left mobile:text-[16px] mobile:leading-[24px]">{page.rankLabel}</th>
              <th scope="col" className="mobile:pl-[14px]">{page.playerLabel}</th>
              <th scope="col" className="mobile:pr-[19px]">{page.scoreLabel}</th>
            </tr>
          </thead>
          <tbody className="relative block h-[722px] mobile:h-[354px]">
            {visiblePlayers.map((player, index) => (
              <tr key={player.rank} style={{ "--row-top": `${59 + index * 223}px`, "--mobile-row-top": `${44 + index * 97}px` } as React.CSSProperties} className={`${styles.columns} absolute top-[var(--row-top)] h-[82px] items-center text-[32px] font-semibold leading-[42px] mobile:top-[var(--mobile-row-top)] mobile:h-[36px] mobile:text-[20px] mobile:leading-[24px]`}>
                <td className="text-center mobile:pl-[24px] mobile:text-left"><span className="mobile:hidden">{String(player.rank).padStart(2, "0")}</span><span className="hidden mobile:inline">{player.rank}</span></td>
                <td className="flex items-center justify-center gap-[16px] mobile:justify-start mobile:gap-[18px] mobile:pl-[7px]">
                  <Image src={asset(player.image)} alt="" width={82} height={82} className="h-[82px] w-[82px] shrink-0 mobile:h-[36px] mobile:w-[36px]" unoptimized />
                  <span>{player.name}</span>
                </td>
                <td className="pr-[108px] text-right font-medium mobile:pr-[48px] mobile:font-semibold">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {visiblePlayers.length === 0 && <p role="status" className="absolute left-[100px] top-[470px] text-[24px] mobile:left-[32px] mobile:top-[350px] mobile:text-[20px]">{page.emptyLabel}</p>}
      </section>
    </DesignPage>
  );
}

const styles = {
  columns: "grid w-full grid-cols-[232px_712px_296px] mobile:grid-cols-[48px_208px_114px]",
};
