import type { HTMLAttributes } from 'react'
import styles from './Spoiler.module.scss'
import clsx from 'clsx'

export const Spoiler = ({ className, ...props }: HTMLAttributes<HTMLDetailsElement>) => {
	return (
		<details className={clsx(styles.spoiler, className)}{...props}></details>
	)
}