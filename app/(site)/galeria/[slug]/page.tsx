import { buildAlbumMetadata } from '@/lib/seo'
import { notFound } from "next/navigation";
import { getSiteContent } from "@/lib/content";
import { AlbumPage } from "@/app/components/AlbumPage";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = await getSiteContent();
  const album = content.albums.find(item=>item.slug===slug);
  return album ? buildAlbumMetadata(content, album) : {};
}
export default async function GalleryAlbum({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = (await getSiteContent()).albums.find(item=>item.slug===slug);
  if (!album) notFound();
  return <AlbumPage album={album} />;
}
