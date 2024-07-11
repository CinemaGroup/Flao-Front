import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ICategory } from '@/shared/interfaces/category/category.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Category.module.scss'

const Category: FC<ICategory> = ({ category, variant, className }) => {
	const isCard = variant === 'card'

	return (
		<li className={cn(styles.category, isCard ? styles.card : styles.circle, className && className)}>
			<Link
				className={cn(styles.link, isCard ? styles.card : styles.circle)}
				href={PUBLIC_PAGES.CATEGORY(category.slug)}
			>
				<div className={cn(styles.preview, isCard ? styles.big : styles.small)}>
					<StaticImage
						src={isCard ? category.bigImagePath : category.smallImagePath}
						alt={category.name}
					/>
				</div>
				<span className={styles.name}>{category.name}</span>
			</Link>
		</li>
	)
}

export default Category
