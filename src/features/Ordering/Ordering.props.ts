import type { IGood } from '@/shared/interfaces/models/Good.interface'
import type { HTMLAttributes } from 'react'

export interface OrderingProps extends HTMLAttributes<HTMLDivElement> {
	goods: IGood[]
	showOrderButton?: boolean
	showGoods?: boolean
	cart?: Array<{ product_id: number, quantity: number }>
}