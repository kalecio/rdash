"use client";

import { useSiteContent, useAsset } from "./SiteContent";
import Image from "next/image";
import Link from "next/link";
import { isVisibleNavigationLink } from "@/lib/navigation";
import { FooterCredit } from "./FooterCredit";

export function DesignFooter() {
  const content = useSiteContent();
  const asset = useAsset();
  const footer = content.site.footer;
  const visibleLinks = footer.links.filter(isVisibleNavigationLink);
  return (
      <footer className={styles.footer}>
        <Image src={asset("/assets/community-footer.svg")}  alt="" width={1440} height={518} className="absolute left-0 top-[-25px] max-w-none mobile:hidden" unoptimized />
        <section className={styles.footerAbout}>
          <Image unoptimized src={asset("/assets/community-footer-logo.png")}  alt={content.site.name} width={79} height={79} className="mobile:hidden" />
          <h2><span className="mobile:hidden">{footer.title}</span><span className="hidden mobile:inline">{footer.mobileTitle}</span></h2>
          <p>{footer.about}</p>
        </section>
        <section className={styles.footerSitemap}>
          <h2>{footer.sitemapTitle}</h2>
          <div className="flex gap-[48px]">
            {[visibleLinks.slice(0, Math.ceil(visibleLinks.length / 2)), visibleLinks.slice(Math.ceil(visibleLinks.length / 2))].map((links,index)=><ul key={index}>{links.map(link=><li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>)}
          </div>
        </section>
        <section className={styles.footerSocial}>
          <h2>{footer.socialTitle}</h2>
          <ul>
            {footer.social.map(link=><li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
        </section>
        <FooterCredit />
      </footer>
  );
}

const styles = {
  footer: "relative left-0 top-0 z-5 h-[493px] w-[1440px] text-[#fafafa] [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:leading-[29px] [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 [&_li]:mt-[8px] [&_li:first-child]:mt-0 [&_a]:block [&_a]:p-[8px] [&_a]:text-[16px] [&_a]:leading-[21px] [&_a]:tracking-[-.176px] [&_a:hover]:underline mobile:left-0 mobile:top-0 mobile:h-[495px] mobile:w-[370px] mobile:rounded-t-[16px] mobile:bg-[var(--cms-accent)] mobile:shadow-[0_12px_50.5px_rgba(0,0,0,.25)]",
  footerAbout: "absolute left-[100px] top-[111.68px] w-[313.21px] [&_h2]:mt-[8px] [&_h2]:p-[8px] [&_p]:mt-[8px] [&_p]:p-[8px] [&_p]:text-[16px] [&_p]:leading-[21px] mobile:left-[8px] mobile:top-[32px] mobile:w-[354px] mobile:[&_h2]:mt-0",
  footerSitemap: "absolute left-[675.61px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:hidden",
  footerSocial: "absolute left-[1146px] top-[125.94px] [&_h2]:mb-[8px] [&_h2]:p-[8px] mobile:left-[8px] mobile:top-[251px]",
};
