'use client'

import { ACCENT_COLOR, IS_DEVELOPMENT } from '@/constants/global.constants'
import { ApolloProvider } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import NextTopLoader from 'nextjs-toploader'
import ReactToaster from './toaster/ReactToaster'
import { apolloClient } from '@/api/apollo/apollo.client'

if (IS_DEVELOPMENT) {
	loadDevMessages()
	loadErrorMessages()
}

export default function MainProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<NextTopLoader
				color={ACCENT_COLOR}
				height={2}
				showSpinner={false}
				zIndex={10}
			/>
			<ApolloProvider client={apolloClient}>
				{children}
				<ReactToaster />
			</ApolloProvider>
		</>
	)
}
