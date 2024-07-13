import type { FC } from 'react'
import type { IStaticImage } from './interface/image.interface'

const StaticImage: FC<IStaticImage> = ({
	quality = 100,
	priority = false,
	src,
	srcSet,
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
			srcSet={srcSet}
			alt={alt}
			className={className && className}
		/>
	)
}

export default StaticImage
