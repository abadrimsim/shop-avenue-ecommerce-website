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
					DEFAULT: '#333333',
				},
			},
			fontFamily: {
				sans: ['Encode Sans Condensed', 'sans-serif'],
			},
			screens: {
				md: '960px',
			},
			spacing: {
				128: '32rem',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
