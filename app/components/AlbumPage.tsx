"use client";
import Image from "next/image";
import Link from "next/link";
import type { Album } from "@/lib/content-types";
import { useSiteContent, useAsset } from "./SiteContent";
import { DesignPage } from "@/app/components/DesignPage";

export function AlbumPage({ album }: { album: Album }) {
  const { galleryPage } = useSiteContent();
  const asset = useAsset();
  const photos = album.photos;
  const rows = photos.length ? 1 + Math.ceil((photos.length - 1) / 3) : 0;
  const mobileRows = photos.length ? 1 + Math.ceil((photos.length - 1) / 2) : 0;
  return (
    <DesignPage activePage="Galeria" desktopHeight={Math.max(1400, 480 + rows * 394 + Math.max(0, rows - 1) * 32 + 165 + 493)} mobileHeight={Math.max(1100, 487 + mobileRows * 151 + Math.max(0, mobileRows - 1) * 16 + 65 + 495)}>
      <Link href="/galeria" className="sr-only focus:not-sr-only">{galleryPage.backLabel}</Link>
      <header className="absolute left-[100px] top-[210px] w-[1240px] mobile:left-[16px] mobile:top-[137px] mobile:w-[370px]">
        <h1 className="text-[48px] font-bold uppercase leading-[62px] mobile:text-[32px] mobile:leading-[42px]">{album.title}</h1>
        <p className="mt-[8px] text-[32px] font-medium leading-[42px] text-[var(--cms-mutedText)] mobile:text-[20px] mobile:leading-[26px]">{album.description}</p>
      </header>
      <section aria-label={`Fotos: ${album.title}`} className="absolute left-[100px] top-[480px] grid w-[1240px] grid-cols-3 auto-rows-[394px] gap-[32px] mobile:left-[16px] mobile:top-[487px] mobile:w-[370px] mobile:grid-cols-2 mobile:auto-rows-[151px] mobile:gap-x-[8px] mobile:gap-y-[16px]">
        {photos.map((photo, index) => (
          <picture key={`${photo.image}-${index}`} className={`block overflow-hidden rounded-[16px] mobile:rounded-[4.77px] ${index === 0 ? "col-span-3 mobile:col-span-2" : ""}`}>
            <source media="(max-width: 600px)" srcSet={asset(photo.mobileImage || photo.image)} />
            <Image src={asset(photo.image)} alt={photo.alt} width={index === 0 ? 1240 : 588} height={index === 0 ? 394 : 591} className="h-full w-full object-cover" unoptimized />
          </picture>
        ))}
      </section>
    </DesignPage>
  );
}
