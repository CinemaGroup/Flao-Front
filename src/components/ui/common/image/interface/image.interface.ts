import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'

interface IImageProperties extends IClassName {
	quality?: number
	src: string
	srcSet?: string
	alt: string
	priority?: boolean
}

export interface IStaticImage extends IImageProperties {
	width?: number
	height?: number
}

export interface IFilledImage extends IImageProperties {
	sizes?: string
}
