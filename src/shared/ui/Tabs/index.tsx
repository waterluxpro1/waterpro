'use client'

import { useState, createContext } from 'react'
import type { TabsProps } from './Tabs.props'

export const TabsContext = createContext({
	activeTabIndex: 0,
	setActiveTabIndex: (arg: number) => { arg }
})

export const Tabs = ({ defaultActive, ...props }: TabsProps) => {
	const [activeTabIndex, setActiveTabIndex] = useState(defaultActive ? defaultActive : 0)

	return (
		<TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
			<div {...props}></div>
		</TabsContext.Provider>
	)
}