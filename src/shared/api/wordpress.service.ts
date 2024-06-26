import { notFound } from 'next/navigation'
import type { ICategory } from '../interfaces/models/Category.interface'
import type { IGood } from '../interfaces/models/Good.interface'
import type { PageModel } from '../interfaces/models/Page.model'
import type { TranslationModel } from '../interfaces/models/Translation.model'

const request = async<T>(path: URL | string, init?: RequestInit | undefined): Promise<T> => {
	const response = await fetch(path, init)
	const json: T = await response.json()

	return json
}

const wcRequest = async <T>(path: string): Promise<T> => {
	const response = await request<T>(`https://waterpro.ee/wp-json/wc/v3/${path}`, {
		next: {
			revalidate: 180,
			tags: [path]
		},
		headers: {
			'Authorization': `Basic ${process.env.WP_PASSWORD}`,
			'Access-Control-Allow-Origin': '*'
		}
	})

	return response
}

const wpRequest = async <T>(path: string): Promise<T> => {
	const response = await request<T>(`https://waterpro.ee/wp-json/wp/v2/${path}`, {
		next: {
			revalidate: 180,
			tags: [path]
		},
		headers: {
			'Authorization': `Basic ${process.env.WP_PASSWORD}`,
			'Access-Control-Allow-Origin': '*'
		}
	})

	return response
}

export const woocomerence = {
	getPopularGoods: async (lang: string = 'ru') => wcRequest<IGood[]>(`products?orderby=popularity&per_page=5&lang=${lang}`),
	getGoodsByCategoryId: async (categodyId: number) => wcRequest<IGood[]>(`products?category=${categodyId}&per_page=100`),
	getCategoryBySlug: async (categorySlug: string) => wcRequest<ICategory[]>(`products/categories?slug=${categorySlug}`),
	getGoodBySlug: async (slug: string) => wcRequest<IGood[]>(`products?slug=${slug}`),
	getGoodById: async (id: number) => wcRequest<IGood>(`products/${id}`),
	getShippingMethods: async () => wcRequest<any[]>('shipping/zones/2/methods'),
}

export const wordpress = {
	getPage: async (slug: string) => wpRequest<PageModel[]>(`pages?slug=${slug}&acf_format=standard`),
	getMediaById: async (id: number) => wpRequest<{ source_url: string }>(`media/${id}`),
	getTranslations: async (slug: string, lang: string) => {
		const [translation] = await wpRequest<TranslationModel[]>(`translations?slug=${slug}`)

		console.log(translation.acf, lang)

		if (translation) {
			try {
				return JSON.parse(typeof translation.acf[lang] === 'string' ? translation.acf[lang]! : '')
			}
			catch (e) {
				console.log(e)
			}
		}
		else {
			console.error(`translation ${slug} in ${lang} not found (404)`)
			notFound()
		}
	}
}