export const ADMIN_PAGES = {
	ROOT: '/manage',
}

export const ADMIN_EDITS = {}

export const ERROR_PAGES = {
	NOT_FOUND: '/not-found',
}

export const PUBLIC_PAGES = {
	HOME: '/',
	LOGIN: '/auth?type=login',
	REGISTER: '/auth?type=register',
	REDIRECT: '/auth/redirect',
	LOST: '/auth?type=lost',
	CATALOG: '/catalog',
	POLICY: '/privacy-policy',
	TERMS: '/terms',
	ALL_CATEGORIES: '/categories',
	PROVIDER: (login: string) => `/provider/${login}`,
	PRODUCT: (id: number) => `/product/${id}`,
	CATEGORY: (slug: string) => `/catalog/?category=${slug}`,
	SEARCH: (searchTerm: string) => `/catalog/?searchTerm=${searchTerm}`,
}

export const USER_PAGES = {}
