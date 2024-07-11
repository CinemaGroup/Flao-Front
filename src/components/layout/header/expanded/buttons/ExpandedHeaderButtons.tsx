import { PUBLIC_PAGES } from '@/constants/url.constants'
import { ChevronDown, LogIn, MapPin } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ExpandedHeader.module.scss'
import { EXPANDED_HEADER_COUNTRIES } from '../data/expanded-header-buttons.data'

const ExpandedHeaderButtons: FC = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<MapPin />
				Москва
				<ChevronDown />
				<ul className={styles.countries}>
					{EXPANDED_HEADER_COUNTRIES.map((country) => (
						<li className={styles.country} key={country}>
							<Link href="/">{country}</Link>
						</li>
					))}
				</ul>
			</li>
			<li className={styles.item}>
				<Link className={styles.login} href={PUBLIC_PAGES.LOGIN}>
					<LogIn />
					Войти
				</Link>
			</li>
		</ul>
	)
}

export default ExpandedHeaderButtons
