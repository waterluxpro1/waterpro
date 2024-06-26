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

export const GiftCardPopup = () => {
	const [status, action] = useFormState<any, FormData>(sendGiftCardRequest, { ok: undefined, message: undefined })

	console.log(status)

	return (
		<Popup popupName="gift-card">
			<Title2 className={styles.title}>Заполните форму и получите подарочную карту!</Title2>
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
				<Input required name="name" placeholder="Имя*" />
				<Input required name="tel" type="tel" placeholder="Телефон*" />
				<Input required name="email" type="email" placeholder="Email*" />
				<div className="cbwrap">
					<Checkbox id="gift-card-form-agree"
						label={<>Даю согласие на обработку личных данных</>} />
				</div>
				<button type="submit" className={styles.button}><Button>Отправить</Button></button>

			</form>
		</Popup >
	)
}