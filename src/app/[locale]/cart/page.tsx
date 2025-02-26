import { woocomerence, wordpress } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { cookies, headers } from 'next/headers'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/shared/ui/Card/Card'
import { Ordering } from '@/features/Ordering/Ordering'
import { CartGoodParam } from '@/entities/cart/CartGoodParam/CartGoodParam'
import { RemoveGoodButton } from '@/features/cart/RemoveGoodButton/RemoveGoodButton'
import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
	const translations = await wordpress.getTranslations('cart', params.locale)

	return {
		title: `${translations.h1} | Water PRO`,
		openGraph: {
			url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
		}
	}
}

const Cart = async ({ params }: { params: { locale: string } }) => {
	const cart: Array<{ product_id: number, quantity: number }> =
		cookies().has('cart') ? JSON.parse(cookies().get('cart')?.value!) : undefined

	const goods = cart && await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.product_id)))
	const shippingMethods = await woocomerence.getShippingMethods()

	const translation = await wordpress.getTranslations('cart', params.locale)

	return (
		<Container className={styles.container}>
			{(goods?.length && goods.length > 0)
				? <div className={styles.goods}>
					<div className={styles.head}>
						<div className={styles.good}>
							<div className={styles.goodPreview}>
								<div className={styles.delete}></div>
								<div className={styles.image}></div>
							</div>
							<div className={styles.title}>{translation.name}</div>
							<div className={styles.price}>{translation.price}</div>
							<div className={styles.count}>{translation.count}</div>
							<div className={styles.preTotal}>{translation.subtotal}</div>
						</div>
					</div>
					{goods.map((good, index) => (
						<div key={good.id} className={styles.good}>
							<div className={styles.goodPreview}>
								<RemoveGoodButton index={index} />
								<Link className={styles.image} href={`/${params.locale}/good/${good.slug}`}>
									<Image src={good.images?.[0]?.src} alt={good.images?.[0]?.alt} width={160} height={160} />
								</Link>
							</div>
							<Link className={styles.titleLink} href={`/${params.locale}/good/${good.slug}`}>
								<CartGoodParam className={styles.title}
									title={translation.name} value={good.name} />
							</Link>
							<CartGoodParam className={styles.price}
								title={translation.price} value={`${good.price.toString()} €`} />
							<CartGoodParam className={styles.count}
								title={translation.count} value={cart[index].quantity.toString()} />
							<CartGoodParam className={styles.preTotal}
								title={translation.subtotal} value={`${good.price * cart[index].quantity} €`} />
						</div>
					))}
				</div>
				: <Card>{translation.no_goods_message}</Card>}
			{goods && goods.length > 0 &&
				<Ordering locale={params.locale} shippingMethods={shippingMethods} showOrderButton translation={translation} cart={cart} goods={goods} />
			}
		</Container>
	)
}

export default Cart
