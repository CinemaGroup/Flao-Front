import Home from '@/components/screens/public/home/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home',
}

export default function HomePage() {
	return <Home />
}
