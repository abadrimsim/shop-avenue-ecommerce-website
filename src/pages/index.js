import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ data }) {
	return (
		<div className='bg-white text-gray-600'>
			<Head>
				<title>Welcome to Shop Avenue</title>
				<link rel='shortcut icon' href='/shop-logo-light.ico' />
			</Head>

			<Header />
			<Banner />

			<main className='max-w-screen-2xl mx-auto'>
				<ProductFeed key={data.id} products={data} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(`https://fakestoreapi.com/products`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
