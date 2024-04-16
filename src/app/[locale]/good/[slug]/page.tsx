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
import { Button } from '@/shared/ui/Button'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

const addToCard = async (formData: FormData) => {
	'use server'

	const id = +formData.get('id')!

	if (!cookies().has('cart')) {
		cookies().set('cart', '[]')
	}

	const cart = cookies().get('cart')

	const idInCart = !!JSON.parse(cart?.value!).find((item: any) => item.id === id)

	if (!idInCart) {
		cookies().set('cart',
			JSON.stringify([...JSON.parse(cart?.value!), { id, count: 1 }])
		)
	}
	else {
		cookies().set('cart',
			JSON.stringify(
				JSON.parse(cart?.value!)
					.splice(
						JSON.parse(cart?.value!).
							findIndex((item: any) => item.id === id) + 1,
						1
					)
			)
		)
	}

	revalidatePath('.')

	console.log(cookies().get('cart'))
}

const GoodPage = async ({ params }: { params: { slug: string, locale: string } }) => {
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
						{cookies().get('cart')?.value! && !JSON.parse(cookies().get('cart')?.value!).find((item: any) => item.id === good.id) ?
							<form className={styles.addToCart} action={addToCard}>
								<input type="text" name="id" readOnly value={good.id} style={{ display: 'none' }} />
								<button type="submit"><Button>В корзину</Button></button>
							</form>
							:
							<form className={styles.addToCart} action={addToCard}>
								<input type="text" name="id" readOnly value={good.id} style={{ display: 'none' }} />
								<button type="submit"><Button>Удалить из корзины</Button></button>
							</form>
						}
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

				<GoodsSlider lang={params.locale} goods={relatedGoods} />
			</Container>
		</div>
	)
}

export default GoodPage