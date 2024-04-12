import type { HTMLAttributes } from 'react'
import styles from './Title2.module.scss'
import clsx from 'clsx'

export const Title2 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2 className={clsx(styles.title2, className)} {...props}></h2>
	)
}