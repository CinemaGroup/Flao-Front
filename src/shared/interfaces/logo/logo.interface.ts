import type { TypeLogoVariant } from '@/shared/types/logo/logo.type'
import type { IClassName } from '../class-name/class-name.interface'

export interface ILogo extends IClassName {
	variant?: TypeLogoVariant
}
