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
import { useParams } from 'next/navigation'
import { useTranslations } from '@/shared/hooks/useTranslations.hook'

export const ContactForm = () => {
	const [status, action] = useFormState<any, FormData>(send, { ok: undefined, message: undefined })
	const { locale } = useParams()

	const translations = useTranslations('contact-form', locale.toString())

	return (
		<div>
			<Title2 className={styles.title}>{translations.title}</Title2>
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
					<Input name="tel" type="tel" autoComplete="tel" placeholder={translations?.phone} required />
					<Input name="address" autoComplete="address-line1" placeholder={translations?.address} required />
				</div>
				<div className={styles.block}>
					<Textarea name="message" autoComplete="none" className={styles.textarea} placeholder={translations?.question} />
				</div>
				<div className={styles.checkboxWrapper}>
					<Checkbox id="form-agree"
						label={<>{translations?.agree_policy?.split?.('>')[0]} <Link prefetch={false} className={styles.link} href={translations?.policy_url ? translations?.policy_url : '#'}>{translations?.agree_policy?.split?.('>')[1]}</Link></>} />
				</div>
				<button type="submit">
					<Button className={styles.button} appearance="primary" size="large">{translations?.send}</Button>
				</button>
			</form>
		</div>
	)
}