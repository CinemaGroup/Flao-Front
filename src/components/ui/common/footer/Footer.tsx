import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren<IClassName>> = ({ children, className }) => {
	return <footer className={className && className}>{children}</footer>
}

export default Footer
