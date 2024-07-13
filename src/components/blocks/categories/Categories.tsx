'use client'

import gridIcon from '@/assets/images/icons/grid-green.png'
import Category from '@/components/parts/category/Category'
import Container from '@/components/ui/common/container/Container'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Heading from '@/components/ui/elements/heading/Heading'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ICategories } from '@/shared/interfaces/category/category.interface'
import cn from 'clsx'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Categories.module.scss'

const Categories: FC<ICategories> = ({
	categories,
	count,
	variant,
	hasHeading = true,
	className,
}) => {
	if (!count) return null

	const isCard = variant === 'card'

	return (
		<Section className={className && className}>
			<Container>
				<Wrapper className={styles.wrapper}>
					{hasHeading && (
						<Heading
							className={styles.heading}
							variant="h2"
							hasLine
							button={{ label: 'показать все', href: '' }}
						>
							популярные категории
						</Heading>
					)}
					<div className={styles.fill}>
						<ul
							className={cn(
								styles.list,
								isCard ? styles.cardList : styles.circleList
							)}
						>
							{categories.map((category) => (
								<Category
									key={category.slug}
									className={isCard ? styles.card : styles.circle}
									variant={variant}
									category={category}
								/>
							))}
							{!isCard && (
								<li className={styles.circle}>
									<Link
										className={styles.link}
										href={PUBLIC_PAGES.ALL_CATEGORIES}
									>
										<div className={styles.preview}>
											<LayoutGrid />
										</div>
										<span className={styles.name}>Все категории</span>
									</Link>
								</li>
							)}
						</ul>
						{isCard && (
							<div className={styles.more}>
								<Link
									className={styles.link}
									href={PUBLIC_PAGES.ALL_CATEGORIES}
								>
									<StaticImage src={gridIcon.src} alt="Каталог" />
									<span>ПОСМОТРЕТЬ <br /> ВСЕ</span>
								</Link>
							</div>
						)}
					</div>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default Categories
