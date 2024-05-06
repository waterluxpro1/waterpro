'use client'

import { Button } from '@/shared/ui/Button'
import styles from './ContactForm.module.scss'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import Link from 'next/link'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Input } from '@/shared/ui/Input/Input'
import { Title2 } from '@/shared/ui/Title2'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const getKeyIfItIsExists = (object: Record<string, unknown> | undefined, key: string): string =>
	object && key in object && typeof object[key] === 'string' ? object[key] as string : ''

export const ContactForm = () => {
	const { locale: lang } = useParams()

	const [locale, setLocale] = useState<Record<string, unknown> | undefined>({})

	useEffect(() => {
		try {
			import(`@/shared/locales/${lang}/contact-form.json`).then((result) => {
				setLocale(result)
			})
		}
		catch (e) {
			console.error(e)
		}
	}, [lang])

	return (
		<div>
			<Title2 className={styles.title}>{getKeyIfItIsExists(locale, 'title')}</Title2>
			<form className={styles.form} action="">
				<div className={styles.block}>
					<Input name="name" autoComplete="name" placeholder={getKeyIfItIsExists(locale, 'name')} required />
					<Input name="email" autoComplete="email" placeholder="Email*" required />
				</div>
				<div className={styles.block}>
					<Input name="phone" autoComplete="tel" placeholder={getKeyIfItIsExists(locale, 'phone')} required />
					<Input name="address" autoComplete="address-line1" placeholder={getKeyIfItIsExists(locale, 'address')} required />
				</div>
				<div className={styles.block}>
					<Textarea name="message" autoComplete="none" className={styles.textarea} placeholder={getKeyIfItIsExists(locale, 'question')} />
				</div>
				<div className={styles.checkboxWrapper}>
					<Checkbox id="form-agree"
						label={<>{getKeyIfItIsExists(locale, 'agree_policy').split('>')[0]} <Link prefetch={false} className={styles.link} href="#">{getKeyIfItIsExists(locale, 'agree_policy').split('>')[1]}</Link></>} />
				</div>
				<Button className={styles.button} appearance="primary" size="large">{getKeyIfItIsExists(locale, 'send')}</Button>
			</form>
		</div>
	)
}