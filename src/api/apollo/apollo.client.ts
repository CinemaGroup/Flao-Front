import { IS_DEVELOPMENT, IS_SERVER } from '@/constants/global.constants'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { apolloLinks } from './links/apollo-links.api'

const removeTypenameFromCache = { addTypename: false }

export const apolloClient = new ApolloClient({
	link: apolloLinks,
	defaultOptions: {
		query: {
			fetchPolicy: IS_SERVER ? 'no-cache' : undefined,
		},
		mutate: {
			fetchPolicy: 'no-cache',
		},
	},
	cache: new InMemoryCache(removeTypenameFromCache),
	connectToDevTools: IS_DEVELOPMENT,
	ssrMode: IS_SERVER,
})
