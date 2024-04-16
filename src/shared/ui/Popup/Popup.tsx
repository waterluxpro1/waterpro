'use client'

import { Suspense, type ReactNode } from 'react'
import styles from './Popup.module.scss'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const PopupBase = ({ popupName, children }: { popupName: string, children?: ReactNode }) => {
	const searchParams = useSearchParams()
	const { push } = useRouter()
	const pathname = usePathname()

	return (
		<div onClick={(e) => {
			if (!(e.target as HTMLElement).closest(`.${styles.window}`)) {
				pathname && push(pathname)
			}
		}}
			className={clsx(styles.popup, (searchParams && searchParams.get('modal') === popupName) && styles.opened)}>
			<div className={styles.window}>
				<Link className={styles.close} href={pathname ? pathname : '#'}>
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M29.175 0.847515C28.9669 0.638932 28.7196 0.47345 28.4474 0.360542C28.1752 0.247633 27.8834 0.189515 27.5888 0.189515C27.2941 0.189515 27.0023 0.247633 26.7301 0.360542C26.4579 0.47345 26.2107 0.638932 26.0025 0.847515L15 11.8275L3.99752 0.825014C3.78921 0.616705 3.54191 0.451465 3.26974 0.338729C2.99757 0.225993 2.70586 0.167969 2.41127 0.167969C2.11667 0.167969 1.82496 0.225993 1.55279 0.338729C1.28062 0.451465 1.03332 0.616705 0.825014 0.825014C0.616705 1.03332 0.451465 1.28062 0.338729 1.55279C0.225993 1.82496 0.167969 2.11667 0.167969 2.41127C0.167969 2.70586 0.225993 2.99757 0.338729 3.26974C0.451465 3.54191 0.616705 3.78921 0.825014 3.99752L11.8275 15L0.825014 26.0025C0.616705 26.2108 0.451465 26.4581 0.338729 26.7303C0.225993 27.0025 0.167969 27.2942 0.167969 27.5888C0.167969 27.8834 0.225993 28.1751 0.338729 28.4472C0.451465 28.7194 0.616705 28.9667 0.825014 29.175C1.03332 29.3833 1.28062 29.5486 1.55279 29.6613C1.82496 29.774 2.11667 29.8321 2.41127 29.8321C2.70586 29.8321 2.99757 29.774 3.26974 29.6613C3.54191 29.5486 3.78921 29.3833 3.99752 29.175L15 18.1725L26.0025 29.175C26.2108 29.3833 26.4581 29.5486 26.7303 29.6613C27.0025 29.774 27.2942 29.8321 27.5888 29.8321C27.8834 29.8321 28.1751 29.774 28.4472 29.6613C28.7194 29.5486 28.9667 29.3833 29.175 29.175C29.3833 28.9667 29.5486 28.7194 29.6613 28.4472C29.774 28.1751 29.8321 27.8834 29.8321 27.5888C29.8321 27.2942 29.774 27.0025 29.6613 26.7303C29.5486 26.4581 29.3833 26.2108 29.175 26.0025L18.1725 15L29.175 3.99752C30.03 3.14252 30.03 1.70252 29.175 0.847515Z" fill="#262323" />
					</svg>
				</Link>
				{children}
			</div>
		</div>
	)
}

export const Popup = (props: { popupName: string, children?: ReactNode }) => (
	<Suspense>
		<PopupBase {...props} />
	</Suspense>
)