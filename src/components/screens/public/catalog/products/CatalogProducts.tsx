'use client'

import Products from '@/components/blocks/products/Products'
import { useCatalog } from '@/hooks/public/catalog/useCatalog'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'
import { CATALOG_PRODUCTS_DATA } from '../data/data.products.data'

const CatalogProducts: FC<IPageSearchParam> = ({ searchParams }) => {
	const { step, startIndex, endIndex, query, goTo, goToPrev, goToNext } =
		useCatalog({ searchParams })

	const classNames: { [key: number]: string } = {
		1: styles.first,
		2: styles.second,
		3: styles.third,
		4: styles.fourth,
	}

	return (
		<Products
			className={styles.products}
			smallProductClassName={cn(
				styles.smallProduct,
				classNames[query.page % step || step]
			)}
			bigProductClassName={cn(styles.bigProduct, classNames[query.page % step])}
			products={CATALOG_PRODUCTS_DATA.products.slice(startIndex, endIndex)}
			count={CATALOG_PRODUCTS_DATA.count}
			hasFilters
			heading={{
				children: searchParams?.searchTerm || 'Новинки',
				label: `${CATALOG_PRODUCTS_DATA.count} товаров`,
				hasLine: false,
			}}
			pagination={{
				step,
				pagesCount: Math.ceil(
					CATALOG_PRODUCTS_DATA.count / (step * query.perPage)
				),
				page: query.page,
				goTo,
				goToPrev,
				goToNext,
			}}
		/>
	)
}

export default CatalogProducts
