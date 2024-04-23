'use client'

import { Dropdown } from '@/shared/icons/Dropdown'
import styles from './Menu.module.scss'
import { Contacts } from '@/features/Contacts'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Menu = ({ isOpened, locale }: { isOpened: boolean, locale: string }) => {
	const pathname = usePathname()
	const [menu, setMenu] = useState<{
		name: string
		href?: string
		submenu?: {
			name: string
			href: string
		}[]
	}[]>()

	useEffect(() => {
		import(`@/shared/locales/${locale}/menu.json`).then((menu) => {
			setMenu(menu.menu)
		})
	}, [locale])

	console.log(menu)

	return (
		<div className={clsx(styles.menu, isOpened && styles.opened)}>
			<ul className={styles.menuList}>
				{menu && menu?.map((item) => (
					<li className={styles.menuItem} key={JSON.stringify(item)}>
						{typeof item.href !== 'undefined' && (
							<Link href={`/${pathname?.split('/')[1]}${item.href}`}>{item.name}</Link>
						)}

						{item.submenu && (
							<>
								<span className={styles.menuTitle}>{item.name} <Dropdown /></span>
								<ul className={styles.submenu}>
									{item.submenu?.map((submenu) => (
										<li className={styles.submenuItem} key={JSON.stringify(submenu)}>
											<Link prefetch={false} href={`/${pathname?.split('/')[1]}${submenu.href}`}>{submenu.name}</Link>
										</li>
									))}
								</ul>
							</>
						)}
					</li>
				))}
			</ul>

			<Contacts className={styles.contacts} />
			<Link prefetch={false} href="?modal=contact">
				<Button appearance="light" size="normal" className={styles.button}>Связаться</Button>
			</Link>
		</div >
	)
}