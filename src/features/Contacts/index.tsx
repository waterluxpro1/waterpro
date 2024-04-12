import { Phone } from '@/shared/icons/Phone'
import styles from './Contacts.module.scss'
import { Mail } from '@/shared/icons/Mail'
import clsx from 'clsx'

export const Contacts = ({ className }: { className?: string }) => {
	return (
		<ul className={clsx(styles.contacts, className)}>
			<li><a className={styles.contact} href="tel:+37256484797"><Phone /> +372 5648 4797</a></li>
			<li><a className={styles.contact} href="mailto:info@waterpro.ee"><Mail /> info@waterpro.ee</a></li>
		</ul>
	)
}