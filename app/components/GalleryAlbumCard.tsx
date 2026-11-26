"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Album } from "@/lib/content-types";
import { useAsset } from "./SiteContent";

type GalleryAlbumCardProps = {
  album: Album;
  href: string;
  moreLabel: string;
  index?: number;
  style?: CSSProperties;
};

export function GalleryAlbumCard({ album, href, moreLabel, index = 0, style }: GalleryAlbumCardProps) {
  const asset = useAsset();
  return (
    <Link className={styles.album} style={style} href={href}>
      <picture className={styles.photo}>
        <source media="(max-width: 600px)" srcSet={asset(album.mobileImage || album.image)} />
        <Image src={asset(album.image)} alt={album.title} width={1144} height={914} className="h-full w-full object-cover" unoptimized />
      </picture>
      <div className={styles.copy}>
        <h2 className={index === 3 ? "h-[54px] mobile:h-auto" : "h-[120px] mobile:h-auto"}>{album.title}</h2>
        <p className={`${index === 2 ? "mobile:mt-0! mobile:line-clamp-6! " : ""}${index === 0 || index === 3 ? "h-[155px] mobile:h-auto" : "h-[186px] mobile:h-auto"}`}>{album.description}</p>
      </div>
      <span className={styles.more}>{moreLabel}</span>
    </Link>
  );
}

const styles = {
  album: "absolute left-[var(--album-left)] top-[var(--album-top)] h-[var(--album-height)] block w-[604px] overflow-hidden rounded-[16px] bg-[var(--cms-card)] p-[32px_16px] hover:brightness-110 mobile:relative mobile:left-auto mobile:top-auto mobile:flex mobile:h-[222px] mobile:w-[370px] mobile:gap-[12px] mobile:rounded-[7.25px] mobile:p-[15px_8px]",
  photo: "block h-[457px] w-[572px] shrink-0 overflow-hidden rounded-[16px] mobile:h-[192px] mobile:w-[171px] mobile:rounded-[7.25px]",
  copy: "mt-[32px] [&_h2]:text-[44px] [&_h2]:font-bold [&_h2]:leading-[54px] [&_p]:mt-[16px] [&_p]:overflow-hidden [&_p]:text-[24px] [&_p]:leading-[31px] mobile:mt-0 mobile:w-[171px] mobile:[&_h2]:h-auto mobile:[&_h2]:text-[20px] mobile:[&_h2]:font-semibold mobile:[&_h2]:leading-[26px] mobile:[&_p]:mt-[7.5px] mobile:[&_p]:line-clamp-7 mobile:[&_p]:text-[12px] mobile:[&_p]:leading-[16px] mobile:[&_h2]:line-clamp-3",
  more: "absolute bottom-[32px] right-[16px] text-[16px] leading-[21px] text-[#fafafa] underline mobile:bottom-[15px] mobile:right-[8px] mobile:bg-[var(--cms-card)] mobile:text-[10px] mobile:leading-[13px]",
};
