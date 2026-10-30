"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  ["Home", "/"],
  ["Comunidade", "/comunidade"],
  ["Eventos", "/eventos"],
  ["Galeria", "/galeria"],
  ["Loja", "/loja"],
];

type HeaderProps = {
  background?: string;
  blurUntilHero?: boolean;
  showProfile?: boolean;
};

export function Header({ background = "#e53a36", blurUntilHero = true, showProfile = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroBlurActive, setHeroBlurActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!blurUntilHero) return;

    const updateBlur = () => {
      const hero = document.getElementById("home-hero");
      const header = headerRef.current;
      if (!hero || !header) {
        setHeroBlurActive(false);
        return;
      }
      setHeroBlurActive(hero.getBoundingClientRect().bottom > header.getBoundingClientRect().bottom);
    };

    updateBlur();
    window.addEventListener("scroll", updateBlur, { passive: true });
    window.addEventListener("resize", updateBlur);
    return () => {
      window.removeEventListener("scroll", updateBlur);
      window.removeEventListener("resize", updateBlur);
    };
  }, [blurUntilHero]);

  const backdropActive = !blurUntilHero || heroBlurActive;
  const blur = backdropActive ? "blur(6.6px)" : "none";

  return (
    <header ref={headerRef} className={styles.redHeader}>
      <div
        aria-hidden="true"
        className={styles.redHeaderBackdrop}
        style={{
          backgroundColor: backdropActive
            ? `color-mix(in srgb, ${background} 42%, transparent)`
            : background,
          backdropFilter: blur,
          WebkitBackdropFilter: blur,
        }}
      />
      <img src="/assets/red-nav.svg?v=2" alt="" className={styles.redNavArt} />
      <div className={styles.redNavbar}>
        <Link href="/" aria-label="R-DASH página inicial" className={styles.redHeaderLogo}>
          <Image src="/assets/rdash_mini_logo_vazado.png" alt="R-DASH" width={64} height={64} priority />
        </Link>
        <nav aria-label="Navegação principal">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        {showProfile && (
          <div className={styles.redHeaderProfile} aria-hidden="true">
            <Image
              src="/assets/red-profile.png"
              alt=""
              width={56}
              height={56}
              className={styles.redHeaderProfileImage}
            />
          </div>
        )}
        <div className={`${styles.mobileMenu}${menuOpen ? " is-open" : ""}`}>
          <button
            className={styles.mobileMenuToggle}
            type="button"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          {menuOpen && (
            <>
              <button className={styles.mobileMenuBackdrop} type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
              <nav className={styles.mobileMenuDrawer} aria-label="Navegação móvel">
                <button className={styles.mobileMenuClose} type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>×</button>
                {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

const styles = {
  redHeader: [
    "sticky z-20 top-0 isolate h-[133px] text-white",
    "mobile:top-0 mobile:left-0 mobile:w-[402px] mobile:h-[64px]",
  ].join(" "),
  redHeaderBackdrop: [
    "absolute inset-0 z-0 [clip-path:polygon(0_0,_100%_0,_100%_66.6%,_94.2%_100%,_94.2%_66.6%,_5.8%_66.6%,_5.8%_100%,_0_66.6%)]",
    "mobile:[clip-path:none] mobile:[backdrop-filter:none!important] mobile:[-webkit-backdrop-filter:none!important]",
  ].join(" "),
  redNavArt: [
    "absolute left-[-6px] top-[-6px] max-w-none",
    "mobile:hidden",
  ].join(" "),
  redNavbar: [
    "absolute z-1 inset-[4px_100px_auto] h-[80px] flex items-center justify-between",
    "[&_>_nav]:flex [&_nav]:items-center [&_nav]:gap-[40px] [&_nav]:p-[4rem_1rem] [&_nav]:[font-family:var(--font-rubik-dirt),_sans-serif] [&_nav]:text-[length:16px] [&_nav]:font-normal [&_nav]:tracking-[-.176px]",
    "[&_nav_a:hover]:text-[#ffd4d2]",
    "compact:inset-x-[56px]",
    "compact:[&_nav]:gap-[40px]",
    "mobile:inset-0 mobile:h-[64px] mobile:p-[0_18px] mobile:justify-between",
    "mobile:[&_>_nav]:hidden",
  ].join(" "),
  redHeaderLogo: [
    "flex items-center justify-center p-[8px]",
    "[&_img]:object-contain",
    "mobile:p-0 mobile:w-[32px] mobile:h-[32px]",
    "mobile:[&_img]:w-[32px] mobile:[&_img]:h-[32px]",
  ].join(" "),
  redHeaderProfile: "w-[56px] h-[56px] overflow-hidden rounded-full border-[3px] border-white mobile:hidden",
  redHeaderProfileImage: "w-full h-full object-cover scale-[2.7] origin-[50%_12%]",
  mobileMenu: [
    "mobile-menu",
    "hidden",
    "mobile:block mobile:relative mobile:z-30",
  ].join(" "),
  mobileMenuToggle: [
    "mobile:relative mobile:z-32 mobile:flex mobile:w-[48px] mobile:h-[37px] mobile:p-0 mobile:cursor-pointer mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-[4px] mobile:[border:0] mobile:bg-[transparent]",
    "mobile:[&_span]:block mobile:[&_span]:w-[20px] mobile:[&_span]:h-[2px] mobile:[&_span]:bg-[#fff] mobile:[&_span]:[transition:transform_.2s_ease,_opacity_.2s_ease]",
    "mobile:[.mobile-menu.is-open_&_span:first-child]:[transform:translateY(6px)_rotate(45deg)]",
    "mobile:[.mobile-menu.is-open_&_span:nth-child(2)]:opacity-[0]",
    "mobile:[.mobile-menu.is-open_&_span:last-child]:[transform:translateY(-6px)_rotate(-45deg)]",
  ].join(" "),
  mobileMenuBackdrop: "mobile:fixed mobile:z-31 mobile:inset-0 mobile:w-[100vw] mobile:h-[100dvh] mobile:p-0 mobile:[border:0] mobile:bg-[rgba(0,0,0,.56)]",
  mobileMenuDrawer: [
    "mobile:fixed mobile:z-32 mobile:inset-[0_0_0_auto] mobile:flex mobile:w-[min(300px,_85vw)] mobile:h-[100dvh] mobile:min-h-full mobile:flex-col mobile:gap-[8px] mobile:p-[104px_24px_24px] mobile:bg-[#5b0c0a] mobile:text-[length:20px] mobile:shadow-[-12px_0_32px_rgba(0,0,0,.35)]",
    "mobile:[&_a]:p-[14px_12px] mobile:[&_a]:[border-bottom:1px_solid_rgba(255,255,255,.14)]",
  ].join(" "),
  mobileMenuClose: "mobile:absolute mobile:top-[20px] mobile:right-[20px] mobile:grid mobile:w-[44px] mobile:h-[44px] mobile:place-items-center mobile:p-0 mobile:[border:0] mobile:bg-[transparent] mobile:text-white mobile:cursor-pointer mobile:[font:36px/1_Arial,_sans-serif]",
};
