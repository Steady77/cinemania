/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'kinopoiskapiunofficial.tech',
			'avatars.mds.yandex.net',
			'localhost',
		],
	},
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_APP_URL,
		API_URL: process.env.REACT_APP_API_URL,
		API_KEY: process.env.REACT_APP_API_KEY,
		APP_ENV: process.env.REACT_APP_ENV,
		SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/upload/:path*',
				destination: 'http://localhost:5000/upload/:path*',
			},
		];
	},
	swcMinify: true,
	// Параметры для обхода лимита внешней API во время сборки
	experimental: {
		workerThreads: false,
		cpus: 1,
	},
};

module.exports = nextConfig;
