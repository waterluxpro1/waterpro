import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import { Title1 } from '@/shared/ui/Title1/Title1'
import Image from 'next/image'
import styles from './Welcome.module.scss'
import { Button } from '@/shared/ui/Button'

export const Welcome = () => {
	return (
		<article className={styles.welcome}>
			<OverflowImage
				content={<div className={styles.content}>
					<Title1>ИДЕАЛЬНО ЧИСТАЯ, Мягкая ПИТЬЕВАЯ ВОДА У ВАС ДОМА!</Title1>
					<h2 className={styles.subtitle}>Надежно, качественно и экономично</h2>
					<Button className={styles.button} size="large">Получить Подарочную Карту</Button>
				</div>}
				image={<Image src="/img/modern-water-filtration-system.png" alt="Продвинутая система фильтрации воды" width={1000} height={700} />}
			/>
		</article>
	)
}