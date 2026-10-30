import { pageMetadata } from "@/lib/metadata";
import { EventsPage } from "@/app/components/EventsPage";

export const generateMetadata = () => pageMetadata("eventsPage");

export default function Eventos() { return <EventsPage />; }
