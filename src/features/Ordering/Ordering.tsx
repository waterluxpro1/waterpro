'use client'

import { Button } from '@/shared/ui/Button'
import styles from './Ordering.module.scss'
import { Radio } from '@/shared/ui/Radio/Radio'
import { Title4 } from '@/shared/ui/Title4'
import type { OrderingProps } from './Ordering.props'
import clsx from 'clsx'
import { useState } from 'react'

export const Ordering = ({ className, goods, ...props }: OrderingProps) => {
	const [selectedItem, setSelectedItem] = useState('0')
	const subtotal = goods.length > 0 ? goods.map(item => item.price).reduce((acc, number) => +acc + +number) : 0

	return (
		<div className={clsx(className)} {...props}>
			<Title4 className={styles.title}>Сумма заказа</Title4>
			<div className={styles.summary}>
				<div className={styles.row}>
					<div className={styles.cell}>
						Подытог
					</div>
					<div className={styles.cell}>
						{subtotal} €
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.cell}>Доставка</div>
					<div className={clsx(styles.cell, styles.radios)}>
						<Radio value="0"
							setFunction={setSelectedItem}
							label="Заберу сам"
							id="delivery-self"
							name="delivery" />
						<Radio value="2.99"
							setFunction={setSelectedItem}
							label="Smartpost Эстония: €2.99"
							id="delivery-v1"
							name="delivery" />
						<Radio value="2.99"
							setFunction={setSelectedItem}
							label="Omniva Эстония: €2.99"
							id="delivery-v2"
							name="delivery" />
					</div>
				</div>
				<div className={clsx(styles.row, styles.noBorderBottom)}>
					<div className={styles.cell}>Итого</div>
					<div className={styles.cell}><strong>{subtotal + +selectedItem} €</strong></div>
				</div>
				<div className={styles.row}>
					<Button>Оформить заказ</Button>
				</div>
			</div>
		</div>
	)
}