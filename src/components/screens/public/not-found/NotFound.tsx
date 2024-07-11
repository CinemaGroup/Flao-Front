import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<Section className={styles.section}>
			<Container className={styles.container}></Container>
		</Section>
	)
}

export default NotFound
