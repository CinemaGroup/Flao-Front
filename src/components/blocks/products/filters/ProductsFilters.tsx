'use client'

import cityIcon from '@/assets/images/icons/city.png'
import bigGridOpacityIcon from '@/assets/images/icons/grid-green-opacity.png'
import bigGridIcon from '@/assets/images/icons/grid-green.png'
import providerIcon from '@/assets/images/icons/provider.png'
import smallGridOpacityIcon from '@/assets/images/icons/small-grid-green-opacity.png'
import smallGridIcon from '@/assets/images/icons/small-grid-green.png'
import sortIcon from '@/assets/images/icons/sort.png'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Filter from '@/components/ui/elements/filter/Filter'
import { COUNTRIES_DATA } from '@/data/countries.data'
import type { IProductsFilters } from '@/shared/interfaces/product/product.interface'
import cn from 'clsx'
import { Settings2, X } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './ProductsFilters.module.scss'
import {
	PRODUCTS_FILTERS_PROVIDERS_DATA,
	PRODUCTS_FILTERS_SORT_DATA,
} from './data/products-filters.data'

const ProductsFilters: FC<IProductsFilters> = ({ isBig, setIsBig }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div className={styles.filters}>
				<button className={styles.burger} onClick={() => setIsShow(!isShow)}>
					<Settings2 />
				</button>
				<div
					className={cn(styles.fill, {
						[styles.active]: isShow,
					})}
				>
					<button className={styles.close} onClick={() => setIsShow(false)}>
						<X />
					</button>
					<h2 className={styles.heading}>Фильтры</h2>
					<span className={styles.label}>сортировка</span>
					<div className={styles.items}>
						<Filter
							options={PRODUCTS_FILTERS_SORT_DATA}
							icon={sortIcon.src}
							label="По новинкам"
						/>
						<Filter
							options={COUNTRIES_DATA}
							icon={cityIcon.src}
							label="Город"
						/>
						<Filter
							options={PRODUCTS_FILTERS_PROVIDERS_DATA}
							icon={providerIcon.src}
							label="Поставщик"
						/>
					</div>
				</div>
				<ul className={styles.grids}>
					<li className={styles.grid}>
						<button onClick={() => setIsBig(true)} disabled={isBig}>
							{isBig ? (
								<StaticImage src={bigGridOpacityIcon.src} alt="Grid" />
							) : (
								<StaticImage src={bigGridIcon.src} alt="Grid" />
							)}
						</button>
					</li>
					<li className={styles.grid}>
						<button onClick={() => setIsBig(false)} disabled={!isBig}>
							{!isBig ? (
								<StaticImage src={smallGridOpacityIcon.src} alt="Grid" />
							) : (
								<StaticImage src={smallGridIcon.src} alt="Grid" />
							)}
						</button>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ProductsFilters
