export interface PageModel {
	id: number
	title: { rendered: string }
	content: { rendered: string }
	slug: string
	lang: string
	translations: Record<string, number>
}