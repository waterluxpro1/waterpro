import { ReviewsSlider } from '@/features/ReviewsSlider/ReviewsSlider'
import styles from './Reviews.module.scss'
import { Container } from '@/shared/ui/Container'
import { Title2 } from '@/shared/ui/Title2'

export const Reviews = () => {
	return (
		<Container>
			<Title2 className={styles.title}>Отзывы от наших КЛИЕНТОВ</Title2>
			<ReviewsSlider className={styles.slider} />
		</Container>
	)
}