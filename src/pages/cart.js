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
		<>
			<Header />

			<div>
				<main className='flex flex-col gap-5 md:flex-row max-w-screen-2xl z-0 mx-auto pt-40 pb-24'>
					{/* Left */}
					<div className='flex-grow'>
						<div className='flex flex-col p-4 space-y-10'>
							<h1 className='text-2xl border-b pb-4 font-heading tracking-wide'>
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
					<div className='flex flex-col bg-white p-4 font-sans text-sm tracking-wide relative'>
						{items.length > 0 && (
							<>
								<h3 className='font-heading border-b pb-4 text-xl'>
									Order Summary:
								</h3>
								<h2 className='uppercase whitespace-nowrap mt-4'>
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
									className={`button text-sm w-full my-5 ml-0 ${
										!session &&
										'bg-gray-200 text-gray-500 hover:ring-0 hover:bg-gray-200 hover:text-gray-500 cursor-not-allowed'
									}`}
								>
									Proceed to Checkout
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
		</>
	);
}

export default Cart;
