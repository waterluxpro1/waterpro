import type { HTMLAttributes } from 'react'
import styles from './Title1.module.scss'
import clsx from 'clsx'

export const Title1 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1 className={clsx(styles.title1, className)} {...props}></h1>
	)
}