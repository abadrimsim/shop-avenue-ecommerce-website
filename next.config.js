module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['i.ibb.co', 'fakestoreapi.com', 'lh3.googleusercontent.com'],
	},
	env: {
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
	},
};
