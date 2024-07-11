import type { ChangeEvent } from 'react'
import type { IClassName } from '../class-name/class-name.interface'

export interface ISearchField extends IClassName {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
}
