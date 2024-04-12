import type { HTMLAttributes } from 'react'
import styles from './TabsList.module.scss'
import clsx from 'clsx'

export const TabsList = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={clsx(styles.tabslist, className)}{...props}></div>
	)
}