import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

export const Input = forwardRef(
	function InputBase({ className, ...props }: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) {
		return (
			<input ref={ref} className={clsx(styles.input, className)} {...props} />
		)
	})