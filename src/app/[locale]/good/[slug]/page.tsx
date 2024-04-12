import { Container } from '@/shared/ui/Container'
import { Tab } from '@/shared/ui/Tab'
import { TabPanel } from '@/shared/ui/TabPanel'
import { Tabs } from '@/shared/ui/Tabs'
import { TabsList } from '@/shared/ui/TabsList'

import styles from './page.module.scss'
import Image from 'next/image'
import { woocomerence } from '@/shared/api/wordpress.service'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { GoodsSlider } from '@/features/GoodsSlider/GoodsSlider'

const GoodPage = async ({ params }: { params: { slug: string } }) => {
	const [good] = await woocomerence.getGoodBySlug(params.slug)

	const relatedGoods = await Promise.all(good.related_ids.map(async (id) => {
		const good = await woocomerence.getGoodById(id)

		return good
	}))

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src={good.images[0].src} alt={good.images[0].alt} width={300} height={300} />
					</div>
					<div className={styles.info}>
						<Title3 className={styles.title}>{good.name}</Title3>
						<span className={styles.price} dangerouslySetInnerHTML={{ __html: good.price_html }}></span>
					</div>
				</div>
				<Tabs defaultActive={1}>
					<TabsList>
						<Tab index={1}>В комплекте</Tab>
						<Tab index={2}>Описание</Tab>
					</TabsList>
					<TabPanel index={1}>
						<div dangerouslySetInnerHTML={{ __html: good.meta_data.find(item => item.key === '_et_pb_old_content')?.value ? good.meta_data.find(item => item.key === '_et_pb_old_content')!.value! : '' }}></div>
					</TabPanel>
					<TabPanel index={2}>2 tab</TabPanel>
				</Tabs>

				<GoodsSlider goods={relatedGoods} />
			</Container>
		</div>
	)
}

export default GoodPage