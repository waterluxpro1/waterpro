import { ContactPopup } from '@/widgets/(popups)/ContactPopup/ContactPopup'
import { Footer } from '@/widgets/Footer/Footer'
import { Header } from '@/widgets/Header'
import { cookies } from 'next/headers'
import type { ReactNode } from 'react'

const Layout = ({ children, params }: { children: ReactNode, params: { locale: string } }) => {
	const cart = JSON.parse(
		cookies().has('cart') && cookies().get('cart')?.value
			? cookies().get('cart')?.value!
			: '{}'
	)

	return (
		<>
			<Header goods={cart.length} lang={params.locale} />
			<main>
				{children}
			</main>
			<Footer lang={params.locale} />
			<ContactPopup />
		</>
	)
}
export default Layout
