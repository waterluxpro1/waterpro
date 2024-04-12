'use client'

import { useContext } from 'react'
import type { TabProps } from './Tab.props'
import { TabsContext } from '../Tabs'
import styles from './Tab.module.scss'
import clsx from 'clsx'

export const Tab = ({ index, className, ...props }: TabProps) => {
	const tabs = useContext(TabsContext)

	return (
		<div {...props} className={clsx(className, styles.tab, tabs.activeTabIndex === index && styles.active)} onClick={() => {
			if (tabs.activeTabIndex !== index) {
				tabs.setActiveTabIndex(index)
			}
		}}>

		</div>
	)
}
