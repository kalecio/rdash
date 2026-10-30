import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className={styles.redSite}>
      <Header blurUntilHero />
      <Main />
      <div className="absolute inset-x-0 top-[4653px] mobile:top-[1452px]">
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  redSite: [
    "relative w-[1440px] h-[5146px] m-[0_auto] overflow-clip bg-[#881411] [zoom:min(1,_calc(100vw_/_1440px))] isolate",
    "mobile:w-[402px] mobile:h-[1947px] mobile:m-[0_auto] mobile:[zoom:min(1,_calc(100vw_/_402px))]",
  ].join(" "),
};
