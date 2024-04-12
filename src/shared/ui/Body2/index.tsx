import type { HTMLAttributes } from 'react'
import styles from './Body2.module.scss'
import clsx from 'clsx'

export const Body2 = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p className={clsx(styles.body2, className)} {...props}></p>
	)
}