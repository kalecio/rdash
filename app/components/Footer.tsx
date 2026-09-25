import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="red-footer">
      <img src="/assets/red-footer.svg" alt="" className="footer-outline" />
      <div className="footer-columns">
        <section className="footer-about">
          <Image src="/assets/rdash_ mini_logo.png" alt="R-DASH" width={79} height={79} />
          <h2><span className="footer-about-desktop">Sobre nós</span><span className="footer-about-mobile">Sobre</span></h2>
          <p>A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.</p>
        </section>
        <section className="footer-sitemap">
          <h2>Sitemap</h2>
          <div><ul><li><Link href="/">Home</Link></li><li><Link href="/comunidade">Comunidade</Link></li><li><Link href="/eventos">Eventos</Link></li></ul><ul><li><Link href="/galeria">Galeria</Link></li><li><Link href="/loja">Loja</Link></li></ul></div>
        </section>
        <section className="footer-social">
          <h2>Social</h2>
          <ul className="footer-social-desktop"><li><a href="https://www.instagram.com/r_dash_/">Instagram</a></li><li><a href="https://www.twitch.tv/r_dash_">Twitch</a></li><li><a href="https://www.youtube.com/@rdashrecife">YouTube</a></li></ul>
          <ul className="footer-social-mobile"><li><a href="https://www.instagram.com/r_dash_/">Instagram</a></li><li><a href="https://www.facebook.com/rdashrecife">Facebook</a></li><li><a href="https://www.youtube.com/@rdashrecife">YouTube</a></li></ul>
        </section>
      </div>
      <div className="footer-mascot" aria-hidden="true">
        <Image className="footer-mascot-image" src="/assets/raissa_dash.gif" alt="" width={2048} height={2048} unoptimized />
      </div>
    </footer>
  );
}
