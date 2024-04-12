'use client'

import { ReactNode, createContext, useState } from 'react'
import styles from './Select.module.scss'
import clsx from 'clsx'

export const SelectContext = createContext({
	activeValue: '',
	setActiveValue: (arg1: string) => { console.log(arg1) }
})

export const Select = ({ defaultValue, children }: { defaultValue: string, children: ReactNode }) => {
	const [isOpened, setIsOpened] = useState(false)
	const [activeValue, setActiveValue] = useState(defaultValue)

	return (
		<SelectContext.Provider value={{ activeValue, setActiveValue }}>
			<div className={styles.select}>
				<div className={styles.preview} onClick={() => { setIsOpened(!isOpened) }}>{activeValue}</div>
				<ul onClick={() => { setIsOpened(false) }} className={clsx(styles.list, isOpened && styles.opened)}>
					{children}
				</ul>
			</div>
		</SelectContext.Provider>
	)
}