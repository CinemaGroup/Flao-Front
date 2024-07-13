import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react'

export const useOutside = (setIsShow: Dispatch<SetStateAction<boolean>>) => {
	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})
	return { ref }
}
