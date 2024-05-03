import type { IGood } from '@/shared/interfaces/models/Good.interface'
import type { HTMLAttributes } from 'react'

export interface OrderingProps extends HTMLAttributes<HTMLDivElement> {
	goods: IGood[]
}