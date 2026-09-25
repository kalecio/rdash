import Image from "next/image";

export function Crt() {
  return (
    <section className="red-crt" aria-label="R-DASH na Nossa Mascote">
      <div className="crt-shadow" />
      <Image src="/assets/red-crt-art.png" alt="Ilustração de uma televisão CRT com R-DASH na tela" fill sizes="881px" priority />
    </section>
  );
}
