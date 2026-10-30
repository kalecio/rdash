"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import { DesignFooter } from "./DesignFooter";
import { Header } from "./Header";
import { CommunityJoinSection } from "./CommunityJoinSection";

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


        <CommunityJoinSection />
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
};
