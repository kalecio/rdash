import Image from "next/image";

export function Hero() {
  return (
    <section className="red-hero" aria-label="R-DASH">
      <Image className="hero-backdrop" src="/assets/red-hero-bg.png" alt="" width={1440} height={900} priority />
      <div className="hero-shade" />
      <Image className="hero-sol" src="/assets/red-sol.png" alt="Sol Badguy" width={202} height={431} priority />
      <Image className="hero-ky" src="/assets/red-ky.png" alt="Ky Kiske" width={376} height={431} priority />
      <Image className="hero-logo" src="/assets/red-logo.png" alt="R-DASH" width={339} height={174} priority />
      <div className="hero-red-edge" />
      <Image className="hero-rip" src="/assets/red-rip.png" alt="" width={1479} height={192} />
    </section>
  );
}
