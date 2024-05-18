'use client'

import { createContext, useState, type HTMLAttributes } from 'react'
import styles from './Spoiler.module.scss'
import clsx from 'clsx'

export const SpoilerContext = createContext({
	opened: false,
	setOpened: (arg0: boolean) => { arg0 }
})

export const Spoiler = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	const [opened, setOpened] = useState(false)

	return (
		<SpoilerContext.Provider value={{ opened, setOpened }}>
			<div className={clsx(styles.spoiler, className)} {...props}>

			</div>
		</SpoilerContext.Provider>
	)
}