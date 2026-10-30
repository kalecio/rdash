"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import { DesignFooter } from "@/app/components/DesignFooter";
import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";

export function HomePage() {
  const content = useSiteContent();
  const asset = useAsset();
  return (
    <div className={styles.redSite}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[var(--cms-accent)] mobile:block" />
      <Header figmaNav activePage="Home" blurUntilHero />
      <Main />
      <div className="absolute inset-x-0 top-[var(--home-footerTop)] mobile:left-[16px] mobile:top-[var(--home-mobileFooterTop)]">
        <DesignFooter />
      </div>
      {content.home.mascotEnabled && <Image src={asset("/assets/home-footer-mascot.gif")}  alt="" width={241} height={230} className="absolute left-[-17px] top-[var(--home-mascotTop)] z-10 mobile:left-[14px] mobile:top-[var(--home-mobileMascotTop)] mobile:h-[65px] mobile:w-[68px]" unoptimized />}
    </div>
  );
}

const styles = {
  redSite: [
    "relative w-[1440px] h-[var(--home-height)] m-[0_auto] overflow-clip bg-[var(--cms-background)] [zoom:min(1,_calc(100vw_/_1440px))] isolate",
    "mobile:w-[402px] mobile:h-[var(--home-mobileHeight)] mobile:m-[0_auto] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
};
