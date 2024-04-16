import { Container } from '@/shared/ui/Container'
import styles from './PopularGoods.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { GoodsSlider } from '@/features/GoodsSlider/GoodsSlider'
import { woocomerence } from '@/shared/api/wordpress.service'

export const PopularGoods = async ({ lang = 'ru' }: { lang?: string }) => {
	const goods = await woocomerence.getPopularGoods(lang)

	return (
		<Container>
			<Title2 className={styles.title}>популярные товары</Title2>
			<GoodsSlider lang={lang} className={styles.slider} goods={goods} />
		</Container>
	)
}