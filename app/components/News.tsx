"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const stories = [
  {
    title: "Resultados do Último Torneio",
    copy: "Confira como foi o TOP 8 do nosso último torneio realizado no Festival do Orgulho Nerd.",
    image: "/assets/red-news-1.png",
  },
  {
    title: "Lançamento da Nossa Mascote",
    copy: "Isso mesmo! O RecifeDash agora tem uma mascote! Quem nos visitou no Orgulho Nerd já conhece ela, mas hoje revelamos mais detalhes sobre a nossa adorável menina-caranguejo.",
    image: "/assets/red-news-2.png",
  },
  {
    title: "Jogatina Mensal",
    copy: "Esse Domingo estaremos de volta na QB GEEK. Dessa vez nossa atração principal do dia será o bom e velho torneio de Under Night In-Birth II.",
    image: "/assets/red-event-poster.png",
  },
];

export function News() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateScale = () => {
      const viewportBounds = viewport.getBoundingClientRect();
      const center = viewportBounds.left + viewportBounds.width / 2;
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

      const centeredCard = cards.reduce((closest, current) => current.distance < closest.distance ? current : closest);
      cards.forEach(({ card }) => card.classList.toggle("is-side", card !== centeredCard.card));
    };

    viewport.scrollLeft = viewport.clientWidth < 600 ? 160 : 566;
    updateScale();
    viewport.addEventListener("scroll", updateScale, { passive: true });
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", updateScale);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="red-news" aria-label="Novidades">
      <Image className="section-stamp news-stamp" src="/assets/red-news-title.png" alt="Novidades" width={710} height={386} />
      <div
        className="news-viewport"
        ref={viewportRef}
        tabIndex={0}
        aria-label="Carrossel de novidades. Role horizontalmente para navegar."
      >
        <div className="news-track" ref={trackRef}>
          {stories.map((story) => (
            <div className="news-slot" key={story.title}>
              <article className="news-card">
                <a href="/comunidade" className="news-image-frame" tabIndex={-1}>
                  <Image src={story.image} alt="" fill sizes="(max-width: 600px) 189px, 668px" />
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
