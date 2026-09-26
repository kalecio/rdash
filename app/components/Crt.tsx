import Image from "next/image";

export function Crt() {
  return (
    <section className={styles.redCrt} aria-label="R-DASH na Nossa Mascote">
      <div className={styles.crtShadow} />
      <Image src="/assets/red-crt-art.png" alt="Ilustração de uma televisão CRT com R-DASH na tela" fill sizes="881px" priority />
    </section>
  );
}

const styles = {
  redCrt: [
    "absolute top-[2572px] left-[279px] w-[881px] h-[953px]",
    "[&_>_img]:object-contain",
    "mobile:left-[76.36px] mobile:top-[854.03px] mobile:w-[248.69px] mobile:h-[269.01px]",
  ].join(" "),
  crtShadow: [
    "absolute left-[-12.7%] top-[83.3%] w-[125.4%] h-[18.7%] rounded-[50%] bg-[#080303]",
    "mobile:left-[-12.7%] mobile:top-[83.3%] mobile:w-[125.4%] mobile:h-[18.7%]",
  ].join(" "),
};
