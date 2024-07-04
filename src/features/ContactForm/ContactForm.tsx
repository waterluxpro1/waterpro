import { wordpress } from '@/shared/api/wordpress.service'
import { headers } from 'next/headers'
import { ContactFormTemplate } from './ContactFormTemplate'

export const ContactForm = async () => {
	return wordpress.getTranslations('contact-form', headers().get('referer')?.split('/')[3]!).then((translations) =>
		<ContactFormTemplate translations={translations} />
	)
}