import type { HTMLAttributes } from 'react'
import styles from './Body1.module.scss'
import clsx from 'clsx'

export const Body1 = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p className={clsx(styles.body1, className)} {...props}></p>
	)
}