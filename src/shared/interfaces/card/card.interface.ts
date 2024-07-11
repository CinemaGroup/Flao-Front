import type { Card } from '@/__generated__/output'
import type { IClassName } from '../class-name/class-name.interface'

export interface ICard extends IClassName {
	card: Card
}
