import Image from "next/image";
import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";

const players = [
  { rank: "01", name: "ZNHELV", score: "234", image: "/assets/red-game-4.png", alt: "" },
  { rank: "02", name: "Wendell", score: "163", image: "/assets/red-game-5.png", alt: "" },
  { rank: "03", name: "Onorius", score: "124", image: "/assets/red-game-6.png", alt: "" },
];

export function LeaderboardPage() {
  return (
    <div className={styles.leaderboardSite}>
      <Header />
        <div className={styles.leaderboardSubbar}>
          <nav aria-label="Navegação do ranking">
            <Link href="/eventos">Próximos</Link>
            <Link href="/eventos">Anteriores</Link>
            <Link href="/leaderboard" aria-current="page">Leaderboard</Link>
          </nav>
          <span className={styles.leaderboardSearch} aria-hidden="true"><i /></span>
        </div>

      <main className={styles.leaderboardMain}>
        <section className={styles.leaderboardContent} aria-labelledby="leaderboard-title">
          <h1 id="leaderboard-title">LEADERBOARD</h1>
          <div className={styles.leaderboardTableWrap}>
            <table className={styles.leaderboardTable}>
              <thead>
                <tr><th scope="col">#</th><th scope="col">Jogador</th><th scope="col">Score</th></tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.rank}>
                    <td className={styles.leaderboardRank}>{player.rank}</td>
                    <td>
                      <span className={styles.leaderboardPlayer}>
                        <Image src={player.image} alt={player.alt} width={46} height={46} unoptimized />
                        <span>{player.name}</span>
                      </span>
                    </td>
                    <td className={styles.leaderboardScore}>{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <div className={styles.leaderboardSound} aria-hidden="true">
          <span className={styles.leaderboardRecord}>♫</span>
          <span className={styles.leaderboardEqualizer}><i /><i /><i /></span>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  leaderboardSite: [
    "leaderboard-site",
    "relative isolate w-[1440px] [zoom:min(1,_calc(100vw_/_1440px))] m-[0_auto] overflow-x-clip text-white bg-[#881411]",
    "mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
  leaderboardSubbar: [
    "relative z-10 mobile:mt-[113px]",
    "[&_a]:[transition:color_.16s_ease]",
    "[&_a:hover]:text-[#ffd6d4]",
    "h-[40px] flex items-center justify-between p-[0_7.4%] [border-top:1px_solid_rgba(255,255,255,.2)] bg-[#bc2925] shadow-[0_5px_0_rgba(30,0,0,.38)] text-[length:12px]",
    "[&_nav]:flex [&_nav]:items-center [&_nav]:gap-[34px] [&_nav]:h-full",
    "[&_a[aria-current='page']]:text-white [&_a[aria-current='page']]:[text-shadow:0_1px_4px_#500]",
    "compact:h-[40px] compact:p-[0_22px]",
    "narrow:[&_nav]:gap-[20px]",
  ].join(" "),
  leaderboardSearch: [
    "relative w-[16px] h-[16px] [border:2px_solid_#fff] rounded-[50%]",
    "[&::after]:absolute [&::after]:right-[-5px] [&::after]:bottom-[-3px] [&::after]:w-[7px] [&::after]:h-[2px] [&::after]:content-[''] [&::after]:bg-[#fff] [&::after]:[transform:rotate(48deg)]",
  ].join(" "),
  leaderboardMain: [
    "relative min-h-[1405px] overflow-hidden bg-[#4a100d]",
    "[&::before]:absolute [&::before]:inset-0 [&::before]:z-0 [&::before]:content-[''] [&::before]:opacity-[.76] [&::before]:[background-image:linear-gradient(90deg,_rgba(25,3,3,.66)_0_7px,_transparent_8px_270px),_linear-gradient(90deg,_rgba(25,3,3,.66)_0_7px,_transparent_8px_270px),_repeating-linear-gradient(0deg,_transparent_0_48px,_rgba(25,3,3,.65)_49px_55px)] [&::before]:[background-size:270px_110px,_270px_110px,_100%_55px] [&::before]:[background-position:0_0,_135px_55px,_0_0]",
    "[&::after]:absolute [&::after]:inset-0 [&::after]:z-0 [&::after]:content-[''] [&::after]:pointer-events-none [&::after]:[background:linear-gradient(180deg,_rgba(32,3,2,.32),_transparent_25%,_rgba(30,2,2,.16))]",
    "compact:min-h-[940px]",
    "compact:[&::before]:[background-size:240px_130px]",
  ].join(" "),
  leaderboardContent: [
    "relative z-1 w-[min(86.2%,_1240px)] m-[0_auto] pt-[144px]",
    "[&_h1]:m-[0_0_45px] [&_h1]:text-[length:38px] [&_h1]:font-[750] [&_h1]:tracking-[-.035em] [&_h1]:leading-[1.05]",
    "compact:w-[calc(100%_-_40px)] compact:pt-[165px]",
    "compact:[&_h1]:mb-[24px] compact:[&_h1]:text-[length:clamp(27px,_8vw,_38px)]",
  ].join(" "),
  leaderboardTableWrap: [
    "overflow-hidden rounded-[14px] bg-[#881f19] shadow-[0_22px_40px_rgba(24,0,0,.18)]",
    "compact:rounded-[10px]",
  ].join(" "),
  leaderboardTable: [
    "w-full border-collapse table-fixed text-[length:18px]",
    "[&_thead]:h-[84px] [&_thead]:bg-[#e53935]",
    "[&_th]:text-[length:17px] [&_th]:font-bold",
    "[&_th:first-child]:w-[23%] [&_th:first-child]:pl-[8.2%] [&_th:first-child]:text-left",
    "[&_td:first-child]:w-[23%] [&_td:first-child]:pl-[8.2%] [&_td:first-child]:text-left",
    "[&_th:nth-child(2)]:text-center",
    "[&_th:last-child]:w-[22%] [&_th:last-child]:pr-[8.2%] [&_th:last-child]:text-right",
    "[&_td:last-child]:w-[22%] [&_td:last-child]:pr-[8.2%] [&_td:last-child]:text-right",
    "[&_tbody_tr]:h-[240px]",
    "compact:text-[length:14px]",
    "compact:[&_thead]:h-[58px]",
    "compact:[&_th]:text-[length:13px]",
    "compact:[&_tbody_tr]:h-[156px]",
    "compact:[&_th:first-child]:w-[20%] compact:[&_th:first-child]:pl-[7%]",
    "compact:[&_td:first-child]:w-[20%] compact:[&_td:first-child]:pl-[7%]",
    "compact:[&_th:last-child]:w-[20%] compact:[&_th:last-child]:pr-[7%]",
    "compact:[&_td:last-child]:w-[20%] compact:[&_td:last-child]:pr-[7%]",
    "narrow:text-[length:12px]",
    "narrow:[&_tbody_tr]:h-[130px]",
  ].join(" "),
  leaderboardRank: "leaderboard-rank",
  leaderboardPlayer: [
    "flex items-center justify-center gap-[16px]",
    "[&_img]:flex-[0_0_auto] [&_img]:w-[46px] [&_img]:h-[46px] [&_img]:rounded-[4px] [&_img]:object-cover",
    "compact:gap-[8px]",
    "compact:[&_img]:w-[34px] compact:[&_img]:h-[34px]",
    "narrow:flex-col narrow:gap-[5px]",
  ].join(" "),
  leaderboardScore: "tabular-nums",
  leaderboardSound: [
    "absolute z-2 top-[420px] right-[7.4%] flex flex-col items-center",
    "compact:top-[300px] compact:right-[13px] compact:[transform:scale(.78)] compact:origin-top-right",
  ].join(" "),
  leaderboardRecord: "relative z-1 grid w-[42px] h-[42px] place-items-center [border:4px_solid_#fff] rounded-[50%] bg-[#fff] text-[#28242a] text-[length:25px] shadow-[0_2px_5px_#0005]",
  leaderboardEqualizer: [
    "flex gap-[4px] items-center justify-center w-[74px] h-[32px] mt-[-4px] [border:4px_solid_#fff] rounded-[9px] bg-[#e53935] shadow-[0_3px_4px_#0005]",
    "[&_i]:block [&_i]:w-[8px] [&_i]:h-[8px] [&_i]:[border:2px_solid_white] [&_i]:rounded-[50%] [&_i]:bg-[#2452b6]",
  ].join(" "),
};
