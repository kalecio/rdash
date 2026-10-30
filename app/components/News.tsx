"use client";

import Link from "next/link";
import { NewsCarousel } from "@/components/carousels/NewsCarousel";
import { useSiteContent, useAsset } from "./SiteContent";

export function News() {
  const content = useSiteContent();
  const asset = useAsset();
  return <NewsCarousel title={content.home.newsTitle} titleImage={asset("/assets/red-news-title.png")} items={content.news.map(item => ({ ...item, image: asset(item.image) }))} LinkComponent={Link} />;
}
