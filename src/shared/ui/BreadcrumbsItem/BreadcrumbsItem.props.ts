import type { HTMLAttributes } from 'react'

export interface BreadcrumbsItemProps extends HTMLAttributes<HTMLLIElement> {
	href?: string
	first?: boolean
}