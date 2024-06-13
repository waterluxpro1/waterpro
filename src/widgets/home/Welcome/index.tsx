import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import { Title1 } from '@/shared/ui/Title1/Title1'
import Image from 'next/image'
import styles from './Welcome.module.scss'
import { Button } from '@/shared/ui/Button'
import type { WelcomeModel } from './Welcome.model'

export const Welcome = async (props: WelcomeModel) => {
	return (
		<article className={styles.welcome}>
			<OverflowImage
				content={<div className={styles.content}>
					<Title1 className={styles.title} dangerouslySetInnerHTML={{ __html: props.locale?.title! }}></Title1>
					<h2 className={styles.subtitle}>{props.locale?.subtitle}</h2>
					<Button className={styles.button} size="large">{props.locale?.button}</Button>
				</div>}
				image={<Image priority src="/img/modern-water-filtration-system.png" alt="Продвинутая система фильтрации воды" width={768} height={700} />}
			/>
		</article>
	)
}
