import clsx from 'clsx'
import styles from './Title3.module.scss'
import type { HTMLAttributes } from 'react'

export const Title3 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h3 className={clsx(styles.title3, className)} {...props}></h3>
	)
}