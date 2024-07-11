import Container from '@/components/ui/common/container/Container'
import Header from '@/components/ui/common/header/Header'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Logo from '@/components/ui/elements/logo/Logo'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'
import ExpandedHeaderBurger from './burger/ExpandedHeaderBurger'
import ExpandedHeaderButtons from './buttons/ExpandedHeaderButtons'
import styles from './ExpandedHeader.module.scss'
import ExpandedHeaderSearch from './search/ExpandedHeaderSearch'

const ExpandedHeader: FC = () => {
	return (
		<Header>
			<Container>
				<Wrapper className={styles.wrapper}>
					<Logo className={styles.logo} />
					<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
						<LayoutGrid />
						Каталог
					</Link>
					<ExpandedHeaderSearch />
					<ExpandedHeaderButtons />
					<ExpandedHeaderBurger />
				</Wrapper>
			</Container>
		</Header>
	)
}

export default ExpandedHeader
