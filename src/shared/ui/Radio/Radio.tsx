'use client'

import styles from './Radio.module.scss'
import clsx from 'clsx'
import type { RadioProps } from './Radio.props'
import { useEffect, useRef } from 'react'

export const Radio = ({ id, className, label, setFunction, ...props }: RadioProps) => {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		document.documentElement.addEventListener('input', () => {
			if (ref.current?.checked) {
				setFunction?.(ref.current.value)
			}
		})
	}, [ref, setFunction])

	return (
		<div>
			<input type="radio" className={styles.radio} ref={ref} id={id} {...props} />
			<label htmlFor={id} className={clsx(styles.label, className)}><span>{label}</span></label>
		</div>
	)
}
