import loginIcon from '@/assets/images/icons/login.png'
import mapIcon from '@/assets/images/icons/map.png'
import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ExpandedHeader.module.scss'
import { COUNTRIES_DATA } from '@/data/countries.data'

const ExpandedHeaderButtons: FC = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<StaticImage src={mapIcon.src} alt="Карта" />
				Москва
				<ChevronDown />
				<ul className={styles.countries}>
					{COUNTRIES_DATA.map((country) => (
						<li className={styles.country} key={country}>
							<Link href="/">{country}</Link>
						</li>
					))}
				</ul>
			</li>
			<li className={styles.item}>
				<Link className={styles.login} href={PUBLIC_PAGES.LOGIN}>
					<StaticImage src={loginIcon.src} alt="Войти" />
					Войти
				</Link>
			</li>
		</ul>
	)
}

export default ExpandedHeaderButtons
