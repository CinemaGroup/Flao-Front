import type { IPaginationProperties } from '@/shared/interfaces/pagination/pagination.interface'
import { useMediaQuery } from 'react-responsive'

export const usePagination = ({ pagesCount, page }: IPaginationProperties) => {
	const isMobile = useMediaQuery({ maxWidth: 550 })

	let pages = []

	const maxVisiblePages = isMobile ? 3 : 7
	let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2))
	let endPage = Math.min(pagesCount, startPage + maxVisiblePages - 1)

	if (endPage - startPage < maxVisiblePages - 1) {
		startPage = Math.max(1, endPage - maxVisiblePages + 1)
	}

	if (startPage > 2) {
		pages.push('...')
	}

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i)
	}

	if (endPage < pagesCount - 1) {
		pages.push('...')
	}

	return {
		pages,
	}
}
