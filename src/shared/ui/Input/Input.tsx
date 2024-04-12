import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input className={clsx(styles.input, className)} {...props} />
	)
}