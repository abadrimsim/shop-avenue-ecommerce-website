const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const CheckoutSession = async (req, res) => {
	const { items, email } = req.body;

	const transformedItems = items.map((item) => ({
		description: item.category,
		quantity: 1,
		price_data: {
			currency: 'usd',
			unit_amount: item.price * 100,
			product_data: {
				name: item.title,
				images: [item.image],
			},
		},
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		shipping_options: [
			{
				shipping_rate: 'shr_1KLSg8IMSj8Eh8DHFIHyX6Ye',
			},
			{
				shipping_rate: 'shr_1KLSfFIMSj8Eh8DHQzad95AC',
			},
		],
		// shipping_rates: ['', 'shr_1KLSfFIMSj8Eh8DHQzad95AC'],
		shipping_address_collection: {
			allowed_countries: ['GB', 'US', 'CA', 'AU', 'PH'],
		},
		line_items: transformedItems,
		mode: 'payment',
		discounts: [
			{
				coupon: 'NsiMBJdD',
			},
		],
		success_url: `${process.env.HOST}/success`,
		cancel_url: `${process.env.HOST}/checkout`,
		metadata: {
			email,
			images: JSON.stringify(items.map((item) => item.image)),
		},
	});

	res.status(200).json({ id: session.id });
};

export default CheckoutSession;
