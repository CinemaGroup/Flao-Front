import Categories from '@/components/blocks/categories/Categories'
import Products from '@/components/blocks/products/Products'
import Providers from '@/components/blocks/providers/Providers'
import Info from '@/components/parts/info/Info'
import type { FC } from 'react'
import HomeAdvertisements from './advertisements/HomeAdvertisements'
import { HOME_ADVERTISEMENTS_DATA } from './data/advertising.data'
import {
	HOME_CATEGORIES_DATA,
	HOME_POPULAR_CATEGORIES_DATA,
} from './data/categories.data'
import { HOME_INFO_DATA } from './data/info.data'
import { HOME_PRODUCTS_DATA } from './data/products.data'
import { HOME_PROVIDERS_DATA } from './data/providers.data'
import styles from './Home.module.scss'
import HomeVip from './vip/HomeVip'

const Home: FC = () => {
	return (
		<>
			<HomeVip />
			<Categories
				className={styles.categories}
				categories={HOME_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="circle"
				hasHeading={false}
			/>
			<Products
				className={styles.products}
				products={HOME_PRODUCTS_DATA.products}
				count={HOME_PRODUCTS_DATA.count}
			/>
			<HomeAdvertisements advertisements={HOME_ADVERTISEMENTS_DATA} />
			<Categories
				className={styles.popularCategories}
				categories={HOME_POPULAR_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="card"
			/>
			<Providers className={styles.providers} providers={HOME_PROVIDERS_DATA} />
			<Info className={styles.info} info={HOME_INFO_DATA.info} />
		</>
	)
}

export default Home
