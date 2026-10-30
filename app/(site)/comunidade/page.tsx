import { CommunityPage } from "@/app/components/CommunityPage";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = () => pageMetadata("community");

export default function Comunidade() {
  return <CommunityPage />;
}
