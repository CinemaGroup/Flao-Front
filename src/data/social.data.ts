import telegram from '@/assets/images/icons/telegram.png'
import vk from '@/assets/images/icons/vk.png'
import { TELEGRAM_URL, VK_URL } from '@/constants/details.constants'
import type { IListItem } from '@/shared/interfaces/list/list.interface'

export const SOCIAL_DATA: IListItem[] = [
	{
		icon: vk.src,
		alt: 'Вконтакте',
		href: VK_URL,
	},
	{
		icon: telegram.src,
		alt: 'Телеграм',
		href: TELEGRAM_URL,
	},
]
