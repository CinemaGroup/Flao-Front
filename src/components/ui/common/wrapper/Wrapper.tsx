import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren<IClassName>> = ({
	children,
	className,
}) => {
	return <div className={className && className}>{children}</div>
}

export default Wrapper
