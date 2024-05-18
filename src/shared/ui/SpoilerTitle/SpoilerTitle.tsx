'use client'

import { useContext, type HTMLAttributes } from 'react'
import styles from './SpoilerTitle.module.scss'
import clsx from 'clsx'
import { SpoilerContext } from '../Spoiler/Spoiler'

export const SpoilerTitle = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	const spoiler = useContext(SpoilerContext)

	return (
		<span className={clsx(styles.spoilerTitle, spoiler.opened && styles.opened, className)} {...props} onClick={() => { spoiler.setOpened(!spoiler.opened) }}></span>
	)
}