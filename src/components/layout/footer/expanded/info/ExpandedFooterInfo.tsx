import Call from '@/components/ui/elements/call/Call'
import type { FC } from 'react'
import styles from '../ExpandedFooter.module.scss'

const ExpandedFooterInfo: FC = () => {
	return (
		<div className={styles.info}>
			<p className={styles.text}>
				Вся информация на сайте носит информационный характер и не является
				оффертой. Администрация портала выступает исключительно площадкой для
				размещения информации и никакого отношения к предоставленной информации
				не имеет.
			</p>
			<Call className={styles.call} />
		</div>
	)
}

export default ExpandedFooterInfo
