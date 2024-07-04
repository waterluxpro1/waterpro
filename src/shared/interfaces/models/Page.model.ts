export interface PageModel {
	title: { rendered: string }
	content: { rendered: string }
	slug: string
	lang: string
	translations: Record<string, number>
}