module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: true,
	theme: {
		extend: {
			colors: {
				shop_ave: {
					yellow: '#FFCC00',
					gray: '#F0F0F0',
					darkGray: '#212121',
					dark: '#181818',
					DEFAULT: '#1C1C1C',
				},
			},
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				heading: ['Rajdhani', 'sans-serif'],
			},
			screens: {
				md: '960px',
			},
			spacing: {
				128: '32rem',
			},
		},
	},
	plugins: [],
};
