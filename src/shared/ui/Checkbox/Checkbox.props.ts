import type { InputHTMLAttributes, ReactNode } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string | ReactNode
}