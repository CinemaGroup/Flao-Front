import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ISearchField } from '@/shared/interfaces/form/form.interface'
import cn from 'clsx'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './SearchField.module.scss'

const SearchField: FC<ISearchField> = ({
	className,
	searchTerm,
	handleSearch,
	placeholder,
}) => {
	const { push, refresh } = useRouter()

	return (
		<div className={cn(styles.search, className && className)}>
			<input
				className={styles.input}
				onChange={handleSearch}
				value={searchTerm}
				placeholder={placeholder}
			/>
			<button
				className={styles.button}
				onClick={() => {
					push(PUBLIC_PAGES.SEARCH(searchTerm))
					refresh()
				}}
			>
				<Search />
				<span>Поиск</span>
			</button>
		</div>
	)
}

export default SearchField
