'use client'

import styles from './ErrorModal.module.scss'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/shared/ui/Button'
import Link from 'next/link'
import clsx from 'clsx'

export const ErrorModal = () => {
	const params = useSearchParams()

	return (
		<div className={clsx(params.has('error') && styles.opened, styles.modal)}>
			<div className={styles.window}>
				<div className={styles.text}>
					{params.get('error_text')}
				</div>
				<Link href="?">
					<Button className={styles.button}>OK</Button>
				</Link>
			</div>
		</div>
	)
}