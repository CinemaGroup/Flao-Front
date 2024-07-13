import type { IPaginationQuery } from '@/shared/interfaces/pagination/pagination.interface'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const useCatalog = () => {
	const step = 4
	const { push } = useRouter()
	const searchParams = useSearchParams()

	const [query, setQuery] = useState<IPaginationQuery>({
		page: (+(searchParams.get('page') || 1) - 1) * step + 1,
		perPage: +(searchParams.get('perPage') || 25),
	})

	const displayPage = Math.floor((query.page - 1) / step) + 1
	const startIndex = (displayPage - 1) * step * query.perPage
	const endIndex = query.page * query.perPage

	const isScrollBlocked = useRef(false)

	useEffect(() => {
		const handleScroll = () => {
			if (isScrollBlocked.current) return

			const { scrollTop, clientHeight, scrollHeight } = document.documentElement
			if (scrollTop + clientHeight >= scrollHeight * 0.9) {
				if (query.page % step !== 0) {
					setQuery((prevQuery) => ({
						...prevQuery,
						page: prevQuery.page + 1,
					}))
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [query.page])

	const updateUrlParameters = (newPage: number) => {
		const params = new URLSearchParams(searchParams.toString())
		const displayPage = Math.floor((newPage - 1) / step) + 1
		params.set('page', String(displayPage))
		push('?' + params.toString())
	}

	const goTo = (pageNumber: number) => {
		setQuery((prev) => {
			updateUrlParameters(pageNumber)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return {
				...prev,
				page: pageNumber,
			}
		})
	}

	const goToPrev = () => {
		setQuery((prev) => {
			const currentPage = prev.page
			const currentRangeStart = Math.floor((currentPage - 1) / step) * step + 1

			let newPage = currentRangeStart - step
			if (newPage < 1) newPage = 1

			updateUrlParameters(newPage)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return {
				...prev,
				page: newPage,
			}
		})
	}

	const goToNext = () => {
		setQuery((prev) => {
			const currentPage = prev.page
			const currentRangeStart = Math.floor((currentPage - 1) / step) * step + 1
			const newPage = currentRangeStart + step

			updateUrlParameters(newPage)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return {
				...prev,
				page: newPage,
			}
		})
	}

	return {
		step,
		startIndex,
		endIndex,
		searchParams,
		query,
		goTo,
		goToPrev,
		goToNext,
	}
}
