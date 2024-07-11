import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ extensions, message }) => {
			if (extensions?.code === 'UNAUTHENTICATED' && message === 'Logout') {
				// FIXME:
				// destroySession()
			}
		})
	}
})
