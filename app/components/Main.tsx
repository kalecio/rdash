import { Hero } from "./Hero";
import { Events } from "./Events";
import { News } from "./News";
import { Crt } from "./Crt";
import { GamesCarousel } from "./GamesCarousel";

export function Main() {
  return (
    <main className="red-main">
      <div className="red-texture-overlay" aria-hidden="true" />
      <div className="red-metro-overlay" aria-hidden="true" />
      <Hero />
      <Events />
      <News />
      <Crt />
      <GamesCarousel />
    </main>
  );
}
