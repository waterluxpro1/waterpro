import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/'
	},
	sitemap: 'https://waterpro.ee/sitemap.xml'
})

export default robots