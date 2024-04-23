export interface AdvantagesProps {
	locale?: {
		title: string
		description: string
		cards: {
			icon_url: string
			title: string
			description: string
		}[]
		blocks: {
			title: string
			description: string
		}[]
	}
}