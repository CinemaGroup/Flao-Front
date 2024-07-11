import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IListItem } from '@/shared/interfaces/list/list.interface'

export const EXPANDED_FOOTER_MENU_DATA: IListItem[] = [
	{
		label: 'Пользовательское соглашение',
		href: PUBLIC_PAGES.TERMS,
	},
	{
		label: 'Политика конфиденциальности',
		href: PUBLIC_PAGES.POLICY,
	},
]
