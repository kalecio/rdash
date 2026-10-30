import Image from "next/image";
import { DesignFooter } from "./components/DesignFooter";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className={styles.redSite}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 hidden h-[49px] bg-[#e53935] mobile:block" />
      <Header figmaNav activePage="Home" blurUntilHero />
      <Main />
      <div className="absolute inset-x-0 top-[4653px] mobile:left-[16px] mobile:top-[1452px]">
        <DesignFooter />
      </div>
      <Image src="/assets/home-footer-mascot.png" alt="" width={241} height={230} className="absolute left-[-17px] top-[4536px] z-10 mobile:left-[14px] mobile:top-[1402px] mobile:h-[65px] mobile:w-[68px]" unoptimized />
      <Image src="/assets/community-controls.svg" alt="" width={134} height={150} className="absolute left-[1270px] top-[544px] z-10 mobile:hidden" unoptimized />
    </div>
  );
}

const styles = {
  redSite: [
    "relative w-[1440px] h-[5146px] m-[0_auto] overflow-clip bg-[#881411] [zoom:min(1,_calc(100vw_/_1440px))] isolate",
    "mobile:w-[402px] mobile:h-[1947px] mobile:m-[0_auto] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
};
