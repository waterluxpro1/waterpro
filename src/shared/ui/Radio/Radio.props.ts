import type { InputHTMLAttributes, ReactNode } from 'react'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string | ReactNode
	setFunction?: (arg1: string) => void
}