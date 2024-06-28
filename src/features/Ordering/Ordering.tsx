import { Button } from '@/shared/ui/Button'
import styles from './Ordering.module.scss'
import type { OrderingProps } from './Ordering.props'
import clsx from 'clsx'
import { DeliveryOptions } from './DeliveryOptions/DeliveryOptions'
import { PromocodeField } from './PromocodeField/PromocodeField'
import Link from 'next/link'
import { headers } from 'next/headers'
import { deliveryApi } from '@/shared/api/wordpress.service'

export const Ordering = async ({ className, goods, shippingMethods, cart, translation, promocode, isCheckoutPage, ...props }: OrderingProps) => {
	const subtotal = goods.length > 0 ? goods.map((item, index) => item.price * +cart[index].quantity).reduce((acc, number) => +acc + +number) : 0

	const smartpostParcelMachines = await deliveryApi.getSmartpostParcelMachines()

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
						parcelLockers={[{
							methodContains: 'smartpost',
							list: smartpostParcelMachines.places.item
						}]} />
				</>}
				{!isCheckoutPage &&
					<Link href={`/${headers().get('referer')?.split('/')[3]!}/cart/order`}>
						<Button>{translation.create_order}</Button>
					</Link>
				}
			</div>
		</div >
	)
}
