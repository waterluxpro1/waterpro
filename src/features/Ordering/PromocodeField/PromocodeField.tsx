'use client'

import { Button } from '@/shared/ui/Button'
import styles from './PromocodeField.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export const PromocodeField = ({ promocode, translations }: { promocode?: string, translations?: any }) => {
	const ref = useRef<HTMLInputElement>(null)
	const router = useRouter()

	return (
		<div className={styles.wrapper}>
			<Input ref={ref} name="gift-code" defaultValue={promocode} placeholder={translations.promocode_placeholder} className={styles.couponField} type="text" />
			<button onClick={() => {
				router.push(`?promocode=${ref.current?.value}`)
			}} type="button">
				<Button className={styles.button}>{translations.apply_promocode}</Button>
			</button>
		</div>
	)
}