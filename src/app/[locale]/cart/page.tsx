import { woocomerence } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { cookies } from 'next/headers'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Cart = async ({ params }: { params: { locale: string } }) => {
	const cart: Array<{ id: number, count: number }> = JSON.parse(cookies().get('cart')?.value!)

	const goods = await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.id)))

	console.log(goods[0])

	return (
		<Container className={styles.container}>
			<div className={styles.goods}>
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
									<Image src={good.images[0].src} alt={good.images[0].alt} width={160} height={160} />
								</div>
							</Link>
						</div>
						<Link href={`/${params.locale}/good/${good.slug}`}>
							<div className={styles.title} title={good.name}>{good.name}</div>
						</Link>
						<div className={styles.price}>{good.price} €</div>
						<div className={styles.count}>{cart[index].count}</div>
						<div className={styles.preTotal}>{good.price * cart[index].count} €</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default Cart
