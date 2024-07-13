import { SITE_NAME } from '@/constants/details.constants'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import Link from 'next/link'
import type { FC } from 'react'
import StaticImage from '../../common/image/StaticImage'

const Logo: FC<IClassName> = ({ className }) => {
	return (
		<Link href={PUBLIC_PAGES.HOME} className={className && className}>
			<picture>
				<source
					media="(max-width: 550px)"
					srcSet="/images/global/logo-mobile.png"
				/>
				<StaticImage src="/images/global/logo.png" alt={SITE_NAME} />
			</picture>
		</Link>
	)
}

export default Logo
