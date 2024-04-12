/** @type {import('next').NextConfig} */
const nextConfig = {
	images:
	{
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'waterpro.ee',
				pathname: '/wp-content/**'
			}
		]
	}

}

export default nextConfig