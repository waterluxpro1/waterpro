'use client'

import { Dropdown } from '@/shared/icons/Dropdown'
import styles from './Menu.module.scss'
import { Contacts } from '@/features/Contacts'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { MenuProps } from './Menu.props'
import { wordpress } from '@/shared/api/wordpress.service'
import type { MenuModel } from './Menu.model'

export const Menu = ({ isOpened, locale, setIsOpened }: MenuProps) => {
	const pathname = usePathname()
	const [translations, setTranslations] = useState<MenuModel>()

	useEffect(() => {
		(async () => {
			const translations = await wordpress.getTranslations('menu', locale)
			setTranslations(translations)

			console.log(translations)
		})()
	}, [locale])

	return (
		<div className={clsx(styles.menu, isOpened && styles.opened)}>
			<ul className={styles.menuList} onClick={(e) => {
				if ((e.target as HTMLElement).hasAttribute('data-link')) { setIsOpened(false) }
			}}>
				{translations && translations?.menu.map((item) => (
					<li className={styles.menuItem} key={JSON.stringify(item)}>
						{Object.hasOwn(item, 'href') && (
							<Link data-link prefetch={false} href={`/${pathname?.split('/')[1]}${item.href}`}>{item.name}</Link>
						)}

						{item.submenu && (
							<>
								<span className={styles.menuTitle}>{item.name} <Dropdown /></span>
								<ul className={styles.submenu}>
									{item.submenu?.map((submenu) =>
										<li key={JSON.stringify(submenu)} className={styles.submenuItem}>
											<Link data-link prefetch={false} href={`/${pathname?.split('/')[1]}${submenu.href}`}>
												{submenu.name}</Link>
										</li>
									)}
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