"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["Comunidade", "/comunidade"],
  ["Eventos", "/eventos"],
  ["Galeria", "/galeria"],
  ["Loja", "/loja"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="red-header">
      <img src="/assets/red-nav.svg" alt="" className="red-nav-art" />
      <div className="red-navbar">
        <Link href="/" aria-label="R-DASH página inicial" className="red-header-logo">
          <Image src="/assets/rdash_mini_logo_vazado.png" alt="R-DASH" width={64} height={64} priority />
        </Link>
        <nav aria-label="Navegação principal">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          {menuOpen && (
            <>
              <button className="mobile-menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
              <nav className="mobile-menu-drawer" aria-label="Navegação móvel">
                <button className="mobile-menu-close" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>×</button>
                {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
