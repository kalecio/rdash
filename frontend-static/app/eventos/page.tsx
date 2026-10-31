import { EventsPage } from '@/app/components/EventsPage'
import { pageMetadata } from '@/frontend-static/lib/metadata'

export const generateMetadata = () => pageMetadata('eventsPage')
export default function Eventos() { return <EventsPage /> }
