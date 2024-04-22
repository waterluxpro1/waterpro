import { create } from 'zustand'
import type { ContactFormModel } from '../interfaces/models/ContactForm.model'

export const useStore = create<{ contactForm?: ContactFormModel, }>((set) => ({
	contactForm: undefined,
	setContactForm: (newState: ContactFormModel) => set(() => ({ contactForm: newState }))
}))