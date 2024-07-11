import type { LucideIcon } from 'lucide-react'

export interface IListItem {
	alt?: string
	label?: string
	href: string
	icon?: LucideIcon | string
	onClick?: () => void
	subItems?: IListItem[]
}

export interface IList {
	items: IListItem[]
	listClassName?: string
	itemClassName?: string
	buttonClassName?: string
}
