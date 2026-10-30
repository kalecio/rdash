"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export function News() {
  const content = useSiteContent();
  const asset = useAsset();
  const stories = content.news;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateScale = () => {
      const viewportBounds = viewport.getBoundingClientRect();
      const center = viewportBounds.left + viewportBounds.width / 2 - (viewport.clientWidth < 600 ? 11.3 : 0);
      const travel = viewportBounds.width * 0.393;

      const cards = Array.from(track.querySelectorAll<HTMLElement>(".news-slot")).flatMap((slot) => {
        const card = slot.querySelector<HTMLElement>(".news-card");
        if (!card) return [];

        const slotBounds = slot.getBoundingClientRect();
        const slotCenter = slotBounds.left + slotBounds.width / 2;
        const distance = Math.abs(center - slotCenter);
        const scale = Math.max(0.6, 1 - (distance / travel) * 0.4);
        card.style.setProperty("--scale", scale.toFixed(3));
        card.style.setProperty("--offset-y", `${(1 - scale) * viewport.clientWidth * 0.108}px`);
        card.style.setProperty("--opacity", (0.5 + ((scale - 0.6) / 0.4) * 0.5).toFixed(3));
        return [{ card, distance }];
      });

      if (!cards.length) return;
      const centeredCard = cards.reduce((closest, current) => current.distance < closest.distance ? current : closest);
      cards.forEach(({ card }) => card.classList.toggle("is-side", card !== centeredCard.card));
    };

    const centerOnResize = () => {
      viewport.scrollLeft = viewport.clientWidth < 600 ? 160 : 566;
      updateScale();
    };
    centerOnResize();
    viewport.addEventListener("scroll", updateScale, { passive: true });
    const observer = new ResizeObserver(centerOnResize);
    observer.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", updateScale);
      observer.disconnect();
    };
  }, [stories.length]);

  return (
    <section className={styles.redNews} aria-label={content.home.newsTitle}>
      {content.home.newsTitle === "Novidades" ? <Image unoptimized className={styles.sectionStamp} src={asset("/assets/red-news-title.png")}  alt={content.home.newsTitle} width={710} height={386} /> : <h2 className={`${styles.sectionStamp} flex items-center text-[72px] font-bold mobile:text-[26px]`}>{content.home.newsTitle}</h2>}
      <div
        className={styles.newsViewport}
        ref={viewportRef}
        tabIndex={0}
        aria-label="Carrossel de novidades. Role horizontalmente para navegar."
      >
        <div className={styles.newsTrack} ref={trackRef} style={{ "--news-width": `${875 + stories.length * 566}px`, "--mobile-news-width": `${242 + stories.length * 160}px` } as React.CSSProperties}>
          {stories.map((story) => (
            <div className={styles.newsSlot} key={story.title}>
              <article className={styles.newsCard}>
                <a href={story.href} className={styles.newsImageFrame} tabIndex={-1}>
                  <Image src={asset(story.image)} alt="" fill unoptimized sizes="(max-width: 600px) 189px, 668px" />
                </a>
                <h2>{story.title}</h2>
                <p>{story.copy}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  redNews: [
    "absolute left-0 top-[var(--home-newsTop)] w-[1440px] h-[858px]",
    "mobile:left-0 mobile:top-[var(--home-mobileNewsTop)] mobile:w-[402px] mobile:h-[272px]",
  ].join(" "),
  sectionStamp: [
    "absolute w-[710px] h-[386px] object-contain left-[47px] top-0",
    "mobile:w-[200.51px] mobile:h-[108.91px] mobile:left-[-.7px] mobile:top-0",
  ].join(" "),
  newsViewport: [
    "absolute top-[352px] left-0 w-[1440px] h-[506px] overflow-x-auto overflow-y-hidden [scrollbar-width:none]",
    "[&::-webkit-scrollbar]:hidden",
    "mobile:left-0 mobile:top-[99.36px] mobile:w-[402px] mobile:h-[143px]",
  ].join(" "),
  newsTrack: [
    "relative flex w-[var(--news-width)] h-[506px] pl-[566px] [transform:translateX(-128px)]",
    "mobile:w-[var(--mobile-news-width)] mobile:h-[143px] mobile:pr-[121px] mobile:pl-[121px] mobile:[transform:translateX(-11.3px)]",
  ].join(" "),
  newsSlot: [
    "news-slot",
    "relative flex-[0_0_566px] h-[506px] snap-center",
    "mobile:basis-[160px] mobile:h-[143px]",
  ].join(" "),
  newsCard: [
    "news-card",
    "absolute top-[var(--offset-y,_62px)] left-[50%] w-[668px] h-[506px] text-white [transform:translateX(-50%)_scale(var(--scale,_.6))] origin-top",
    "[&.is-side_h2]:opacity-[var(--opacity,_.5)] [&.is-side_h2]:top-[376px] [&.is-side_h2]:text-[length:42.4px]",
    "[&.is-side_p]:opacity-[var(--opacity,_.5)] [&.is-side_p]:top-[477px] [&.is-side_p]:text-[length:21.2px]",
    "[&_h2]:absolute [&_h2]:top-[356px] [&_h2]:left-0 [&_h2]:w-full [&_h2]:m-0 [&_h2]:text-[length:32px] [&_h2]:leading-[1.2] [&_h2]:font-extrabold",
    "[&_p]:absolute [&_p]:top-[416px] [&_p]:left-0 [&_p]:w-full [&_p]:m-0 [&_p]:text-[length:19px] [&_p]:leading-[1.6] [&_p]:font-light",
    "mobile:top-[var(--offset-y,_0)] mobile:w-[189px] mobile:h-[143px]",
    "mobile:[&_h2]:top-[100.6px] mobile:[&_h2]:text-[length:8.98px] mobile:[&_h2]:leading-[1.2] mobile:[&_h2]:tracking-[.09px]",
    "mobile:[&_p]:top-[117.4px] mobile:[&_p]:text-[length:5.39px] mobile:[&_p]:leading-[1.6]",
    "mobile:[&.is-side_h2]:top-[81.3px] mobile:[&.is-side_h2]:text-[length:11.98px]",
    "mobile:[&.is-side_p]:top-[98.1px] mobile:[&.is-side_p]:text-[length:5.98px]",
  ].join(" "),
  newsImageFrame: [
    "absolute top-0 left-0 w-full h-[312px] overflow-hidden ",
    "[&_img]:object-fill",
    "mobile:h-[88px] ",
  ].join(" "),
};
