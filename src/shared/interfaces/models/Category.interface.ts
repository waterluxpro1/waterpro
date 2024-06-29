export interface ICategory {
	id: number
	name: string
	slug: string
	description: string
	image: {
		id: number
		src: string
		alt: string
		name: string
	} | null
	lang: string
	translations: Record<string, number>
}