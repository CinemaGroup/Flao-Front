'use client'

import Advertising from '@/components/parts/advertising/Advertising'
import Product from '@/components/parts/product/Product'
import { HOME_CATALOG_ADVERTISING_DATA } from '@/components/screens/public/home/data/advertising.data'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Heading from '@/components/ui/elements/heading/Heading'
import Pagination from '@/components/ui/elements/pagination/Pagination'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProducts } from '@/shared/interfaces/product/product.interface'
import cn from 'clsx'
import Link from 'next/link'
import { Fragment, useState, type FC } from 'react'
import styles from './Products.module.scss'
import ProductsFilters from './filters/ProductsFilters'

const Products: FC<IProducts> = ({
	products,
	count,
	className,
	heading,
	pagination,
	hasLink,
	hasFilters,
	smallProductClassName,
	bigProductClassName,
}) => {
	const [isBig, setIsBig] = useState(false)

	if (!count) return null

	return (
		<Section className={className && className}>
			<Container>
				<Wrapper>
					<Heading
						className={styles.heading}
						variant="h2"
						hasLine={heading.hasLine}
						button={heading.button}
						label={heading.label}
					>
						{heading.children}
					</Heading>
					{hasFilters && <ProductsFilters isBig={isBig} setIsBig={setIsBig} />}
					<div className={styles.list}>
						{products.map((product, index) => (
							<Fragment key={index}>
								<Product
									className={cn(
										styles.product,
										isBig
											? cn(styles.big, bigProductClassName)
											: cn(styles.small, smallProductClassName)
									)}
									product={product}
								/>
								{/* TODO: nenc anel vor asminkic yntrvi texy meke proverka anel ka banner te voch nor dnel yntrvac texum */}
								{!pagination && index === 9 && (
									<>
										<Advertising
											className={cn(styles.add, styles.firstAdd)}
											advertising={HOME_CATALOG_ADVERTISING_DATA.advertising}
										/>
									</>
								)}
							</Fragment>
						))}
					</div>
					{pagination && (
						<Pagination
							className={styles.pagination}
							page={pagination.page}
							pagesCount={pagination.pagesCount}
							step={pagination.step}
							goTo={pagination.goTo}
							goToPrev={pagination.goToPrev}
							goToNext={pagination.goToNext}
						/>
					)}
					{hasLink && (
						<Link className={styles.link} href={PUBLIC_PAGES.CATALOG}>
							смотреть все новинки
						</Link>
					)}
				</Wrapper>
			</Container>
		</Section>
	)
}

export default Products
