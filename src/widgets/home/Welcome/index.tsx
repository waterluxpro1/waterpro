'use client'

import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import { Title1 } from '@/shared/ui/Title1/Title1'
import Image from 'next/image'
import styles from './Welcome.module.scss'
import { Button } from '@/shared/ui/Button'
import { useContext } from 'react'
import { HomePageContext } from '@/page/home/ui/HomePageProvider'

export const Welcome = () => {
	const { acf } = useContext(HomePageContext)

	return (
		<article className={styles.welcome}>
			<OverflowImage
				content={<div className={styles.content}>
					<Title1 className={styles.title}>{acf.title}</Title1>
					<h2 className={styles.subtitle}>{acf.subtitle}</h2>
					<Button className={styles.button} size="large">{acf.button}</Button>
				</div>}
				image={<Image src="/img/modern-water-filtration-system.png" alt="Продвинутая система фильтрации воды" width={1000} height={700} />}
			/>
		</article>
	)
}