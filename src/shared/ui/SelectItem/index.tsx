'use client'

import { useContext } from 'react'
import type { SelectItemProps } from './SelectItem.props'
import { SelectContext } from '../Select'
import styles from './SelectItem.module.scss'

export const SelectItem = ({ children }: SelectItemProps) => {
	const select = useContext(SelectContext)

	return (<>
		{
			select.activeValue !== children &&
			<li className={styles.selectItem} onClick={() => {
				select.setActiveValue(children)
			}}>{children}</li>
		}
	</>
	)
}