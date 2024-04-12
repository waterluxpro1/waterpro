import type { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLSpanElement> {
	appearance?: 'primary' | 'secondary' | 'light'
	size?: 'normal' | 'large'
}