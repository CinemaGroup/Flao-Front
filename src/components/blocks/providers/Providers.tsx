import Provider, { type IProvider } from '@/components/parts/provider/Provider'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import Heading from '@/components/ui/elements/heading/Heading'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
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
					<ul className={styles.list}>
						{providers.map(({ provider }, index) => (
							<Provider
								key={index}
								className={styles.provider}
								provider={provider}
							/>
						))}
					</ul>
					<button className={styles.more}>ЗАГРУЗИТЬ ЕЩЕ</button>
				</Wrapper>
			</Container>
		</Section>
	)
}

export default Providers
