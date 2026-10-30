"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import { DesignFooter } from "./DesignFooter";
import { Header } from "./Header";

export function CommunityPage() {
  const content = useSiteContent();
  const asset = useAsset();
  const page = content.community;
  return (
    <div className={styles.site}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[var(--cms-accent)] mobile:block" />
      <Header communityDesign />
      <main className={styles.main}>
        <header className={styles.intro}>
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
        </header>

        <picture className={styles.heroPhoto}>
          <source media="(max-width: 600px)" srcSet={asset("/assets/community-hero-mobile.png")}  />
          <Image src={asset("/assets/community-hero.png")}  alt={page.heroAlt} width={2476} height={1234} className="h-full w-full object-cover" preload unoptimized />
        </picture>

        <section className={styles.story} aria-label="Sobre a comunidade">
          <div className={styles.copy}>
            <article>
              <h2>{page.whoTitle}</h2>
              <p>{page.whoText}</p>
            </article>
            <article>
              <h2>{page.whereTitle}</h2>
              <p>{page.whereText}</p>
            </article>
          </div>
          <picture className={styles.locationPhoto}>
            <source media="(max-width: 600px)" srcSet={asset("/assets/community-location-mobile.png")}  />
            <Image src={asset("/assets/community-location.png")}  alt={page.locationAlt} width={1272} height={918} className="h-full w-full object-cover" unoptimized />
          </picture>
        </section>


        {page.joinEnabled && <section className={styles.join} aria-labelledby="community-join-title">
          <Image src={asset("/assets/community-join-panel.svg")}  alt="" width={1440} height={357} className="absolute left-0 top-[106px] max-w-none mobile:hidden" unoptimized />
          <picture className={styles.mascot}>
            <source media="(max-width: 600px)" srcSet={asset("/assets/community-mascot-mobile.png")}  />
            <Image src={asset("/assets/community-mascot.png")}  alt="" width={1076} height={1176} className="h-full w-full" unoptimized />
          </picture>
          <div className={styles.joinCopy}>
            <h2 id="community-join-title">{page.joinTitle}</h2>
            <p>{page.joinText}</p>
          </div>
          <div className={styles.joinLinks}>
            {page.links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}
          </div>
        </section>}
      </main>

      <div className="absolute left-0 top-[2277px] mobile:left-[16px] mobile:top-[1135px]"><DesignFooter /></div>
    </div>
  );
}

const styles = {
  site: "community-site relative isolate mx-auto h-[2770px] w-[1440px] overflow-x-clip bg-[var(--cms-background)] text-white [zoom:min(1,_calc(100vw_/_1440px))] mobile:h-[1630px] mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  main: "absolute inset-0 h-[2770px] w-[1440px] overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[image:var(--asset-brickwall)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-30 mobile:h-[1630px] mobile:w-[402px]",
  intro: "absolute left-[100px] top-[210px] z-1 [&_h1]:m-0 [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[32px] [&_p]:font-medium [&_p]:leading-[42px] [&_p]:text-[var(--cms-mutedText)] mobile:left-[16px] mobile:top-[137px] mobile:[&_h1]:text-[32px] mobile:[&_h1]:leading-[42px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  heroPhoto: "absolute left-[102px] top-[346px] z-1 block h-[617px] w-[1238px] overflow-hidden rounded-[15px] mobile:left-[16px] mobile:top-[237px] mobile:h-[221px] mobile:w-[370px]",
  story: "absolute left-[102px] top-[1027px] z-1 h-[459px] w-[1238px] mobile:left-[16px] mobile:top-[482px] mobile:h-[328px] mobile:w-[370px]",
  copy: "flex w-[528px] flex-col gap-[49px] [&_h2]:m-0 [&_h2]:text-[48px] [&_h2]:font-bold [&_h2]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[24px] [&_p]:font-medium [&_p]:leading-[31px] mobile:w-[370px] mobile:gap-[16px] mobile:[&_h2]:text-[20px] mobile:[&_h2]:leading-[26px] mobile:[&_p]:text-[12px] mobile:[&_p]:leading-[16px] mobile:[&_p]:text-[var(--cms-mutedText)]",
  locationPhoto: "absolute left-[602px] top-0 block h-[459px] w-[636px] overflow-hidden rounded-[15px] mobile:left-0 mobile:top-[184px] mobile:h-[144px] mobile:w-[370px]",
  join: "absolute left-0 top-[1654px] z-1 h-[588px] w-[1440px] mobile:top-[834px] mobile:h-[802px] mobile:w-[402px] mobile:bg-[#e84e4a]",
  mascot: "absolute left-0 top-0 z-1 block h-[588px] w-[538px] mobile:left-[168px] mobile:top-[239px] mobile:h-[94px] mobile:w-[66px]",
  joinCopy: "absolute left-[543px] top-[129px] [&_h2]:m-0 [&_h2]:whitespace-nowrap [&_h2]:text-[64px] [&_h2]:font-bold [&_h2]:italic [&_h2]:leading-[83px] [&_p]:mt-[16px] [&_p]:text-[24px] [&_p]:font-medium [&_p]:leading-[31px] mobile:left-[41px] mobile:top-[35px] mobile:w-[319px] mobile:text-center mobile:[&_h2]:text-[32px] mobile:[&_h2]:leading-[42px] mobile:[&_p]:mt-[8px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  joinLinks: "absolute left-[538px] top-[324px] flex gap-[32px] [&_a]:flex [&_a]:h-[80px] [&_a]:w-[392px] [&_a]:items-center [&_a]:justify-center [&_a]:rounded-[10px] [&_a]:bg-[var(--cms-dark)] [&_a]:text-[24px] [&_a]:font-medium [&_a]:leading-[16px] [&_a:hover]:bg-[#42100f] mobile:left-[86px] mobile:top-[131px] mobile:flex-col mobile:gap-[20px] mobile:[&_a]:h-[47px] mobile:[&_a]:w-[229px] mobile:[&_a]:text-[20px]",
};
