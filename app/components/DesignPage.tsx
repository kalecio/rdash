import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "./Header";
import { DesignFooter } from "./DesignFooter";

type Props = {
  children: ReactNode;
  activePage: string;
  desktopHeight: number;
  mobileHeight: number;
  background?: string;
  mobileSearch?: ReactNode;
};

export function DesignPage({ children, activePage, desktopHeight, mobileHeight, background = "#881411", mobileSearch }: Props) {
  const dimensions = {
    "--page-height": `${desktopHeight}px`,
    "--mobile-height": `${mobileHeight}px`,
    "--footer-top": `${desktopHeight - 493}px`,
    "--mobile-footer-top": `${mobileHeight - 495}px`,
    backgroundColor: background,
  } as CSSProperties;
  return (
    <div style={dimensions} className="relative isolate mx-auto h-[var(--page-height)] w-[1440px] overflow-x-clip text-white [zoom:min(1,_calc(100vw_/_1440px))] mobile:h-[var(--mobile-height)] mobile:w-[402px] mobile:[zoom:min(1,_calc(100vw_/_402px))]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[url('/assets/brickwall.png')] bg-cover bg-center bg-no-repeat opacity-30 mobile:hidden" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[#e53935] mobile:block" />
      <Header communityDesign activePage={activePage} />
      {mobileSearch}
      <main>{children}</main>
      <Image src="/assets/community-controls.svg" alt="" width={134} height={150} className="absolute left-[1270px] top-[544px] z-2 mobile:hidden" unoptimized />
      <div className="absolute left-0 top-[var(--footer-top)] mobile:left-[16px] mobile:top-[var(--mobile-footer-top)]"><DesignFooter /></div>
    </div>
  );
}
