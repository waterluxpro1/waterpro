export interface IGood {
	id: number
	name: string
	slug: string
	short_description: string
	price_html: string
	related_ids: number[]

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