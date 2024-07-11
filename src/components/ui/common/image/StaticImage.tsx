import type { FC } from 'react'
import type { IStaticImage } from './interface/image.interface'

const StaticImage: FC<IStaticImage> = ({
	quality = 100,
	priority = false,
	src,
	alt,
	width,
	height,
	className,
}) => {
	return (
		<img
			draggable={false}
			width={width}
			height={height}
			src={src}
			alt={alt}
			className={className && className}
		/>
	)
}

export default StaticImage
