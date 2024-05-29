import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Input } from '@/shared/ui/Input/Input'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { Ordering } from '@/features/Ordering/Ordering'
import { cookies } from 'next/headers'
import { woocomerence } from '@/shared/api/wordpress.service'
import Link from 'next/link'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Body2 } from '@/shared/ui/Body2'
import { redirect } from 'next/navigation'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

export const metadata: Metadata = {
	title: 'Оплата заказа - Water PRO'
}

const formDataToObject = (formData: FormData) => {
	const object: Record<string, string> = {}

	formData.forEach((value, key) => object[key] = value.toString())

	return object
}

const createOrder = async (formData: FormData) => {
	'use server'

	const response = await fetch('https://waterpro.ee/wp-json/wc/v3/orders', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${process.env.WP_PASSWORD}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			billing: formDataToObject(formData),
			shipping: formDataToObject(formData),
			line_items: JSON.parse(formData.get('cart')?.toString()!)
		})
	})

	const json = await response.json()

	redirect(json.payment_url)
}

const OrderPage = async ({ params }: { params: { locale: string } }) => {
	const cart: Array<{ product_id: number, quantity: number }> =
		cookies().has('cart')
			? JSON.parse(cookies().get('cart')?.value!)
			: undefined
	const goods = cart && await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.product_id)))

	const cartTranslation = await import(`@/shared/locales/${params.locale}/cart.json`)
	const translation = await import(`@/shared/locales/${params.locale}/cart--order.json`)

	const shippingMethods = await woocomerence.getShippingMethods()

	return (
		<Container>
			<form className={styles.form} action={createOrder}>
				<input type="text" className={styles.field} name="cart" value={JSON.stringify(cart)} readOnly />

				<div className={styles.column}>
					<Title3 className={styles.title}>{translation.payment}</Title3>
					<div className={styles.formFields}>
						<Input placeholder={translation.first_name} name="first_name" autoComplete="name" />
						<Input placeholder={translation.last_name} name="last_name" autoComplete="family-name" />
						<Input placeholder={translation.company} name="company" autoComplete="company" />
						<Input placeholder={translation.country} name="country" autoComplete="country-name" />
						<Input placeholder={translation.address} name="address_1" autoComplete="country-name" />
						<Input placeholder={translation.state} name="state" autoComplete="state" />
						<Input placeholder={translation.city} name="city" autoComplete="city" />
						<Input placeholder={translation.postcode} name="postcode" autoComplete="postal-code" />
						<Input placeholder={translation.phone} name="phone" autoComplete="tel" />
						<Input placeholder="Email*" name="email" autoComplete="email" />
						<Textarea placeholder={translation.message} name="message" autoComplete="off"></Textarea>
					</div>
				</div>
				<div className={styles.column}>
					<Title3 className={styles.title}>{translation.order}</Title3>
					<Ordering shippingMethods={shippingMethods} showGoods translation={JSON.parse(JSON.stringify(cartTranslation))} cart={cart} goods={goods} />
					<Body2 className={styles.attention}>
						{translation.data_proccessing.split('>')[0]} <Link className={styles.link} href={cartTranslation.policy_url}>{translation.data_proccessing.split('>')[1]}</Link>.
					</Body2>
					<Checkbox className={styles.attention} id="agree-rules"
						label={<>{translation.site_rules.split('>')[0]} <Link className={styles.link} href={cartTranslation.site_rules_url}>{translation.site_rules.split('>')[1]}</Link></>} />
					<button className={styles.button} type="submit">
						<Button>{translation.submit}</Button>
					</button>
				</div>
			</form>
		</Container>
	)
}

export default OrderPage