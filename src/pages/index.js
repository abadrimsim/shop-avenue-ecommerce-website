import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Categories from '../components/Categories';
import ProductFeed from '../components/ProductFeed';
import StaticBanner from '../components/StaticBanner';

export default function Home({ data }) {
	return (
		<div className='bg-white text-gray-600'>
			<Head>
				<title>Welcome to Shop Avenue</title>
				<link rel='shortcut icon' href='/shopave-logo-round.ico' />
			</Head>

			<main className='mx-auto px-2'>
				<StaticBanner />
				<Categories />
				<ProductFeed key={data.id} products={data} />
			</main>
		</div>
	);
}

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
