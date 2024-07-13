import StaticImage from '@/components/ui/common/image/StaticImage'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import type { IAdvertising } from '@/shared/interfaces/advertising/advertising.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Advertising.module.scss'

const Advertising: FC<IAdvertising> = ({ advertising, className }) => {
	return advertising.link ? (
		<Link
			className={cn(styles.advertising, className && className)}
			href={advertising.link}
		>
			<picture draggable={false}>
				{advertising.imageSetPath && (
					<source
						draggable={false}
						media={`(max-width: ${advertising.responsive || 800}px)`}
						srcSet={advertising.imageSetPath}
					/>
				)}
				<StaticImage src={advertising.imagePath} alt={advertising.alt} />
			</picture>
		</Link>
	) : (
		<Wrapper className={cn(styles.advertising, className && className)}>
			<picture draggable={false}>
				{advertising.imageSetPath && (
					<source
						draggable={false}
						media="(max-width: 800px)"
						srcSet={advertising.imageSetPath}
					/>
				)}
				<StaticImage src={advertising.imagePath} alt={advertising.alt} />
			</picture>
		</Wrapper>
	)
}

export default Advertising
