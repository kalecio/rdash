"use client";

import Link from "next/link";
import { GameCarousel } from "@/components/carousels/GameCarousel";
import { useSiteContent, useAsset } from "./SiteContent";

export function GamesCarousel() {
  const content = useSiteContent();
  const asset = useAsset();
  return <GameCarousel title={content.home.gamesTitle} titleImage={asset("/assets/red-games-title.png")} items={content.games.map(item => ({ ...item, image: asset(item.image) }))} LinkComponent={Link} />;
}
