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

const getKeyIfItIsExists = (object: Record<string, unknown>, key: string): string =>
	key in object && typeof object[key] === 'string' ? object[key] as string : ''

export const ContactForm = () => {
	const { locale: lang } = useParams()

	const [locale, setLocale] = useState<Record<string, unknown>>({})

	useEffect(() => {
		import(`@/shared/locales/${lang}/contact-form.json`).then((result) => {
			setLocale(result)
		})
	}, [lang])

	return (
		<div>
			<Title2 className={styles.title}>{getKeyIfItIsExists(locale, 'title')}</Title2>
			<form className={styles.form} action="">
				<div className={styles.block}>
					<Input name="name" placeholder={getKeyIfItIsExists(locale, 'name')} required />
					<Input name="name" placeholder="Email*" required />
				</div>
				<div className={styles.block}>
					<Input name="name" placeholder={getKeyIfItIsExists(locale, 'phone')} required />
					<Input name="name" placeholder={getKeyIfItIsExists(locale, 'address')} required />
				</div>
				<div className={styles.block}>
					<Textarea className={styles.textarea} placeholder={getKeyIfItIsExists(locale, 'question')} />
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