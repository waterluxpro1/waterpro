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
	}
}

export default nextConfig