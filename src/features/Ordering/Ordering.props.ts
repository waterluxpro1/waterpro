import type { IGood } from '@/shared/interfaces/models/Good.interface'
import type { PromocodeModel } from '@/shared/interfaces/models/Promocode.model'
import type { HTMLAttributes } from 'react'

export interface OrderingProps extends HTMLAttributes<HTMLDivElement> {
	goods: IGood[]
	showOrderButton?: boolean
	showGoods?: boolean
	cart: Array<{ product_id: number, quantity: number }>
	translation: {
		subtotal: string
		delivery: string
		total: string
		create_order: string
		promocode_message: string
	} | Record<string, string>
	shippingMethods?: any[]
	promocode?: PromocodeModel
	isCheckoutPage?: boolean
}