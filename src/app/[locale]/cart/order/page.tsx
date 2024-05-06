import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Input } from '@/shared/ui/Input/Input'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { Ordering } from '@/features/Ordering/Ordering'
import { cookies } from 'next/headers'
import { woocomerence } from '@/shared/api/wordpress.service'
import clsx from 'clsx'
import { Radio } from '@/shared/ui/Radio/Radio'
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
			'Authorization': `Basic ${btoa('API user:bxJv_tuG1_F94O_XQd5_vAdt_hw69')}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			payment_method: 'wc_montonio_card',
			payment_method_title: 'Оплата картой',
			billing: formDataToObject(formData),
			shipping: formDataToObject(formData),
			line_items: JSON.parse(formData.get('cart')?.toString()!)
		})
	})

	const json = await response.json()

	redirect(`/ru/payment/${json.id}`)
}

const OrderPage = async () => {
	const cart: Array<{ product_id: number, quantity: number }> =
		cookies().has('cart')
			? JSON.parse(cookies().get('cart')?.value!)
			: undefined
	const goods = cart && await Promise.all(cart.map(async (item) => await woocomerence.getGoodById(item.product_id)))

	return (
		<Container>
			<form className={styles.form} action={createOrder}>
				<input type="text" className={styles.field} name="cart" value={JSON.stringify(cart)} readOnly />

				<div className={styles.column}>
					<Title3 className={styles.title}>Оплата и доставка</Title3>
					<div className={styles.formFields}>
						<Input placeholder="Имя*" name="first_name" autoComplete="name" />
						<Input placeholder="Фамилия*" name="last_name" autoComplete="family-name" />
						<Input placeholder="Названии компаниии" name="company" autoComplete="company" />
						<Input placeholder="Страна/регион*" name="country" autoComplete="country-name" />
						<Input placeholder="Адрес*" name="address_1" autoComplete="country-name" />
						<Input placeholder="Населенный пункт*" name="state" autoComplete="state" />
						<Input placeholder="Город*" name="city" autoComplete="city" />
						<Input placeholder="Почтовый индекс*" name="postcode" autoComplete="postal-code" />
						<Input placeholder="Телефон*" name="phone" autoComplete="tel" />
						<Input placeholder="Email*" name="email" autoComplete="email" />
						<Textarea placeholder="Примечание к заказу" name="message" autoComplete="off"></Textarea>
					</div>
				</div>
				<div className={styles.column}>
					<Title3 className={styles.title}>Ваш заказ</Title3>
					<Ordering showGoods cart={cart} goods={goods} />
					<div className={clsx(styles.paymentMethods, styles.formFields)}>
						<Radio label={<>Этот раздел будет работать позднее</>} />
						<Radio label={<>Liisi рассрочка</>} />
						<Radio label={<>Оплата через банк</>} />
						<Radio label={<>Оплата картой</>} />
						<Radio label={<>Pay Later</>} />
					</div>
					<Body2 className={styles.attention}>
						Ваши личные данные обрабатываются, подробнее на странице <Link href="#">Политика конфедициальности</Link>.
					</Body2>
					<Checkbox className={styles.attention} id="agree-rules"
						label={<>Я прочитал(а) и соглашаюсь с правилами сайта <Link href="#">правила и условия</Link>*</>} />
					<button className={styles.button} type="submit">
						<Button>Подтвердить заказ</Button>
					</button>
				</div>
			</form>
		</Container>
	)
}

export default OrderPage