import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: 'https://www.waterpro.ee/et',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et',
					ru: 'https://www.waterpro.ee/ru'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/installments',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/installments',
					ru: 'https://www.waterpro.ee/ru/installments'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/contacts',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/contacts',
					ru: 'https://www.waterpro.ee/ru/contacts'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/cart',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/cart',
					ru: 'https://www.waterpro.ee/ru/cart'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/catalog/veepuhassusteemid',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/catalog/veepuhassusteemid',
					ru: 'https://www.waterpro.ee/ru/catalog/vodoochistitelnye-sistemy-ru'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/catalog/dushifilter',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/catalog/dushifilter',
					ru: 'https://www.waterpro.ee/ru/catalog/filtr-dlya-dusha'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/catalog/veefiltrid',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/catalog/veefiltrid',
					ru: 'https://www.waterpro.ee/ru/catalog/vodyanye-filtry'
				}
			}
		},
		{
			url: 'https://www.waterpro.ee/et/catalog/aksessuaarid',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					et: 'https://www.waterpro.ee/et/catalog/aksessuaarid',
					ru: 'https://www.waterpro.ee/ru/catalog/aksessuary'
				}
			}
		},
	]
}

export default sitemap