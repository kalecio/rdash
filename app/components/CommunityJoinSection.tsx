"use client";

import Image from "next/image";
import { useAsset, useSiteContent } from "./SiteContent";

export function CommunityJoinSection() {
  const content = useSiteContent();
  const asset = useAsset();
  const page = content.community;

  if (!page.joinEnabled) return null;

  return (
    <section className={styles.join} aria-labelledby="community-join-title">
      <Image src={asset("/assets/community-join-panel.svg")} alt="" width={1440} height={357} className="absolute left-0 top-[106px] max-w-none mobile:hidden" unoptimized />
      <picture className={styles.mascot}>
        <source media="(max-width: 600px)" srcSet={asset("/assets/community-mascot-mobile.png")} />
        <Image src={asset("/assets/community-mascot.png")} alt="" width={1076} height={1176} className="h-full w-full" unoptimized />
      </picture>
      <div className={styles.joinCopy}>
        <h2 id="community-join-title">{page.joinTitle}</h2>
        <p>{page.joinText}</p>
      </div>
      <div className={styles.joinLinks}>
        {page.links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
      </div>
    </section>
  );
}

const styles = {
  join: "absolute left-0 top-[1654px] z-1 h-[588px] w-[1440px] mobile:top-[834px] mobile:h-[802px] mobile:w-[402px] mobile:bg-[var(--cms-join)]",
  mascot: "absolute left-0 top-0 z-1 block h-[588px] w-[538px] mobile:left-[168px] mobile:top-[239px] mobile:h-[94px] mobile:w-[66px]",
  joinCopy: "absolute left-[543px] top-[129px] [&_h2]:m-0 [&_h2]:whitespace-nowrap [&_h2]:text-[64px] [&_h2]:font-bold [&_h2]:italic [&_h2]:leading-[83px] [&_p]:mt-[16px] [&_p]:text-[24px] [&_p]:font-medium [&_p]:leading-[31px] mobile:left-[41px] mobile:top-[35px] mobile:w-[319px] mobile:text-center mobile:[&_h2]:text-[32px] mobile:[&_h2]:leading-[42px] mobile:[&_p]:mt-[8px] mobile:[&_p]:text-[20px] mobile:[&_p]:leading-[26px]",
  joinLinks: "absolute left-[538px] top-[324px] flex gap-[32px] [&_a]:flex [&_a]:h-[80px] [&_a]:w-[392px] [&_a]:items-center [&_a]:justify-center [&_a]:rounded-[10px] [&_a]:bg-[var(--cms-dark)] [&_a]:text-[24px] [&_a]:font-medium [&_a]:leading-[16px] [&_a:hover]:bg-[#42100f] mobile:left-[86px] mobile:top-[131px] mobile:flex-col mobile:gap-[20px] mobile:[&_a]:h-[47px] mobile:[&_a]:w-[229px] mobile:[&_a]:text-[20px]",
};
