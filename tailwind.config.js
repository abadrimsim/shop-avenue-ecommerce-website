module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.js', './src/components/**/*.js'],
	darkMode: true,
	theme: {
		extend: {
			colors: {
				shop_ave: {
					tan: '#d4af87',
					black: '#101016',
					DEFAULT: '#333333',
				},
			},
			fontFamily: {
				sans: ['Red Hat Display', 'sans-serif'],
				heading: ['Lora', 'serif'],
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
