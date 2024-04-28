import { ContactPopup } from '@/widgets/(popups)/ContactPopup/ContactPopup'
import { Footer } from '@/widgets/Footer/Footer'
import { Header } from '@/widgets/Header'
import type { ReactNode } from 'react'

const Layout = ({ children, params }: { children: ReactNode, params: { locale: string } }) => (
	<>
		<Header lang={params.locale} />
		<main>
			{children}
		</main>
		<Footer lang={params.locale} />
		<ContactPopup />
	</>
)

export default Layout
