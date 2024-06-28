'use client'

import clsx from 'clsx'
import styles from './DeliveryOptions.module.scss'
import { useState } from 'react'
import { Radio } from '@/shared/ui/Radio/Radio'
import type { PromocodeModel } from '@/shared/interfaces/models/Promocode.model'

const getPriceWithPromocode = (price: number, promocode?: PromocodeModel) => {
	console.log(promocode)

	if (!promocode) return price

	if (promocode.discount_type === 'fixed_cart') {
		return price - Number(promocode.amount)
	}
	else if (promocode.discount_type === 'percent') {
		return price - Number(promocode.amount) * price / 100
	}
}

const getPromocodeDiscount = (promocode?: PromocodeModel) => {
	if (promocode?.discount_type === 'percent') {
		return `(-${Number(promocode.amount)}%)`
	}
	else if (promocode?.discount_type === 'fixed_cart') {
		return `(-${Number(promocode.amount)} €)`
	}
}

export const DeliveryOptions = ({ classes, shippingMethods, translation, subtotal, promocode, parcelLockers }: {
	classes: Readonly<Record<string, string>>,
	shippingMethods?: any[],
	translation: any,
	subtotal: number,
	promocode?: PromocodeModel,
	parcelLockers?: {
		methodContains: string,
		list: Record<string, string>[]
	}[]
}) => {
	const [selectedItem, setSelectedItem] = useState('')

	const deliveryLists: Record<string, string[]> = {}

	return (
		<>
			<div className={classes.row}>
				<div className={classes.cell}>{translation.delivery}</div>
				<div className={clsx(classes.cell, styles.radios)}>
					{shippingMethods?.map((method) => {
						const thisList = parcelLockers?.find((item) => method.title.toLowerCase().includes(item.methodContains))
						const showList = selectedItem === `${method.title};${method.settings.cost.value}` && thisList

						return <div key={method.id}>
							<Radio
								required
								setFunction={setSelectedItem}
								label={`${method.title.split(':')[1]?.split('/')[1]
									? translation[method.title.split(':')[1].split('/')[1]]
									: method.title} - ${method?.settings?.cost?.value || 0} €`}
								value={`${method.title};${method.settings.cost.value}`}
								id={`${method.method_id}-${method.id}`} name="delivery"
							/>


							{showList && <select name="parcel-locker-name" id="" className={styles.select}>
								<option value="" disabled selected>{translation.choose_post_machine}</option>
								{thisList.list.map(item => {
									if (!deliveryLists[thisList.methodContains]) {
										deliveryLists[thisList.methodContains] = []
									}

									return <>
										{!deliveryLists[thisList.methodContains].includes(item.group_name) && <>
											<option disabled className={styles.whiteBg}></option>
											<option disabled></option>
											<option disabled>{item.group_name}</option>
											<option disabled></option>
											<option disabled className={styles.whiteBg}></option>
											{deliveryLists[thisList.methodContains].push(item.group_name)}
										</>
										}
										<option value={`${item.country};${item.city};${item.address};${item.name} (Smart Post)`}>{item.name}</option>
									</>
								})}

							</select>}
						</div>
					})}
				</div>
			</div >
			<div className={clsx(classes.row, styles.noBorderBottom)}>
				<div className={classes.cell}>{translation.total}</div>
				<div className={classes.cell}>
					<strong>{getPriceWithPromocode(+subtotal + (+selectedItem.split(';')[1] || 0), promocode)} €
						<span className={styles.discountInfo}>{getPromocodeDiscount(promocode)}</span>
					</strong>
				</div>
			</div>
		</>
	)
}