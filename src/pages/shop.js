import AllProducts from '../components/AllProducts';
import StaticBanner from '../components/StaticBanner';
import { getSession } from 'next-auth/react';

function Shop({ data }) {
	return (
		<div className='bg-white text-gray-600'>
			<main className='mx-auto px-2'>
				<StaticBanner />
				<AllProducts key={data.id} products={data} />
			</main>
		</div>
	);
}

export default Shop;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const res = await fetch(`https://fakestoreapi.com/products`);
	const data = await res.json();

	return {
		props: {
			data,
			session,
		},
	};
}
