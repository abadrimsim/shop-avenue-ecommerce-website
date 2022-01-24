import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
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

			<main className='max-w-screen-2xl mx-auto px-4'>
				<Banner />
				<ProductFeed key={data.id} products={data} />
			</main>

			<Footer />
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
