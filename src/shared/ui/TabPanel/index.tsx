'use client'

import clsx from 'clsx'
import type { TabPanelProps } from './TabPanel.props'
import styles from './TabPanel.module.scss'
import { useContext } from 'react'
import { TabsContext } from '../Tabs'

export const TabPanel = ({ index, className, ...props }: TabPanelProps) => {
	const tabs = useContext(TabsContext)

	return (
		<div className={clsx(className, styles.panel, tabs.activeTabIndex === index && styles.active)} {...props}></div>
	)
}