import type { IClassName } from '../class-name/class-name.interface'

export interface IAdvertising extends IClassName {
	advertising: {
		link?: string
		imagePath: string
		alt: string
	}
}
