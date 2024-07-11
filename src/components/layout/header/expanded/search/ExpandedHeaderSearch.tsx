'use client'

import SearchField from '@/components/ui/elements/form/search-field/SearchField'
import { useState, type FC } from 'react'
import styles from '../ExpandedHeader.module.scss'

const ExpandedHeaderSearch: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<SearchField
			className={styles.search}
			searchTerm={searchTerm}
			handleSearch={() => setSearchTerm('')}
			placeholder={'Поиск поставщиков'}
		/>
	)
}

export default ExpandedHeaderSearch
