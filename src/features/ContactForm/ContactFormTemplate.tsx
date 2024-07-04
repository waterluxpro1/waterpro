'use client'

import { Button } from '@/shared/ui/Button'
import styles from './ContactForm.module.scss'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import Link from 'next/link'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Input } from '@/shared/ui/Input/Input'
import { Title2 } from '@/shared/ui/Title2'
import { send } from './sendContactForm'
import clsx from 'clsx'
import { useFormState } from 'react-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const getKeyIfItIsExists = (object: Record<string, unknown> | undefined, key: string): string =>
	object && key in object && typeof object[key] === 'string' ? object[key] as string : ''

export const ContactFormTemplate = ({ ...props }: {
	translations: {
		name: string
		phone: string
		address: string
		question: string
		agree_policy: string
		send: string
	}
}) => {
	const [status, action] = useFormState<any, FormData>(send, { ok: undefined, message: undefined })
	const { locale } = useParams()

	const [translations, setTranslations] = useState<any>()

	useEffect(() => {
		(async () => {
			const response = await fetch('/api/translations?slug=contact-form')
			const json = await response.json()

			setTranslations(JSON.parse(json[0].acf[locale as string]))
		})()
	}, [locale])

	console.log(translations)

	return (
		<div>
			<Title2 className={styles.title}>{getKeyIfItIsExists(translations, 'title')}</Title2>
			<form className={styles.form} action={action}>
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
				<div className={styles.block}>
					<Input name="name" autoComplete="name" placeholder={translations?.name} required />
					<Input name="email" type="email" autoComplete="email" placeholder="Email*" required />
				</div>
				<div className={styles.block}>
					<Input name="tel" type="tel" autoComplete="tel" placeholder={getKeyIfItIsExists(translations, 'phone')} required />
					<Input name="address" autoComplete="address-line1" placeholder={getKeyIfItIsExists(translations, 'address')} required />
				</div>
				<div className={styles.block}>
					<Textarea name="message" autoComplete="none" className={styles.textarea} placeholder={getKeyIfItIsExists(translations, 'question')} />
				</div>
				<div className={styles.checkboxWrapper}>
					<Checkbox id="form-agree"
						label={<>{getKeyIfItIsExists(translations, 'agree_policy').split('>')[0]} <Link prefetch={false} className={styles.link} href={getKeyIfItIsExists(translations, 'policy_url')}>{getKeyIfItIsExists(translations, 'agree_policy').split('>')[1]}</Link></>} />
				</div>
				<button type="submit">
					<Button className={styles.button} appearance="primary" size="large">{getKeyIfItIsExists(translations, 'send')}</Button>
				</button>
			</form>
		</div>
	)
}