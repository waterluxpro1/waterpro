import type { HTMLAttributes } from 'react'
import styles from './Container.module.scss'
import clsx from 'clsx'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={clsx(styles.container, className)} {...props}></div>
	)
}