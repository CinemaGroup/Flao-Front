import instagram from '@/assets/images/icons/instagram.png'
import vk from '@/assets/images/icons/vk.png'
import { INSTAGRAM_URL, VK_URL } from '@/constants/details.constants'
import type { IListItem } from '@/shared/interfaces/list/list.interface'

export const SOCIAL_DATA: IListItem[] = [
	{
		icon: vk.src,
		alt: 'Вконтакте',
		href: VK_URL,
	},
	{
		icon: instagram.src,
		alt: 'Instagram',
		href: INSTAGRAM_URL,
	},
]
