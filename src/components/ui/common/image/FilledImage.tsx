import Image from 'next/image'
import type { FC } from 'react'
import type { IFilledImage } from './interface/image.interface'

const FilledImage: FC<IFilledImage> = ({
	quality = 100,
	priority = false,
	sizes,
	src,
	alt,
	className,
}) => {
	return (
		<Image
			quality={quality}
			priority={priority}
			draggable={false}
			fill
			sizes={sizes}
			src={src}
			alt={alt}
			className={className && className}
		/>
	)
}

export default FilledImage
