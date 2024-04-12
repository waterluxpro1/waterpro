import type { HTMLAttributes } from 'react'
import styles from './SpoilerTitle.module.scss'
import clsx from 'clsx'

export const SpoilerTitle = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<summary className={clsx(styles.spoilerTitle, className)}{...props}></summary>
	)
}