import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren<IClassName>> = ({
	children,
	className,
}) => {
	return <section className={className && className}>{children}</section>
}

export default Section
