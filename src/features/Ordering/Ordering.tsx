'use client'

import { Button } from '@/shared/ui/Button'
import styles from './Ordering.module.scss'
import { Radio } from '@/shared/ui/Radio/Radio'
import type { OrderingProps } from './Ordering.props'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const Ordering = ({ className, goods, showOrderButton, showGoods, cart, translation, ...props }: OrderingProps) => {
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
						<Radio value="0"
							setFunction={setSelectedItem}
							label="Заберу сам"
							id="delivery-self" name="delivery"
						/>
						<Radio value="2.99"
							setFunction={setSelectedItem}
							label="Smartpost Эстония: €2.99"
							id="delivery-v1" name="delivery"
						/>
						<Radio value="2.99"
							setFunction={setSelectedItem}
							label="Omniva Эстония: €2.99"
							id="delivery-v2" name="delivery"
						/>
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