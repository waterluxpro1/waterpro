import type { HTMLAttributes } from 'react'
import styles from './Breadcrumbs.module.scss'
import clsx from 'clsx'

export const Breadcrumbs = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
	return (
		<ul className={clsx(className, styles.breadcrumbs)} {...props}></ul>
	)
}