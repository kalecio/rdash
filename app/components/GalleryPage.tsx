"use client";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useSiteContent, useAsset } from "./SiteContent";
import { DesignPage } from "@/app/components/DesignPage";

export function GalleryPage({ query = "" }: { query?: string }) {
  const content = useSiteContent();
  const page = content.galleryPage;
  const asset = useAsset();
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
        {galleryAlbums.map((album, index) => (
          <Link className={styles.album} style={positions[index]} href={`/galeria/${album.slug}`} key={album.title}>
            <picture className={styles.photo}>
              <source media="(max-width: 600px)" srcSet={asset(album.mobileImage || album.image)} />
              <Image src={asset(album.image)} alt={album.title} width={1144} height={914} className="h-full w-full object-cover" unoptimized />
            </picture>
            <div className={styles.copy}>
              <h2 className={index === 3 ? "h-[54px] mobile:h-auto" : "h-[120px] mobile:h-auto"}>{album.title}</h2>
              <p className={`${index === 2 ? "mobile:mt-0! mobile:line-clamp-6! " : ""}${index === 0 ? "h-[155px] mobile:h-auto" : index === 3 ? "h-[155px] mobile:h-auto" : "h-[186px] mobile:h-auto"}`}>{album.description}</p>
            </div>
            <span className={styles.more}>{page.moreLabel}</span>
          </Link>
        ))}
      </section>
      {query && !galleryAlbums.some(album=>album.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))) && <p role="status" className="absolute left-[100px] top-[346px] mobile:left-[16px] mobile:top-[271px]">{page.emptyLabel} <Link href="/galeria" className="underline">{page.allLabel}</Link></p>}
    </DesignPage>
  );
}

const styles = {
  intro: "absolute left-[100px] top-[210px] [&_h1]:text-[48px] [&_h1]:font-bold [&_h1]:leading-[62px] [&_p]:mt-[8px] [&_p]:text-[32px] [&_p]:font-medium [&_p]:leading-[42px] [&_p]:text-[var(--cms-mutedText)] mobile:left-[16px] mobile:top-[137px] mobile:w-[370px] mobile:[&_h1]:text-[32px] mobile:[&_h1]:leading-[42px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  album: "absolute left-[var(--album-left)] top-[var(--album-top)] h-[var(--album-height)] block w-[604px] overflow-hidden rounded-[16px] bg-[var(--cms-card)] p-[32px_16px] hover:brightness-110 mobile:relative mobile:left-auto mobile:top-auto mobile:flex mobile:h-[222px] mobile:w-[370px] mobile:gap-[12px] mobile:rounded-[7.25px] mobile:p-[15px_8px]",
  photo: "block h-[457px] w-[572px] shrink-0 overflow-hidden rounded-[16px] mobile:h-[192px] mobile:w-[171px] mobile:rounded-[7.25px]",
  copy: "mt-[32px] [&_h2]:text-[44px] [&_h2]:font-bold [&_h2]:leading-[54px] [&_p]:mt-[16px] [&_p]:overflow-hidden [&_p]:text-[24px] [&_p]:leading-[31px] mobile:mt-0 mobile:w-[171px] mobile:[&_h2]:h-auto mobile:[&_h2]:text-[20px] mobile:[&_h2]:font-semibold mobile:[&_h2]:leading-[26px] mobile:[&_p]:mt-[7.5px] mobile:[&_p]:line-clamp-7 mobile:[&_p]:text-[12px] mobile:[&_p]:leading-[16px] mobile:[&_h2]:line-clamp-3",
  more: "absolute bottom-[32px] right-[16px] text-[16px] leading-[21px] text-[#fafafa] underline mobile:bottom-[15px] mobile:right-[8px] mobile:bg-[var(--cms-card)] mobile:text-[10px] mobile:leading-[13px]",
};
