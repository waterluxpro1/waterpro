import { woocomerence } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { cookies } from 'next/headers'

const Cart = async () => {
	const cart: Array<{ id: number, count: number }> = JSON.parse(cookies().get('cart')?.value!)

	const goods = await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.id)))

	console.log(goods)

	return (
		<Container>
			{goods.map((good) => (
				<div key={good.id}>
					{good.name}
				</div>
			))}
		</Container>
	)
}

export default Cart
