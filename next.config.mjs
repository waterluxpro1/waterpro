/** @type {import('next').NextConfig} */
const nextConfig = {
	images:
	{
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'waterpro.ee',
				pathname: '/wp-content/**'
			},
			{
				protocol: 'https',
				hostname: 'fb24m.ru',
				pathname: '/watertest/wp-content/**'
			},
		]
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://waterpro.ee/wp-json/wp/v2/:path*'
			}
		]
	}
}

export default nextConfig