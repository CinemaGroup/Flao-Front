import type { AllProducts } from '@/__generated__/output'
import Advertising from '@/components/parts/advertising/Advertising'
import Product from '@/components/parts/product/Product'
import { HOME_CATALOG_ADVERTISING_DATA } from '@/components/screens/public/home/data/advertising.data'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Heading from '@/components/ui/elements/heading/Heading'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import { Fragment, type FC } from 'react'
import styles from './Products.module.scss'
import cn from 'clsx'

const Products: FC<AllProducts & IClassName> = ({
	products,
	count,
	className,
}) => {
	if (!count) return null

	return (
		<Section className={className && className}>
			<Container>
				<Wrapper>
					<Heading
						className={styles.heading}
						variant="h2"
						hasLine
						button={{ label: 'показать все', href: '' }}
					>
						новинки каталога
					</Heading>
					<div className={styles.list}>
						{products.map((product, index) => (
							<Fragment key={product.id}>
								<Product className={styles.product} product={product} />
								{/* TODO: nenc anel vor asminkic yntrvi texy meke proverka anel ka banner te voch nor dnel yntrvac texum */}
								{index === 9 && (
									<>
										<Advertising
											className={cn(styles.add, styles.firstAdd)}
											advertising={HOME_CATALOG_ADVERTISING_DATA.advertising}
										/>
										<Advertising
											className={cn(styles.add, styles.secondAdd)}
											advertising={HOME_CATALOG_ADVERTISING_DATA.advertising}
										/>
									</>
								)}
							</Fragment>
						))}
					</div>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default Products
