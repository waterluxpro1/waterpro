'use client'

import { Dropdown } from '@/shared/icons/Dropdown'
import styles from './Menu.module.scss'
import { Contacts } from '@/features/Contacts'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Menu = ({ isOpened }: { isOpened: boolean }) => {
	const pathname = usePathname()

	return (
		<div className={clsx(styles.menu, isOpened && styles.opened)}>
			<ul className={styles.menuList}>
				<li className={styles.menuItem}>
					<Link href={`/${pathname?.split('/')[1]}`}>Главная</Link>
				</li>
				<li className={styles.menuItem}>
					<span className={styles.menuTitle}>
						Товары <Dropdown />
					</span>
					<ul className={styles.submenu}>
						<li className={styles.submenuItem}>
							<Link href={`/${pathname?.split('/')[1]}`}>Водоочистительные системы</Link>
						</li>
						<li className={styles.submenuItem}>
							<Link href="#">ФИЛЬТР ДЛЯ ДУША</Link>
						</li>
						<li className={styles.submenuItem}>
							<Link href="#">СМЕННЫЕ ФИЛЬТРЫ</Link>
						</li>
						<li className={styles.submenuItem}>
							<Link href="#">Дополнительные запчасти</Link>
						</li>
						<li className={styles.submenuItem}>
							<Link href="">ПОДАРОЧНАЯ КАРТА</Link>
						</li>
					</ul>
				</li>
				<li className={styles.menuItem}><Link href={`/${pathname?.split('/')[1]}#contact`}>Связаться с нами</Link></li>
				<li className={styles.menuItem}><Link href={`/${pathname?.split('/')[1]}/installments`}>Рассрочка</Link></li>
				<li className={styles.menuItem}><Link href={`/${pathname?.split('/')[1]}/contacts`}>Контакты</Link></li>
			</ul>
			<Contacts className={styles.contacts} />
			<Link href="?modal=contact">
				<Button appearance="light" size="normal" className={styles.button}>Связаться</Button>
			</Link>
		</div >
	)
}