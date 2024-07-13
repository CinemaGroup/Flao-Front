import bigAdvertisingImage from '@/assets/images/advertising/ad-1.png'
import sellerSetAdvertisingImage from '@/assets/images/advertising/ad-2-large.png'
import sellerAdvertisingImage from '@/assets/images/advertising/ad-2.png'
import smallAdvertisingImage from '@/assets/images/advertising/ad-3.png'
import ad1 from '@/assets/images/advertising/ad-4.png'
import ad2 from '@/assets/images/advertising/ad-5.png'
import ad3 from '@/assets/images/advertising/ad-6.png'
import catalogSetAdvertisingImage from '@/assets/images/advertising/ad-7-large.png'
import catalogAdvertisingImage from '@/assets/images/advertising/ad-7.png'
import type { IAdvertising } from '@/shared/interfaces/advertising/advertising.interface'

export const HOME_BIG_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		imagePath: bigAdvertisingImage.src,
		link: '/',
		alt: 'Реклама',
	},
}

export const HOME_SELLER_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		imagePath: sellerAdvertisingImage.src,
		imageSetPath: sellerSetAdvertisingImage.src,
		link: '/',
		alt: 'Реклама',
	},
}

export const HOME_SMALL_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		imagePath: smallAdvertisingImage.src,
		link: '/',
		alt: 'Реклама',
	},
}

export const HOME_CATALOG_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		imagePath: catalogAdvertisingImage.src,
		imageSetPath: catalogSetAdvertisingImage.src,
		responsive: 550,
		link: '/',
		alt: 'Реклама',
	},
}

export const HOME_ADVERTISEMENTS_DATA: IAdvertising[] = [
	{
		advertising: {
			imagePath: ad1.src,
			link: '/',
			alt: 'Реклама',
		},
	},
	{
		advertising: {
			imagePath: ad2.src,
			link: '/',
			alt: 'Реклама',
		},
	},
	{
		advertising: {
			imagePath: ad3.src,
			link: '/',
			alt: 'Реклама',
		},
	},
]
