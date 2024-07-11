import type { Product } from '@/__generated__/output'
import type { IClassName } from '../class-name/class-name.interface'

export interface IProduct extends IClassName {
	product: Product
}
