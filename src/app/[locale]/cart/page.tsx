import { woocomerence } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { cookies } from 'next/headers'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Card } from '@/shared/ui/Card/Card'
import { Ordering } from '@/features/Ordering/Ordering'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Корзина - WaterPro'
}

const Cart = async ({ params }: { params: { locale: string } }) => {
	const cart: Array<{ product_id: number, quantity: number }> =
		cookies().has('cart')
			? JSON.parse(cookies().get('cart')?.value!)
			: undefined

	const goods = cart && await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.product_id)))

	try {
		const translation = await import(`@/shared/locales/${params.locale}/cart.json`)
		console.log()

		return (
			<Container className={styles.container}>
				{(goods?.length && goods.length > 0)
					?
					<div className={styles.goods}>
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
									<div className={styles.delete}>
										<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="22" cy="22" r="22" fill="#D80027" />
											<path d="M15.084 28.0981L20.6912 22.4909L15.084 16.8837L16.8772 15.0906L22.4844 20.6977L28.0915 15.0906L29.8847 16.8837L24.2775 22.4909L29.8705 28.0838L28.0773 29.877L22.4844 24.2841L16.8772 29.8912L15.084 28.0981Z" fill="white" />
										</svg>
									</div>
									<Link href={`/${params.locale}/good/${good.slug}`}>
										<div className={styles.image}>
											<Image src={good.images?.[0].src} alt={good.images?.[0].alt} width={160} height={160} />
										</div>
									</Link>
								</div>
								<Link className={styles.titleLink} href={`/${params.locale}/good/${good.slug}`}>
									<div className={clsx(styles.labeledField, styles.title)} title={good.name}>
										<span className={styles.mobileLabel}>{translation.name}</span>
										<span>{good.name}</span>
									</div>
								</Link>
								<div className={clsx(styles.labeledField, styles.price)}>
									<span className={styles.mobileLabel}>{translation.price}</span>
									<span>{good.price} €</span>
								</div>
								<div className={clsx(styles.labeledField, styles.count)}>
									<span className={styles.mobileLabel}>{translation.count}</span>
									<span>{cart[index].quantity}</span>
								</div>
								<div className={clsx(styles.labeledField, styles.preTotal)}>
									<span className={styles.mobileLabel}>{translation.subtotal}</span>
									<span>{good.price * cart[index].quantity} €</span>
								</div>
							</div>
						))}
					</div>
					: <Card>{translation.no_goods_message}</Card>}
				{goods && goods.length > 0 &&
					<Ordering showOrderButton translation={JSON.parse(JSON.stringify(translation))} goods={goods} />
				}
			</Container>
		)
	}
	catch {
		return <Card>Translation not loaded. Contact the site administrators</Card>
	}
}

export default Cart
