import Image from "next/image";

const games = [
  ["Under Night In-Birth II", "/assets/red-game-5.png"],
  ["Blazblue", "/assets/red-game-1.png"],
  ["Guilty Gear Strive", "/assets/red-game-2.png"],
  ["Asuka 120% Limit Over", "/assets/red-game-3.png"],
  ["Vampire Savior", "/assets/red-game-4.png"],
  ["Dragon Ball FighterZ", "/assets/red-game-6.png"],
];

export function GamesCarousel() {
  return (
    <section className={styles.redGames} id="galeria" aria-label="Nossos jogos">
      <Image className={styles.sectionStamp} src="/assets/red-games-title.png" alt="Nossos jogos" width={710} height={386} />
      <div className={styles.gameTrackWindow}>
        <div className={styles.gameTrack}>
          {games.map(([title, image]) => (
            <article className={styles.gameCard} key={title}>
              <a href="/galeria" className={styles.gameImage}>
                <Image src={image} alt={title} fill sizes="(max-width: 600px) 69px, 244px" />
              </a>
              <h2>{title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  redGames: [
    "absolute left-0 top-[3544px] w-[1440px] h-[1109px]",
    "mobile:left-0 mobile:top-[1128.41px] mobile:w-[402px] mobile:h-[323.59px]",
  ].join(" "),
  sectionStamp: [
    "absolute w-[710px] h-[386px] object-contain left-[44px] top-0",
    "mobile:w-[200.51px] mobile:h-[108.91px] mobile:left-[-1.54px] mobile:top-0",
  ].join(" "),
  gameTrackWindow: [
    "absolute left-0 top-[138px] w-[1440px] h-[804px] overflow-x-auto overflow-y-hidden [scrollbar-width:none]",
    "[&::-webkit-scrollbar]:hidden",
    "mobile:left-0 mobile:top-[99px] mobile:w-[402px] mobile:h-[205px]",
  ].join(" "),
  gameTrack: [
    "absolute top-[218px] left-[115px] flex items-start gap-[60px] w-max",
    "mobile:top-0 mobile:left-[12px] mobile:gap-[8px]",
  ].join(" "),
  gameCard: [
    "flex-[0_0_244px] w-[244px] text-center",
    "[&_h2]:min-h-[88px] [&_h2]:m-[20px_0_0] [&_h2]:text-white [&_h2]:text-[length:32px] [&_h2]:font-extrabold [&_h2]:leading-[1.2] [&_h2]:tracking-[.32px]",
    "mobile:basis-[68.88px] mobile:w-[68.88px]",
    "mobile:[&_h2]:min-h-[36px] mobile:[&_h2]:m-[6px_0_0] mobile:[&_h2]:text-[length:5.65px] mobile:[&_h2]:leading-[1.2] mobile:[&_h2]:tracking-[.06px]",
  ].join(" "),
  gameImage: [
    "relative block w-[244px] h-[432px] overflow-hidden [border:10px_solid_#e53935] rounded-[15px]",
    "[&_img]:object-cover",
    "mobile:w-[68.88px] mobile:h-[121.95px] mobile:[border-width:4.5px] mobile:rounded-[5px]",
  ].join(" "),
};
