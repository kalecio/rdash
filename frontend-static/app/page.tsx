import { HomePage } from '@/app/components/HomePage'
import { pageMetadata } from '@/frontend-static/lib/metadata'

export const generateMetadata = () => pageMetadata('home')
export default function Home() { return <HomePage /> }
