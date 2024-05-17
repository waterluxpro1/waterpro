import type { HTMLAttributes } from 'react'

export interface AddToCartButtonProps extends HTMLAttributes<HTMLFormElement> {
	isInCart: boolean
	goodId: number
}