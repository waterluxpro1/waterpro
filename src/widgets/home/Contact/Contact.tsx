import { Container } from '@/shared/ui/Container'
import styles from './Contact.module.scss'
import { ContactForm } from '@/features/ContactForm/ContactForm'

export const Contact = () => {
	return (
		<article className={styles.wrapper} id="contact">
			<Container className={styles.container}>
				<ContactForm />
			</Container>
		</article>
	)
}