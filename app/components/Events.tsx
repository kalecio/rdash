import Image from "next/image";

export function Events() {
  return (
    <section className="red-event" id="eventos" aria-labelledby="event-title">
      <div className="event-board">
        <div className="event-art-wrap">
          <Image src="/assets/red-event-art.png" alt="Arte do próximo evento R-DASH" width={710} height={386} className="event-art" />
        </div>
        <div className="event-poster-wrap">
          <Image src="/assets/red-event-poster.png" alt="Cartaz do torneio Under Night In-Birth II" width={533} height={705} className="event-poster" />
          <Image src="/assets/red-tape.png" alt="" width={114} height={122} className="event-tape event-tape-one" />
          <Image src="/assets/red-tape.png" alt="" width={114} height={122} className="event-tape event-tape-two" />
        </div>
        <div className="event-info">
          <a href="/eventos" className="event-info-link">&gt;&gt; INFO</a>
          <div className="event-kind-icon" aria-hidden="true"><svg viewBox="0 0 51 51"><path d="M11 40 40 11M22 11h18v18" /></svg></div>
          <h2 id="event-title">Tipo do evento</h2>
          <div className="event-ribbon"><span>JOGATINA<br />MENSAL</span></div>
          <div className="event-location-icon" aria-hidden="true"><svg viewBox="0 0 51 51"><path d="M11 40 40 11M22 11h18v18" /></svg></div>
          <h3>Local:</h3>
          <Image src="/assets/red-event-map.png" alt="Mapa da Galeria Hora Center" width={455} height={128} className="event-map" />
          <p className="event-address">Galeria Hora Center<br />Rua da Hora, 345 - Espinheiro</p>
          <a className="event-join" href="/eventos">
            <img className="event-join-edge" src="/assets/red-join-button-edge.svg" alt="" />
            <Image className="event-join-face" src="/assets/red-join-button-face.png" alt="" width={320} height={115} />
            <span>Inscreva-se</span>
          </a>
          <p className="event-price">Valor: R$10 (pago no local)</p>
        </div>
      </div>
      <div className="event-sticker">TORNEIO • COMUNIDADE • RECIFE</div>
    </section>
  );
}
