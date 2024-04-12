import type { InputHTMLAttributes } from 'react'
import styles from './Textarea.module.scss'
import clsx from 'clsx'

export const Textarea = ({ className, ...props }: InputHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea className={clsx(styles.textarea, className)} {...props}></textarea>
	)
}