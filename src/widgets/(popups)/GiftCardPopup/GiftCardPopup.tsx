'use client'

import { Button } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/Input/Input'
import { Popup } from '@/shared/ui/Popup/Popup'
import { Title2 } from '@/shared/ui/Title2'
import styles from './GiftCardPopup.module.scss'
import { sendGiftCardRequest } from './sendGiftCardRequest'
import { useFormState } from 'react-dom'
import clsx from 'clsx'
import { useTranslations } from '@/shared/hooks/useTranslations.hook'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export const GiftCardPopup = () => {
	const [status, action] = useFormState<any, FormData>(sendGiftCardRequest, { ok: undefined, message: undefined })
	const { locale } = useParams()
	const translations = useTranslations('gift-card-form', locale.toString())

	return (
		<Popup popupName="gift-card">
			<Title2 className={styles.title}>{translations.title}</Title2>
			<form action={action} className={styles.form}>
				{typeof status.ok !== 'undefined' && (
					status.ok ?
						<div className={clsx(styles.okMessage)}>
							<div className={styles.ok}>✔</div>
						</div>
						:
						<div className={clsx(styles.okMessage)}>
							<div className={styles.ok}>❌</div>
							<div className={styles.message}>{status.message}</div>
						</div>
				)}
				<Input required name="name" placeholder={translations.name} />
				<Input required name="tel" type="tel" placeholder={translations.phone} />
				<Input required name="email" type="email" placeholder="Email*" />
				<Input required name="sum" type="text" placeholder={translations.sum} />
				<div className="cbwrap">
					<Checkbox id="gift-card-form-agree"
						label={<>
							{translations.agree_policy?.split?.('>')[0]}
							<Link className={styles.link} href={translations.policy_page_url ? translations.policy_page_url : '#'}>{translations.agree_policy?.split?.('>')[1]}</Link></>} />
				</div>
				<button type="submit" className={styles.button}><Button>{translations.send_button}</Button></button>

			</form>
		</Popup >
	)
}