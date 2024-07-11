import { SITE_NAME } from '@/constants/details.constants'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ILogo } from '@/shared/interfaces/logo/logo.interface'
import Link from 'next/link'
import type { FC } from 'react'
import StaticImage from '../../common/image/StaticImage'

const Logo: FC<ILogo> = ({ variant = 'black', className }) => {
	return (
		<Link href={PUBLIC_PAGES.HOME} className={className && className}>
			<StaticImage src={`/images/global/logo-${variant}.png`} alt={SITE_NAME} />
		</Link>
	)
}

export default Logo
