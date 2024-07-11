import type { TypeHeadingVariant } from '@/shared/types/heading/heading.type'
import type { IClassName } from '../class-name/class-name.interface'

export interface IHeadingButton {
	label: string
	href: string
}

export interface IHeading extends IClassName {
	variant: TypeHeadingVariant
	hasLine?: boolean
	button?: IHeadingButton
}
