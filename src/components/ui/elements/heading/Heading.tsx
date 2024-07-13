import type { IHeading } from '@/shared/interfaces/heading/heading.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'
import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	variant,
	hasLine,
	button,
	label,
	className,
}) => {
	const HeadingTag = variant

	if (!hasLine && !button && !label) {
		return (
			<HeadingTag className={cn(styles.title, className && className)}>
				{children}
			</HeadingTag>
		)
	}

	return (
		<div className={cn(styles.heading, className && className)}>
			<HeadingTag className={styles.title}>{children}</HeadingTag>
			{button && (
				<Link className={styles.button} href={button.href}>
					{button.label}
				</Link>
			)}
			{hasLine && <span className={styles.line}></span>}
			{label && <span className={styles.label}>{label}</span>}
		</div>
	)
}

export default Heading
