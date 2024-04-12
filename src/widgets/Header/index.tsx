'use client'

import { Container } from '@/shared/ui/Container'
import styles from './Header.module.scss'
import { Logo } from '@/entities/Logo'
import { Contacts } from '@/features/Contacts'
import { Select } from '@/shared/ui/Select'
import { SelectItem } from '@/shared/ui/SelectItem'
import { Button } from '@/shared/ui/Button'
import { Menu } from './Menu'
import { useState } from 'react'

export const Header = () => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<header className={styles.header}>
			<Container className={styles.top}>
				<Logo />
				<div className={styles.mainPart}>
					<Contacts className={styles.contacts} />
					<Select defaultValue="Ru">
						<SelectItem>Ru</SelectItem>
						<SelectItem>Es</SelectItem>
					</Select>
					<Button appearance="secondary" size="normal" className={styles.button}>Связаться</Button>
					<div className={styles.menuButton} onClick={() => { setIsOpened(!isOpened) }}><span></span></div>
				</div>
			</Container>
			<div className={styles.navigation}>
				<Container>
					<Menu isOpened={isOpened} />
				</Container>
			</div>
		</header>
	)
}