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
    <section className="red-games" id="galeria" aria-label="Nossos jogos">
      <Image className="section-stamp games-stamp" src="/assets/red-games-title.png" alt="Nossos jogos" width={710} height={386} />
      <div className="game-track-window">
        <div className="game-track">
          {games.map(([title, image]) => (
            <article className="game-card" key={title}>
              <a href="/galeria" className="game-image">
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
