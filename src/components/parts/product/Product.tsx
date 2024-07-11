import { PriceType } from '@/__generated__/output'
import fireIcon from '@/assets/images/icons/fire.png'
import rubleBlackIcon from '@/assets/images/icons/ruble-black.png'
import rubleGreenIcon from '@/assets/images/icons/ruble-green.png'
import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProduct } from '@/shared/interfaces/product/product.interface'
import { priceFormat } from '@/utils/formats/price-format.util'
import cn from 'clsx'
import { Info, Star } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Product.module.scss'

const Product: FC<IProduct> = ({ product, className }) => {
	return (
		<div
			className={cn(
				styles.product,
				{
					[styles.hot]: product.isHot,
				},
				className && className
			)}
		>
			<div className={styles.thumbnail}>
				<div className={styles.top}>
					{product.isHot && (
						<div className={styles.best}>
							<StaticImage src={fireIcon.src} alt="огонь" />
						</div>
					)}
					<Link
						className={styles.category}
						href={PUBLIC_PAGES.CATEGORY(product.category.slug)}
					>
						{product.category.name}
					</Link>
				</div>
				<StaticImage src={product.coverPath} alt={product.name} />
			</div>
			<div className={styles.box}>
				<div
					className={cn(styles.price, {
						[styles.hot]: false,
					})}
				>
					{product.priceType === PriceType.Fixed ? (
						<>
							<span>От</span> {priceFormat(product.fixedPrice)}
						</>
					) : (
						<>
							{priceFormat(product.minPrice)} - {priceFormat(product.maxPrice)}
						</>
					)}
					{}
					<StaticImage
						src={product.isHot ? rubleGreenIcon.src : rubleBlackIcon.src}
						alt="Рубли"
					/>
				</div>
				<h3 className={styles.name}>{product.name}</h3>
				<div className={styles.info}>
					<span className={styles.label}>Поставщик:</span>
					<Link
						className={styles.provider}
						href={PUBLIC_PAGES.PROVIDER(product.provider.profile.login)}
					>
						<StaticImage
							className={styles.avatar}
							src={product.provider.profile.avatarPath}
							alt={product.provider.profile.login}
						/>
						<span className={styles.login}>
							{product.provider.profile.login}
						</span>
						<Info className={styles.about} />
					</Link>
				</div>
				<div className={styles.rating}>
					<Star />
					<span className={styles.rate}>4.7</span>
					<p className={styles.count}>893 оценки</p>
				</div>
			</div>
		</div>
	)
}

export default Product
