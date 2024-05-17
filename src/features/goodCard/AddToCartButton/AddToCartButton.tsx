import { InputCounter } from '@/shared/ui/InputCounter/InputCounter'
import { Button } from '@/shared/ui/Button'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { FormField } from '@/shared/ui/FormField/FormField'
import type { AddToCartButtonProps } from './AddToCartButton.props'

const addToCard = async (formData: FormData) => {
	'use server'

	const product_id = +formData.get('product_id')!
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

export const AddToCartButton = ({ isInCart, goodId, ...props }: AddToCartButtonProps) => {
	return (
		<form {...props} action={addToCard}>
			<FormField name="product_id" value={goodId} />
			{!isInCart && <InputCounter name="quantity" />}
			<button type="submit"><Button>{!isInCart ? 'В корзину' : 'Удалить из корзины'}</Button></button>
		</form>
	)
}