'use client'

import { PUBLIC_PAGES } from '@/constants/url.constants'
import { LayoutGrid, LogIn, Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { EXPANDED_HEADER_COUNTRIES } from '../data/expanded-header-buttons.data'
import styles from './ExpandedHeaderBurger.module.scss'

const ExpandedHeaderBurger: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])

	const isMobile = useMediaQuery({
		query: '(max-width: 900px)',
	})

	if (!isMounted) {
		return null
	}

	const filteredCountries = EXPANDED_HEADER_COUNTRIES.filter((country) =>
		country.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		isMobile && (
			<>
				<button className={styles.toggle} onClick={() => setIsShow(!isShow)}>
					<Menu />
				</button>
				{isShow && (
					<div className={styles.burger}>
						<button className={styles.close} onClick={() => setIsShow(false)}>
							<X />
						</button>
						<div className={styles.fill}>
							<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
								<LayoutGrid />
								Каталог
							</Link>
							<div className={styles.menu}>
								<div className={styles.search}>
									<input
										className={styles.field}
										type="text"
										placeholder="Поиск города"
										onChange={(e) => setSearchTerm(e.target.value)}
									/>
									<Search />
								</div>
								{filteredCountries.length > 0 ? (
									<ul className={styles.countries}>
										{filteredCountries.map((country) => (
											<li key={country} className={styles.country}>
												<Link href="/">{country}</Link>
											</li>
										))}
									</ul>
								) : (
									<p className={styles.noResults}>
										К сожалению, город не найден
									</p>
								)}
							</div>
							<Link className={styles.login} href={PUBLIC_PAGES.LOGIN}>
								<LogIn />
								Войти
							</Link>
						</div>
					</div>
				)}
			</>
		)
	)
}

export default ExpandedHeaderBurger
