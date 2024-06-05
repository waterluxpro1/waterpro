export interface MenuModel {
	menu: {
		name: string
		submenu?: { name: string, href: string }[]
		href?: string
	}[]
}