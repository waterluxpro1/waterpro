import { Button } from '@/shared/ui/Button'
import styles from './Ordering.module.scss'
import type { OrderingProps } from './Ordering.props'
import clsx from 'clsx'
import { DeliveryOptions } from './DeliveryOptions/DeliveryOptions'
import { PromocodeField } from './PromocodeField/PromocodeField'
import Link from 'next/link'
import { deliveryApi } from '@/shared/api/wordpress.service'

export const Ordering = async ({ className, locale, goods, shippingMethods, cart, translation, promocode, isCheckoutPage, ...props }: OrderingProps) => {
	const subtotal = goods.length > 0 ? goods.map((item, index) => item.price * +cart[index].quantity).reduce((acc, number) => +acc + +number) : 0

	const smartpostParcelMachines = await deliveryApi.getSmartpostParcelMachines()
	const omnivaParcelMachines = await deliveryApi.getOmnivaParcelMachines()

	return (
		<div className={clsx(className)} {...props}>
			<div className={styles.summary}>
				<div className={clsx(styles.row, !isCheckoutPage && styles.noBorderBottom)}>
					<div className={styles.cell}>{translation.subtotal}</div>
					<div className={styles.cell}>{subtotal} €</div>
				</div>
				{isCheckoutPage && <>
					{goods.map((good) =>
						<div key={JSON.stringify(good)} className={styles.row}>
							<div className={clsx(styles.cell, styles.good)}>
								<span className={styles.goodName}>{good.name}</span>
								<span>x {cart ? cart[cart.findIndex((item) => item.product_id === good.id)].quantity : '?'}</span>
							</div>
							<div className={styles.cell}>{subtotal} €</div>
						</div>)}

					<div className={clsx(styles.row, styles.couponForm)}>
						<span className={styles.placeholder}>{translation.promocode_message}</span>
						<PromocodeField translations={translation} promocode={promocode?.code} />
					</div>
					<DeliveryOptions classes={styles} {...{ translation, shippingMethods, subtotal, promocode }}
						parcelLockers={[
							{
								methodContains: 'smartpost',
								list: smartpostParcelMachines.places.item
							},
							{
								methodContains: 'omniva',
								list: omnivaParcelMachines.map((item) => (
									{
										group_name: 'Omniva',
										country: item.A0_NAME,
										city: item.A3_NAME,
										address: `${item.A2_NAME} ${item.A4_NAME} ${item.A5_NAME} ${item.A6_NAME} ${item.A7_NAME} ${item.A8_NAME}`,
										name: `[${item.A0_NAME}] ${item.NAME}`
									}
								))
							}
						]} />
				</>}
				{!isCheckoutPage &&
					<Link href={`/${locale}/cart/order`}>
						<Button>{translation.create_order}</Button>
					</Link>
				}
			</div>
		</div >
	)
}
