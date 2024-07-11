export const IS_SERVER = typeof window === 'undefined'
export const IS_DEVELOPMENT = process.env.APP_ENV === 'development'

export const GRAPHQL_SERVER_URL = process.env.APP_GRAPHQL_SERVER_URL as string

export const ACCENT_COLOR = '#19BB4F'