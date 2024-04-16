'use client'

import { type ReactNode, createContext } from 'react'
import type { HomePageModel } from '../model/HomePage.model'

export const HomePageContext = createContext({} as HomePageModel)

export const HomePageProvider = ({ children, value }: { children: ReactNode, value: HomePageModel }) => {
	return (
		<HomePageContext.Provider value={value}>
			{children}
		</HomePageContext.Provider>
	)
}