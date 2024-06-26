import type { HTMLAttributes, ReactNode } from 'react'

export interface EvalProps extends HTMLAttributes<HTMLDivElement> {
	children: string | ReactNode[]
}