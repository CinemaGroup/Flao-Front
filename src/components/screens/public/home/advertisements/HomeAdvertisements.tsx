'use client'

import Advertising from '@/components/parts/advertising/Advertising'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Wrapper from '@/components/ui/common/wrapper/Wrapper'
import type { IAdvertising } from '@/shared/interfaces/advertising/advertising.interface'
import { useEffect, useState, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '@/assets/styles/slick.scss'
import styles from './HomeAdvertisements.module.scss'

// TODO:
const HomeAdvertisements: FC<{ advertisements: IAdvertising[] }> = ({
	advertisements,
}) => {
	const [isMounted, setIsMounted] = useState(false)
	const isNotDesktop = useMediaQuery({ maxWidth: 550 })

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<Section className={styles.section}>
			<Container>
				<Wrapper>
					{isNotDesktop ? (
						<Slider
							dots
							speed={500}
							slidesToShow={1}
							slidesToScroll={1}
							arrows={false}
						>
							{advertisements.map(({ advertising }, index) => (
								<Advertising
									key={index}
									className={styles.add}
									advertising={advertising}
								/>
							))}
						</Slider>
					) : (
						<div className={styles.adds}>
							{advertisements.map(({ advertising }, index) => (
								<Advertising
									key={index}
									className={styles.add}
									advertising={advertising}
								/>
							))}
						</div>
					)}
				</Wrapper>
			</Container>
		</Section>
	)
}

export default HomeAdvertisements
