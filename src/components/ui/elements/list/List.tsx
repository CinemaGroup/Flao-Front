import type { IList, IListItem } from '@/shared/interfaces/list/list.interface'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import StaticImage from '../../common/image/StaticImage'

const List: FC<IList> = ({
	items,
	listClassName,
	itemClassName,
	buttonClassName,
}) => {
	const renderContent = (item: IListItem) => {
		return (
			<>
				{item.icon &&
					item.alt &&
					(typeof item.icon === 'string' ? (
						<StaticImage src={item.icon} alt={item.alt} />
					) : (
						<item.icon />
					))}
				{item.label}
				{item.subItems && <ChevronDown />}
			</>
		)
	}

	return (
		<ul className={listClassName}>
			{items.map((item, index) => (
				<li className={itemClassName && itemClassName} key={index}>
					{item.onClick ? (
						<button
							className={buttonClassName}
							type="button"
							onClick={item.onClick}
						>
							{renderContent(item)}
						</button>
					) : (
						<Link className={buttonClassName} href={item.href}>
							{renderContent(item)}
						</Link>
					)}
				</li>
			))}
		</ul>
	)
}

export default List
