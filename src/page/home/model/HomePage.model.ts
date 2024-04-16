export interface HomePageModel {
	acf: {
		title: string
		subtitle: string
		button: string

		categories: {
			name: string
			url: string
			image: string
		}[]

		advantages_title: string
		advantages_description: string
		advantage_cards: {
			icon: string
			title: string
			description: string
		}[]
		advantages_blocks: {
			title: string
			description: string
		}[]
	}
}