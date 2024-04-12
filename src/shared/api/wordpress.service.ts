import type { ICategory } from '../interfaces/Category.interface'
import type { IGood } from '../interfaces/Good.interface'

const request = async<T>(path: URL | string, init?: RequestInit | undefined): Promise<T> => {
	const response = await fetch(path, init)
	const json: T = await response.json()

	return json
}

const wcRequest = async <T>(path: string): Promise<T> => {
	const response = await request<T>(`https://waterpro.ee/wp-json/wc/v3/${path}`, {
		next: {
			revalidate: 600,
			tags: [path]
		},
		headers: {
			'Authorization': `Basic ${btoa('API user:bxJv_tuG1_F94O_XQd5_vAdt_hw69')}`
		}
	})

	return response
}

export const woocomerence = {
	getPopularGoods: async () => wcRequest<IGood[]>('products?orderby=popularity&per_page=5&lang=ru'),
	getGoodsByCategoryId: async (categodyId: number) => wcRequest<IGood[]>(`products?category=${categodyId}`),
	getCategoryBySlug: async (categorySlug: string) => wcRequest<ICategory[]>(`products/categories?slug=${categorySlug}`),
	getGoodBySlug: async (slug: string) => wcRequest<IGood[]>(`products?slug=${slug}`),
	getGoodById: async (id: number) => wcRequest<IGood>(`products/${id}?lang=ru`),
}