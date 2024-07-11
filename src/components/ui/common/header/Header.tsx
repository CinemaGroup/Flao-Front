import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { FC, PropsWithChildren } from 'react'

const Header: FC<PropsWithChildren<IClassName>> = ({ children, className }) => {
	return <header className={className && className}>{children}</header>
}

export default Header
