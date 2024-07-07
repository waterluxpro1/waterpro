import { Container } from '@/shared/ui/Container'
import { Tab } from '@/shared/ui/Tab'
import { TabPanel } from '@/shared/ui/TabPanel'
import { Tabs } from '@/shared/ui/Tabs'
import { TabsList } from '@/shared/ui/TabsList'

import styles from './page.module.scss'
import { woocomerence, wordpress } from '@/shared/api/wordpress.service'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { GoodsSlider } from '@/features/GoodsSlider/GoodsSlider'
import { cookies } from 'next/headers'
import { AddToCartButton } from '@/features/goodCard/AddToCartButton/AddToCartButton'
import { Eval } from '@/shared/ui/Eval/Eval'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { BreadcrumbsItem } from '@/shared/ui/BreadcrumbsItem/BreadcrumbsItem'
import { notFound, redirect } from 'next/navigation'
import clsx from 'clsx'
import { Title4 } from '@/shared/ui/Title4'
import type { Metadata } from 'next'
import { GoodCardSlider } from '@/entities/GoodCardSlider/GoodCardSlider'

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
	const [good] = await woocomerence.getGoodBySlug(params.slug)

	if (!good) notFound()

	return {
		title: `${good.name} | WaterPRO`,
		description: good.short_description
	}
}

const GoodPage = async ({ params }: { params: { slug: string, locale: string } }) => {
	const [good] = await woocomerence.getGoodBySlug(params.slug, params.locale)

	if (!good) notFound()

	if (good.lang !== params.locale) {
		const localedGood = await woocomerence.getGoodById(good.translations[params.locale])

		if (localedGood.id) {
			redirect(`/${params.locale}/good/${localedGood.slug}`)
		}
	}

	const relatedGoods = await Promise.all(good.related_ids.map(woocomerence.getGoodById))

	const translations = await wordpress.getTranslations('good-card', params.locale)

	const cart = cookies().get('cart')?.value
	const isInCart = cart && JSON.parse(cart).find((item: any) => item.product_id === good.id)

	return (
		<div className={styles.wrapper}>
			<Container>
				<Breadcrumbs className={styles.breadcrumbs}>
					<BreadcrumbsItem first>Главная</BreadcrumbsItem>
					<BreadcrumbsItem href={`catalog/${good.categories[0].slug}`}>{good.categories[0].name}</BreadcrumbsItem>
					<BreadcrumbsItem>{good.name}</BreadcrumbsItem>
				</Breadcrumbs>
				<div className={styles.card}>
					<div className={styles.imageCard}>
						<Title3 className={clsx(styles.title, styles.mobile)}>{good.name}</Title3>
						<GoodCardSlider images={good.images} />
					</div>
					<div className={styles.info}>
						<Title3 className={clsx(styles.title, styles.desktop)}>{good.name}</Title3>
						{/* calculation of the discount in euros and percentages (if any) */}
						{good.type === 'pw-gift-card'
							? <span className={styles.price} dangerouslySetInnerHTML={{ __html: good.price_html }}></span>
							: <span className={styles.price}>€{good.price}{Math.floor(+good.price) === +good.price && '.00'} {good.regular_price && good.price !== good.regular_price && <><del>€{good.regular_price}</del> <span className={styles.discount}>{Math.round(100 - good.regular_price / good.price * 100)}%</span></>}</span>
						}

						<AddToCartButton variations={good.variations} className={styles.addToCart} isInCart={isInCart} goodId={good.id} addToCartText={translations.add_to_cart} removeFromCartText={translations.remove_from_cart} />
					</div>
				</div>
				<Tabs defaultActive={1}>
					<TabsList>
						<Tab index={1}>{translations.description}</Tab>
						{good.acf.equipment &&
							<Tab index={2}>{translations.included}</Tab>
						}
					</TabsList>
					<TabPanel index={1}>
						<Eval>{good.description}</Eval>
					</TabPanel>
					{good.acf.equipment &&
						<TabPanel index={2}>
							<Eval>{good.acf.equipment}</Eval>
						</TabPanel>
					}
				</Tabs>
				{relatedGoods.length > 0 && <>
					<Title4 className={styles.similar}>{translations.similar_goods}</Title4>

					<GoodsSlider translations={{ details: translations.details }} className={styles.relatedGoods} lang={params.locale} goods={relatedGoods} />
				</>}
			</Container>
		</div>
	)
}

export default GoodPage