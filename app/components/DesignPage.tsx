"use client";

import { PageBackground } from "@/components/layout/PageBackground";
import { useSiteContent, useAsset } from "./SiteContent";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "./Header";
import { DesignFooter } from "./DesignFooter";

type Props = {
  children: ReactNode;
  activePage: string;
  desktopHeight: number;
  mobileHeight: number;
  background?: "background" | "dark";
  mobileSearch?: ReactNode;
};

export function DesignPage({ children, activePage, desktopHeight, mobileHeight, background = "background", mobileSearch }: Props) {
  const content = useSiteContent();
  const asset = useAsset();
  const dimensions = {
    "--page-height": `${desktopHeight}px`,
    "--mobile-height": `${mobileHeight}px`,
    "--footer-top": `${desktopHeight - 493}px`,
    "--mobile-footer-top": `${mobileHeight - 495}px`,
    backgroundColor: content.site.theme[background],
  } as CSSProperties;
  return (
    <div style={dimensions} className="relative isolate mx-auto h-[var(--page-height)] w-[1440px] overflow-x-clip text-white [zoom:min(1,_calc(100vw_/_1440px))] mobile:h-[var(--mobile-height)] mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))]">
      <PageBackground image={asset("/assets/brickwall.png")} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[var(--cms-accent)] mobile:block" />
      <Header communityDesign activePage={activePage} />
      {mobileSearch}
      <main>{children}</main>
      <div className="absolute left-0 top-[var(--footer-top)] mobile:left-[16px] mobile:top-[var(--mobile-footer-top)]"><DesignFooter /></div>
    </div>
  );
}
