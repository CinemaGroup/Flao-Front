import Container from '@/components/ui/common/container/Container'
import Footer from '@/components/ui/common/footer/Footer'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import List from '@/components/ui/elements/list/List'
import { SOCIAL_DATA } from '@/data/social.data'
import type { FC } from 'react'
import ExpandedFooterBox from './box/ExpandedFooterBox'
import styles from './ExpandedFooter.module.scss'
import ExpandedFooterInfo from './info/ExpandedFooterInfo'

const ExpandedFooter: FC = () => {
	return (
		<Footer className={styles.footer}>
			<Container>
				<Wrapper className={styles.wrapper}>
					<ExpandedFooterBox />
					<ExpandedFooterInfo />
					<List listClassName={styles.social} items={SOCIAL_DATA} />
				</Wrapper>
			</Container>
		</Footer>
	)
}

export default ExpandedFooter
