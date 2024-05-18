'use client'

import { Button } from '@/shared/ui/Button'
import styles from './Ordering.module.scss'
import { Radio } from '@/shared/ui/Radio/Radio'
import type { OrderingProps } from './Ordering.props'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const Ordering = ({ className, goods, showOrderButton, showGoods, shippingMethods, cart, translation, ...props }: OrderingProps) => {
	const [selectedItem, setSelectedItem] = useState('0')
	const subtotal = goods.length > 0 ? goods.map((item, index) => item.price * +cart[index].quantity).reduce((acc, number) => +acc + +number) : 0
	const { locale } = useParams()

	return (
		<div className={clsx(className)} {...props}>
			<div className={styles.summary}>
				<div className={styles.row}>
					<div className={styles.cell}>{translation.subtotal}</div>
					<div className={styles.cell}>{subtotal} €</div>
				</div>
				{showGoods && goods.map((good) =>
					<div key={JSON.stringify(good)} className={styles.row}>
						<div className={clsx(styles.cell, styles.good)}>
							<span className={styles.goodName}>{good.name}</span>
							<span>x {cart ? cart[cart.findIndex((item) => item.product_id === good.id)].quantity : '?'}</span>
						</div>
						<div className={styles.cell}>{subtotal} €</div>
					</div>)}
				<div className={styles.row}>
					<div className={styles.cell}>{translation.delivery}</div>
					<div className={clsx(styles.cell, styles.radios)}>
						{shippingMethods?.map((item) => <Radio key={item.id} value={parseFloat(item?.settings?.cost?.value || 0)}
							setFunction={setSelectedItem}
							label={`${item.title} - ${item?.settings?.cost?.value || 0} €`}
							id={`${item.method_id}-${item.id}`} name="delivery"
						/>)}
					</div>
				</div>
				<div className={clsx(styles.row, styles.noBorderBottom)}>
					<div className={styles.cell}>{translation.total}</div>
					<div className={styles.cell}><strong>{+subtotal + +selectedItem} €</strong></div>
				</div>
				{showOrderButton &&
					<div className={styles.row}>
						<Link href={`/${locale}/cart/order`}>
							<Button>{translation.create_order}</Button>
						</Link>
					</div>
				}
			</div>
		</div>
	)
}