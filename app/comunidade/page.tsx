import { CommunityPage } from "../components/CommunityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidade de jogos de luta",
  description:
    "Conheça a comunidade R-DASH em Recife, conecte-se com jogadores e participe de encontros, partidas e torneios de jogos de luta.",
};

export default function Comunidade() {
  return <CommunityPage />;
}
