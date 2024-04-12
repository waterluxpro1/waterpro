import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: 'https://waterpro.ee',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},

	]
}

export default sitemap