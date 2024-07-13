import catalogIcon from '@/assets/images/icons/catalog.png'
import gridIcon from '@/assets/images/icons/grid.png'
import Container from '@/components/ui/common/container/Container'
import Header from '@/components/ui/common/header/Header'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Logo from '@/components/ui/elements/logo/Logo'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import Link from 'next/link'
import { type FC } from 'react'
import ExpandedHeaderButtons from './buttons/ExpandedHeaderButtons'
import styles from './ExpandedHeader.module.scss'
import ExpandedHeaderSearch from './search/ExpandedHeaderSearch'

const ExpandedHeader: FC = () => {
	return (
		<Header>
			<Container>
				<Wrapper className={styles.wrapper}>
					<div className={styles.fill}>
						<Logo className={styles.logo} />
						<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
							<picture>
								<source media="(max-width: 900px)" srcSet={catalogIcon.src} />
								<StaticImage src={gridIcon.src} alt="Каталог" />
							</picture>
							Каталог
						</Link>
						<ExpandedHeaderSearch />
					</div>
					<ExpandedHeaderButtons />
				</Wrapper>
			</Container>
		</Header>
	)
}

export default ExpandedHeader
