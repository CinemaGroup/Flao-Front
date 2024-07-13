import Categories from '@/components/blocks/categories/Categories'
import type { FC } from 'react'
import { HOME_CATEGORIES_DATA } from '../home/data/categories.data'
import styles from './Catalog.module.scss'
import CatalogProducts from './products/CatalogProducts'

const Catalog: FC = () => {
	return (
		<>
			<Categories
				className={styles.categories}
				categories={HOME_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="circle"
				hasHeading={false}
			/>
			<CatalogProducts />
		</>
	)
}

export default Catalog
