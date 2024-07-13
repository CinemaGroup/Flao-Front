import type { IClassName } from '../class-name/class-name.interface'

export interface IFilter extends IClassName {
	icon: string
	options: string[]
	isSearchable?: boolean
	label?: string
	isMulti?: boolean
}
