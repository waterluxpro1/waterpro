export interface IGood {
	id: number
	name: string
	slug: string
	description: string
	short_description: string
	related_ids: number[]
	price: number
	regular_price: number
	variations: number[]

	acf: {
		equipment: string
	}

	categories: {
		id: number
		name: string
		slug: string
	}[]

	images: {
		id: number
		src: string
		alt: string
		name: string
	}[]

	meta_data: {
		id: number
		key: string
		value: string
	}[]
}