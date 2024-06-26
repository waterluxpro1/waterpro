import type { HTMLAttributes } from 'react'

export interface AddToCartButtonProps extends HTMLAttributes<HTMLFormElement> {
	isInCart: boolean
	goodId: number
	addToCartText: string
	removeFromCartText: string
	variations: number[]
}