import { LeaderboardPage } from "../components/LeaderboardPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranking de jogadores",
  description:
    "Confira o ranking dos jogadores da comunidade R-DASH e acompanhe os destaques dos jogos de luta em Recife.",
};

export default function Leaderboard() {
  return <LeaderboardPage />;
}
