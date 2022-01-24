import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/cartSlice';
import NumberFormat from 'react-number-format';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.stripe_public_key);

function Cart() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);
	const { data: session } = useSession();

	const createCheckoutSession = async () => {
		const stripe = await stripePromise;

		// Call the backend to create a checkout session
		const checkoutSession = await axios.post('/api/create-checkout-session', {
			items,
			email: session.user.email,
		});

		// Redirect user to Stripe Checkout
		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) alert(result.error.message);
	};

	return (
		<div>
			<Header />

			<main className='flex flex-col md:flex-row max-w-screen-2xl mx-auto'>
				{/* Left */}
				<div className='flex-grow'>
					<div className='flex flex-col p-5 space-y-10'>
						<h1 className='text-2xl border-b pb-4 font-sans tracking-wider font-semibold'>
							{items.length === 0
								? 'Your cart is empty.'
								: `Your cart (${items.length} items)`}
						</h1>

						{items.map((item, i) => (
							<CartItem
								key={i}
								id={item.id}
								title={item.title}
								rating={item.rating}
								price={item.price}
								description={item.description}
								category={item.category}
								image={item.image}
							/>
						))}
					</div>
				</div>

				{/* Right */}
				<div className='flex flex-col bg-white p-12 font-sans tracking-wider relative'>
					{items.length > 0 && (
						<>
							<h3 className='font-semibold border-b pb-4'>Order Summary</h3>
							<h2 className='whitespace-nowrap mt-4'>
								Subtotal ({items.length} items):{' '}
								<span className='font-bold'>
									<NumberFormat
										value={total.toFixed(2)}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'$'}
									/>
								</span>
							</h2>
							<button
								role='link'
								onClick={createCheckoutSession}
								disabled={!session}
								className={`button w-full mb-4 ml-0 ${
									!session && 'button-disabled cursor-not-allowed'
								}`}
							>
								Proceed to checkout
							</button>

							<Image
								src='/advertisement-4.jpg'
								width={230}
								height={230}
								alt='Advertisement Banner'
								objectFit='contain'
							/>
						</>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Cart;
