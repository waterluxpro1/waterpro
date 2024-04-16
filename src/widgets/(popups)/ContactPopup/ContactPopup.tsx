import { ContactForm } from '@/features/ContactForm/ContactForm'
import { Popup } from '@/shared/ui/Popup/Popup'

export const ContactPopup = () => {
	return (
		<Popup popupName="contact">
			<ContactForm />
		</Popup>
	)
}