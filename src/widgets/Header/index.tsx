'use client'

import { Container } from '@/shared/ui/Container'
import styles from './Header.module.scss'
import { Logo } from '@/entities/Logo'
import { Contacts } from '@/features/Contacts'
import { Select } from '@/shared/ui/Select'
import { SelectItem } from '@/shared/ui/SelectItem'
import { Button } from '@/shared/ui/Button'
import { Menu } from './Menu'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = ({ lang }: { lang: string }) => {
	const [isOpened, setIsOpened] = useState(false)
	const [locale, setLocale] = useState<{ contact_button: string }>()

	useEffect(() => {
		import(`@/shared/locales/${lang}/header.json`).then(data => {
			setLocale(data)
		})
	}, [lang])

	return (
		<header className={styles.header}>
			<Container className={styles.top}>
				<Logo />
				<div className={styles.mainPart}>
					<Contacts className={styles.contacts} />
					<Select defaultValue={<>
						{lang === 'ru' &&
							<span className={styles.selectItem}>
								<Image src="/img/ru-flag.svg" alt="" width={20} height={20} /> Ru
							</span>
						}
						{lang === 'et' &&
							<span className={styles.selectItem}>
								<Image src="/img/et-flag.svg" alt="" width={20} height={20} /> Et
							</span>
						}
					</>}>
						{lang === 'et' &&
							<SelectItem>
								<Link prefetch={false} href="/ru" className={styles.selectItem}>
									<Image src="/img/ru-flag.svg" alt="" width={20} height={20} /> Ru
								</Link>
							</SelectItem>
						}
						{lang === 'ru' &&
							<SelectItem><Link prefetch={false} href="/et" className={styles.selectItem}>
								<Image src="/img/et-flag.svg" alt="" width={20} height={20} /> Et
							</Link></SelectItem>
						}
					</Select>
					<Link prefetch={false} href="?modal=contact" className={styles.button}>
						<Button appearance="secondary" size="normal">{locale?.contact_button}</Button>
					</Link>
					<div className={styles.menuButton} onClick={() => { setIsOpened(!isOpened) }}><span></span></div>
				</div>
			</Container>
			<div className={styles.navigation}>
				<Container>
					<Menu locale={lang} isOpened={isOpened} />
				</Container>
			</div>
		</header>
	)
}