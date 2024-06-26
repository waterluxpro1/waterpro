import { InputCounter } from '@/shared/ui/InputCounter/InputCounter'
import { Button } from '@/shared/ui/Button'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { FormField } from '@/shared/ui/FormField/FormField'
import type { AddToCartButtonProps } from './AddToCartButton.props'
import styles from './AddToCartButton.module.scss'
import { woocomerence } from '@/shared/api/wordpress.service'

const addToCard = async (formData: FormData) => {
	'use server'

	const product_id = +formData.get('variation')! ? +formData.get('variation')! : +formData.get('product_id')!
	const quantity = +formData.get('quantity')!

	if (!cookies().has('cart')) cookies().set('cart', '[]')

	const cart = cookies().get('cart')
	const idInCart = !!JSON.parse(cart?.value!).find((item: any) => item.product_id === product_id)

	if (!idInCart) {
		cookies().set('cart',
			JSON.stringify([...JSON.parse(cart?.value!), { product_id, quantity: quantity }])
		)
	} else {
		const newCart = JSON.parse(cart?.value!)
		const deleteIndex = newCart.findIndex((item: any) => item.product_id === product_id)
		newCart.splice(deleteIndex, 1)

		cookies().set('cart', JSON.stringify(newCart))
	}

	revalidatePath('.')
}

export const AddToCartButton = async ({ isInCart, variations, goodId, addToCartText, removeFromCartText, ...props }: AddToCartButtonProps) => {

	const variationGoods = await Promise.all(variations.map(async (id) => {
		const good = await woocomerence.getGoodById(id)
		return { id, price: good.price }
	}))

	console.log(variationGoods)

	return (
		<form {...props} action={addToCard}>
			<FormField name="product_id" value={goodId} />

			<div className={styles.variations}>
				{variationGoods.map((good, index) =>
					<div key={good.id} className={styles.variation}>
						<input {...index === 0 && { defaultChecked: true }} type="radio" name="variation" id={`variation-${good.id}`} value={good.id} />
						<label htmlFor={`variation-${good.id}`}>{good.price} €</label>
					</div>
				)}
			</div>

			<div className={styles.buttonWrapper}>
				{!isInCart && <InputCounter name="quantity" />}
				<button type="submit"><Button className={styles.button}>{!isInCart ? addToCartText : removeFromCartText}</Button></button>
			</div>
		</form >
	)
}