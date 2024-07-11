import Advertising from '@/components/parts/advertising/Advertising'
import Product from '@/components/parts/product/Product'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import type { FC } from 'react'
import {
	HOME_BIG_ADVERTISING_DATA,
	HOME_SELLER_ADVERTISING_DATA,
	HOME_SMALL_ADVERTISING_DATA,
} from '../data/advertising.data'
import { HOME_VIP_PRODUCTS_DATA } from '../data/products.data'
import styles from './HomeVip.module.scss'

const HomeVip: FC = () => {
	return (
		<Section className={styles.section}>
			<Container>
				<Wrapper className={styles.wrapper}>
					<Advertising
						className={styles.bigAdd}
						advertising={HOME_BIG_ADVERTISING_DATA.advertising}
					/>
					<div className={styles.fill}>
						<Advertising
							className={styles.sellerAdd}
							advertising={HOME_SELLER_ADVERTISING_DATA.advertising}
						/>
						<div className={styles.box}>
							<Advertising
								className={styles.smallAdd}
								advertising={HOME_SMALL_ADVERTISING_DATA.advertising}
							/>
							<div className={styles.products}>
								{HOME_VIP_PRODUCTS_DATA.products.map((product) => (
									<Product
										key={product.id}
										className={styles.product}
										product={product}
									/>
								))}
							</div>
						</div>
					</div>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default HomeVip
