import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Input } from '@/shared/ui/Input/Input'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { Ordering } from '@/features/Ordering/Ordering'
import { cookies } from 'next/headers'
import { woocomerence, wordpress } from '@/shared/api/wordpress.service'
import Link from 'next/link'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Body2 } from '@/shared/ui/Body2'
import { redirect } from 'next/navigation'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

export const metadata: Metadata = {
	title: 'Оплата заказа - Water PRO'
}


const createOrder = async (formData: FormData) => {
	'use server'

	if (formData.get('parcel-locker-name') === 'initial') return

	const address = (formData.get('parcel-locker-name') as string)?.split(';')


	const first_name = formData.get('first_name')
	const last_name = formData.get('last_name')
	const company = formData.get('company')
	const country = formData.get('country')
	const ordererAddress = formData.get('address')
	const city = formData.get('city')
	const email = formData.get('email')

	const [method_id, method_title, total] = (formData.get('delivery')! as string).split(';')
	// const message = formData.get('message')

	const response = await fetch('https://waterpro.ee/wp-json/wc/v3/orders', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${process.env.WP_PASSWORD}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			billing: {
				first_name, last_name, company, country, address_1: ordererAddress, city, email
			},
			shipping: {
				first_name, last_name, company, email,
				...formData.get('parcel-locker-name') ? {
					country: address[0],
					city: address[1],
					address_1: address[2],
					address_2: address[3]
				} : {
					country, address_1: ordererAddress, city
				}
			},
			shipping_lines: [{ method_id, method_title, total }],

			line_items: JSON.parse(formData.get('cart')?.toString()!),

			...formData.get('gift-code') && {
				coupon_lines: [{
					code: formData.get('gift-code')
				}]
			}

		})
	})

	const json = await response.json()

	if (response.ok) { redirect(json.payment_url) }
	else {
		if (json.code === 'woocommerce_rest_invalid_coupon') {
			redirect(`?error&error_text=${encodeURI(`Подарочной карты ${formData.get('gift-code')} не существует или она уже была активирована`)}`)
		}
		else {
			redirect(`?error&error_text=${JSON.stringify(json)}`)
		}
	}
}

const OrderPage = async ({ params, searchParams }: { params: { locale: string }, searchParams?: { promocode?: string } }) => {
	const cart: Array<{ product_id: number, quantity: number }> =
		cookies().has('cart')
			? JSON.parse(cookies().get('cart')?.value!)
			: undefined
	const goods = cart && await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.product_id)))

	const translation = await wordpress.getTranslations('cart-order', params.locale)

	const shippingMethods = await woocomerence.getShippingMethods()

	const promocode = await woocomerence.getCouponByCode(searchParams?.promocode)

	return (
		<Container>
			<form className={styles.form} action={createOrder}>
				<input type="text" className={styles.field} name="cart" value={JSON.stringify(cart)} readOnly />

				<div className={styles.column}>
					<Title3 className={styles.title}>{translation.payment}</Title3>
					<div className={styles.formFields}>
						<Input placeholder={translation.first_name} name="first_name" autoComplete="name" required />
						<Input placeholder={translation.last_name} name="last_name" autoComplete="family-name" required />
						<Input placeholder={translation.company} name="company" autoComplete="company" />
						<Input placeholder={translation.country} name="country" autoComplete="country" required />
						<Input placeholder={translation.address} name="address" autoComplete="address-level1" required />
						<Input placeholder={translation.city} name="city" autoComplete="company" required />
						<Input type="email" placeholder="Email*" name="email" autoComplete="email" required />
						<Textarea placeholder={translation.message} name="message" autoComplete="off"></Textarea>
					</div>
				</div>
				<div className={styles.column}>
					<Title3 className={styles.title}>{translation.order}</Title3>
					<Ordering isCheckoutPage promocode={promocode?.[0]} {...{ translation, cart, goods, shippingMethods }} />
					<Body2 className={styles.attention}>
						{translation.data_proccessing.split('>')[0]} <Link className={styles.link} href={translation.policy_url}>{translation.data_proccessing.split('>')[1]}</Link>.
					</Body2>
					<Checkbox required className={styles.attention} id="agree-rules"
						label={<>{translation.site_rules.split('>')[0]} <Link className={styles.link} href={translation.site_rules_url}>{translation.site_rules.split('>')[1]}</Link></>} />
					<button className={styles.button} type="submit">
						<Button>{translation.submit}</Button>
					</button>
				</div>
			</form>
		</Container>
	)
}

export default OrderPage