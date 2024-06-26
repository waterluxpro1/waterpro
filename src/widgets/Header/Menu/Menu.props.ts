export interface MenuProps {
	isOpened: boolean
	setIsOpened: (arg0: boolean) => void
	translations: {
		menu: {
			name: string
			href?: string
			submenu?: {
				name: string
				href: string
			}[]
		}[]
	}
}