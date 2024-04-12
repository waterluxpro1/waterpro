import { Container } from '@/shared/ui/Container'
import styles from './PopularGoods.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { GoodsSlider } from '@/features/GoodsSlider/GoodsSlider'
import { woocomerence } from '@/shared/api/wordpress.service'

export const PopularGoods = async () => {
	const goods = await woocomerence.getPopularGoods()

	return (
		<Container>
			<Title2 className={styles.title}>популярные товары</Title2>
			<GoodsSlider className={styles.slider} goods={goods} />
		</Container>
	)
}