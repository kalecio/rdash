import { LeaderboardPage } from '@/app/components/LeaderboardPage'
import { pageMetadata } from '@/frontend-static/lib/metadata'

export const generateMetadata = () => pageMetadata('leaderboardPage')
export default function Leaderboard() { return <LeaderboardPage /> }
