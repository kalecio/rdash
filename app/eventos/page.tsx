import type { Metadata } from "next";
import { EventsPage } from "../components/EventsPage";

export const metadata: Metadata = {
  title: "Eventos e torneios de jogos de luta",
  description: "Veja os próximos encontros, torneios e partidas da comunidade R-DASH em Recife. Jogue, conheça outros fãs e participe.",
};

export default function Eventos() { return <EventsPage />; }
