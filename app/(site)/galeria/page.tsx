import { GalleryPage } from "@/app/components/GalleryPage";
import { pageMetadata } from "@/lib/metadata";
export const generateMetadata = () => pageMetadata("galleryPage");
export default async function GaleriaPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  return <GalleryPage query={(Array.isArray(raw) ? raw[0] : raw)?.trim() || ""} />;
}
