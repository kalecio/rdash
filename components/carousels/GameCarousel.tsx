"use client";

import Image from "next/image";
import { ArtworkFrame } from "../artwork/ArtworkFrame";
import type { ComponentType, ReactNode } from "react";

export type GameCarouselItem = { title: string; image: string; href: string };
type LinkProps = { href: string; children: ReactNode; className?: string; tabIndex?: number; "aria-label"?: string };
export type GameCarouselProps = { items: GameCarouselItem[]; title?: string; titleImage?: string; LinkComponent?: ComponentType<LinkProps> };
const NativeLink = (props: LinkProps) => <a {...props} />;

export function GameCarousel({ items: games, title = "Nossos jogos", titleImage = "/assets/red-games-title.png", LinkComponent = NativeLink }: GameCarouselProps) {
  return (
    <section className={styles.redGames} id="galeria" aria-label={title}>
      {title === "Nossos jogos" ? <Image unoptimized className={styles.sectionStamp} src={titleImage}  alt={title} width={710} height={386} /> : <h2 className={`${styles.sectionStamp} flex items-center text-[72px] font-bold mobile:text-[26px]`}>{title}</h2>}
      <div className={styles.gameTrackWindow}>
        <div className={styles.gameTrack}>
          {games.map(({title, image, href}) => (
            <article className={styles.gameCard} key={title}>
              <LinkComponent href={href} className={styles.gameImage}>
                <ArtworkFrame src={image} alt={title} className="h-full w-full" />
              </LinkComponent>
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
    "absolute left-0 top-[var(--home-gamesTop)] w-[1440px] h-[1109px]",
    "mobile:left-0 mobile:top-[var(--home-mobileGamesTop)] mobile:w-[402px] mobile:h-[323.59px]",
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
    "absolute top-[218px] left-0 flex items-start gap-[60px] w-max pl-[115px] pr-[100px]",
    "mobile:top-0 mobile:left-0 mobile:gap-[16.92px] mobile:pl-[18.5px] mobile:pr-[18.5px]",
  ].join(" "),
  gameCard: [
    "flex-[0_0_244px] w-[244px] text-center",
    "[&_h2]:min-h-[88px] [&_h2]:m-[20px_0_0] [&_h2]:text-white [&_h2]:text-[length:32px] [&_h2]:font-extrabold [&_h2]:leading-[1.2] [&_h2]:tracking-[.32px]",
    "mobile:basis-[68.88px] mobile:w-[68.88px]",
    "mobile:[&_h2]:min-h-[36px] mobile:[&_h2]:m-[6px_0_0] mobile:[&_h2]:text-[length:5.65px] mobile:[&_h2]:leading-[1.2] mobile:[&_h2]:tracking-[.06px]",
  ].join(" "),
  gameImage: [
    "relative block w-[244px] h-[432px] overflow-hidden ",
    "[&_img]:object-fill",
    "mobile:w-[68.88px] mobile:h-[121.95px] ",
  ].join(" "),
};
