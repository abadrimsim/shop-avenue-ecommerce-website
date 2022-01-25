import moment from 'moment';
import db from '../../firebase';
import Header from '../components/Header';
import PurchaseItem from '../components/PurchaseItem';
import { useSession, getSession } from 'next-auth/react';

function purchases({ orders, session }) {
	console.log(orders);
	// const { data: session } = useSession();

	return (
		<div>
			<Header />

			<main className='max-w-screen-lg mx-auto p-10'>
				<h1 className='text-2xl border-b pb-4 font-sans tracking-wider font-semibold '>
					{session
						? `Your Purchases (${orders.length}) Orders`
						: `Please sign in to see your orders.`}
				</h1>

				<div className='mt-5 space-y-4'>
					{orders?.map(
						({ id, amount, amountShipping, items, timestamp, images }) => (
							<PurchaseItem
								key={id}
								id={id}
								amount={amount}
								amountShipping={amountShipping}
								items={items}
								timestamp={timestamp}
								images={images}
							/>
						)
					)}
				</div>
			</main>
		</div>
	);
}

export default purchases;

export async function getServerSideProps(context) {
	const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

	// Get the users logged in credentials
	const session = await getSession(context);
	// console.log('session: ', session);

	if (!session) {
		return {
			props: {},
		};
	}

	// Firebase db
	const stripeOrders = await db
		.collection('users')
		.doc(session.user.email)
		.collection('orders')
		.orderBy('timestamp', 'desc')
		.get();

	//  Stripe orders
	const orders = await Promise.all(
		stripeOrders.docs.map(async (order) => ({
			id: order.id,
			amount: order.data().amount,
			amountShipping: order.data().amount_shipping,
			images: order.data().images,
			timestamp: moment(order.data().timestamp.toDate()).unix(),
			items: (
				await stripe.checkout.sessions.listLineItems(order.id, {
					limit: 100,
				})
			).data,
		}))
	);

	return {
		props: {
			orders,
			session,
		},
	};
}
