import gridIcon from '@/assets/images/icons/grid-green.png'
import Provider, { type IProvider } from '@/components/parts/provider/Provider'
import Container from '@/components/ui/common/container/Container'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Heading from '@/components/ui/elements/heading/Heading'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Providers.module.scss'

const Providers: FC<{ providers: IProvider[] } & IClassName> = ({
	providers,
	className,
}) => {
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
						популярные поставщики
					</Heading>
					<div className={styles.fill}>
						<ul className={styles.list}>
							{providers.map(({ provider }, index) => (
								<Provider
									key={index}
									className={styles.provider}
									provider={provider}
								/>
							))}
						</ul>
						<div className={styles.more}>
							<Link className={styles.link} href={PUBLIC_PAGES.ALL_CATEGORIES}>
								<StaticImage src={gridIcon.src} alt="Каталог" />
								<span>ПОСМОТРЕТЬ <br /> ВСЕХ</span>
							</Link>
						</div>
					</div>
					<button className={styles.download}>ЗАГРУЗИТЬ ЕЩЕ</button>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default Providers
