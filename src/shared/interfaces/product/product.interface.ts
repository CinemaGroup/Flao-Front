import type { AllProducts, Product } from '@/__generated__/output'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { IClassName } from '../class-name/class-name.interface'
import type { IHeadingButton } from '../heading/heading.interface'
import type { IPagination } from '../pagination/pagination.interface'

export interface IProduct extends IClassName {
	product: Product
}

export interface IProducts extends AllProducts {
	heading: {
		hasLine?: boolean
		children?: ReactNode
		button?: IHeadingButton
		label?: string
	}
	hasFilters?: boolean
	hasLink?: boolean
	pagination?: IPagination
	scrollQuery?: number
	className?: string
	smallProductClassName?: string
	bigProductClassName?: string
}

export interface IProductsFilters {
	isBig: boolean
	setIsBig: Dispatch<SetStateAction<boolean>>
}
