import Advertising from '@/components/parts/advertising/Advertising'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import type { IAdvertising } from '@/shared/interfaces/advertising/advertising.interface'
import type { FC } from 'react'
import styles from './HomeAdvertisements.module.scss'

// TODO:
const HomeAdvertisements: FC<{ advertisements: IAdvertising[] }> = ({
	advertisements,
}) => {
	return (
		<Section className={styles.section}>
			<Container>
				<Wrapper>
					<div className={styles.adds}>
						{advertisements.map(({ advertising }, index) => (
							<Advertising
								key={index}
								className={styles.add}
								advertising={advertising}
							/>
						))}
					</div>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default HomeAdvertisements
