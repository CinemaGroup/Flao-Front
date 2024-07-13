export interface IPaginationQuery {
	page: number
	perPage: number
}

export interface IPaginationProperties {
	page: number
	pagesCount: number
}

export interface IPagination extends IPaginationProperties {
	step: number
	goTo: (pageNumber: number) => void
	goToPrev: () => void
	goToNext: () => void
}
