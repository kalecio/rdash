"use client";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useSiteContent } from "./SiteContent";
import { DesignPage } from "@/app/components/DesignPage";
import { GalleryAlbumCard } from "./GalleryAlbumCard";

export function GalleryPage({ query = "" }: { query?: string }) {
  const content = useSiteContent();
  const page = content.galleryPage;
  const galleryAlbums = content.albums.filter(album=>album.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")));
  const bottoms = [346,346];
  const positions = galleryAlbums.map((_,index)=>{
    const column = index % 2;
    const height = [881,912,912,815][index % 4];
    const top = bottoms[column];
    bottoms[column] += height + 32;
    return { "--album-left": `${100 + column * 636}px`, "--album-top": `${top}px`, "--album-height": `${height}px` } as CSSProperties;
  });
  return (
    <DesignPage activePage="Galeria" desktopHeight={Math.max(1700, Math.max(...bottoms) - 32 + 118 + 493)} mobileHeight={Math.max(1000, 271 + galleryAlbums.length * 222 + Math.max(0, galleryAlbums.length - 1) * 24 + 64 + 495)} mobileSearch={
      <details className="absolute left-[282px] top-[66px] z-30 hidden mobile:block">
        <summary aria-label={page.searchLabel} className="h-[32px] w-[32px] cursor-pointer list-none [&::-webkit-details-marker]:hidden"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current stroke-[2.5]"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 6 6"/></svg></summary>
        <form action="/galeria" className="absolute right-[-72px] top-[48px] flex w-[370px] gap-[8px] rounded bg-[var(--cms-background)] p-[8px]"><input name="q" aria-label={page.inputLabel} defaultValue={query} className="min-w-0 flex-1 rounded bg-white px-[8px] text-black" /><button type="submit">{page.submitLabel}</button></form>
      </details>
    }>
      <header className={styles.intro}>
        <h1>{page.title}</h1>
        <p>{page.subtitle}</p>
      </header>
      <section className="mobile:absolute mobile:left-[16px] mobile:top-[271px] mobile:flex mobile:flex-col mobile:gap-[24px]" aria-label="Álbuns da galeria">
        {galleryAlbums.map((album, index) => <GalleryAlbumCard key={album.title} album={album} href={`/galeria/${album.slug}`} moreLabel={page.moreLabel} index={index} style={positions[index]} />)}
      </section>
      {query && !galleryAlbums.some(album=>album.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))) && <p role="status" className="absolute left-[100px] top-[346px] mobile:left-[16px] mobile:top-[271px]">{page.emptyLabel} <Link href="/galeria" className="underline">{page.allLabel}</Link></p>}
    </DesignPage>
  );
}

const styles = {
  intro: "absolute left-[100px] top-[210px] [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[32px] [&_p]:font-medium [&_p]:leading-[42px] [&_p]:text-[var(--cms-mutedText)] mobile:left-[16px] mobile:top-[137px] mobile:w-[370px] mobile:[&_h1]:text-[32px] mobile:[&_h1]:leading-[42px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
};
