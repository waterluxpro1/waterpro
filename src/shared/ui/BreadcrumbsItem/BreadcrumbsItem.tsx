'use client'

import styles from './BreadcrumbsItem.module.scss'
import clsx from 'clsx'
import type { BreadcrumbsItemProps } from './BreadcrumbsItem.props'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const BreadcrumbsItem = ({ className, href, first, children, ...props }: BreadcrumbsItemProps) => {
	const { locale } = useParams()

	return (
		<li className={clsx(className, styles.breadcrumb, !(href || first) && styles.last)} {...props}>
			{href || first ? <Link href={`/${locale}/${href ? href : ''}`}>{children}</Link> : children}
		</li>
	)
}