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
import { cookies } from 'next/headers'
import { AddToCartButton } from '@/features/goodCard/AddToCartButton/AddToCartButton'
import { Eval } from '@/shared/ui/Eval/Eval'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { BreadcrumbsItem } from '@/shared/ui/BreadcrumbsItem/BreadcrumbsItem'

const GoodPage = async ({ params }: { params: { slug: string, locale: string } }) => {
	const [good] = await woocomerence.getGoodBySlug(params.slug)

	const relatedGoods = await Promise.all(good.related_ids.map(async (id) => {
		const good = await woocomerence.getGoodById(id)

		return good
	}))

	const cart = cookies().get('cart')?.value
	const isInCart = cart && JSON.parse(cart).find((item: any) => item.product_id === good.id)

	return (
		<div className={styles.wrapper}>
			<Container>
				<Breadcrumbs className={styles.breadcrumbs}>
					<BreadcrumbsItem first>Главная</BreadcrumbsItem>
					<BreadcrumbsItem href={`good/${good.categories[0].slug}`}>{good.categories[0].name}</BreadcrumbsItem>
					<BreadcrumbsItem>{good.name}</BreadcrumbsItem>
				</Breadcrumbs>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src={good.images[0]?.src} alt={good.images[0]?.alt} width={300} height={300} />
					</div>
					<div className={styles.info}>
						<Title3 className={styles.title}>{good.name}</Title3>
						<span className={styles.price}>€{good.price} {good.price !== good.regular_price && <><del>€{good.regular_price}</del> <span className={styles.discount}>{Math.round(100 - good.regular_price / good.price * 100)}%</span></>}</span>
						<AddToCartButton className={styles.addToCart} isInCart={isInCart} goodId={good.id} />
					</div>
				</div>
				<Tabs defaultActive={1}>
					<TabsList><Tab index={1}>Описание</Tab>
						<Tab index={2}>В комплекте</Tab></TabsList>
					<TabPanel index={1}>
						<Eval>
							{good.meta_data.find(item =>
								item.key === '_et_pb_old_content')?.value ? good.meta_data.find(item => item.key === '_et_pb_old_content')!.value! : ''}
						</Eval>
					</TabPanel>
					<TabPanel index={2}>
						<Eval>
							{good.meta_data.find(item =>
								item.key === '_et_pb_old_content')?.value ? good.meta_data.find(item => item.key === '_et_pb_old_content')!.value! : ''}
						</Eval>
					</TabPanel>
				</Tabs>
				<GoodsSlider className={styles.relatedGoods} lang={params.locale} goods={relatedGoods} />
			</Container>
		</div>
	)
}

export default GoodPage