import clsx from 'clsx'
import styles from './Title4.module.scss'
import type { HTMLAttributes } from 'react'

export const Title4 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h4 className={clsx(styles.title4, className)} {...props}></h4>
	)
}