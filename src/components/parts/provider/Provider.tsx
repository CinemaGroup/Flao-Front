import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import { Star } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Provider.module.scss'
// TODO:
export interface IProvider extends IClassName {
	provider: {
		login: string
		category: {
			name: string
			slug: string
		}
		rating: {
			rate: number
			count: number
		}
		avatarPath: string
	}
}

const Provider: FC<IProvider> = ({ provider, className }) => {
	return (
		<li className={cn(styles.provider, className && className)}>
			<Link
				className={styles.link}
				href={PUBLIC_PAGES.PROVIDER(provider.login)}
			>
				<div className={styles.top}>
					<span className={styles.category}>{provider.category.name}</span>
					<div className={styles.rating}>
						<Star />
						<span className={styles.rate}>{provider.rating.rate}</span>
						<p className={styles.count}>{provider.rating.count} оценки</p>
					</div>
				</div>
				<div className={styles.preview}>
					<StaticImage src={provider.avatarPath} alt={provider.category.name} />
				</div>
				<div className={styles.button}>подробнее</div>
			</Link>
		</li>
	)
}

export default Provider
