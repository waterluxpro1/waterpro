import type { HTMLAttributes } from 'react'
import styles from './Title5.module.scss'
import clsx from 'clsx'

export const Title5 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h5 className={clsx(styles.title5, className)} {...props}></h5>
	)
}