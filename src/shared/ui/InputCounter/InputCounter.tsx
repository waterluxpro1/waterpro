'use client'

import { type InputHTMLAttributes, useState } from 'react'
import styles from './InputCounter.module.scss'
import clsx from 'clsx'

export const InputCounter = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	const [value, setValue] = useState(1)

	return (
		<div className={styles.counter}>
			<button type="button" className={styles.button} onClick={() => {
				if (value > 1) {
					setValue(value - 1)
				}
			}}>-</button>
			<input onFocus={(e) => { (e.target as HTMLInputElement).value = value.toString() }} onBlur={(e) => {
				const input: HTMLInputElement = e.target as HTMLInputElement

				if (input.value && +input.value > 0) {
					setValue(Math.floor(+input.value))
					input.value = ''
				}
				else if (input.value && +input.value < 0) {
					setValue(Math.floor(-input.value))
					input.value = ''
				}
				else {
					input.value = ''
				}
			}} type="text" className={styles.hiddenInput} />
			<input className={clsx(styles.input, className)} type="text" readOnly value={value} {...props} />
			<button type="button" className={styles.button} onClick={() => { setValue(value + 1) }}>+</button>
		</div>
	)
}