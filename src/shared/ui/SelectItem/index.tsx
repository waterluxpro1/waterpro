'use client'

import { useContext } from 'react'
import type { SelectItemProps } from './SelectItem.props'
import { SelectContext } from '../Select'

export const SelectItem = ({ children }: SelectItemProps) => {
	const select = useContext(SelectContext)

	return (<>
		{
			select.activeValue !== children &&
			<li onClick={() => {
				select.setActiveValue(children)
			}}>{children}</li>
		}
	</>
	)
}