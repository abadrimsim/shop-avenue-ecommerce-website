import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className='bg-white text-gray-600'>
			<Head>
				<title>Welcome to Shop Avenue</title>
				<link rel='shortcut icon' href='../../public/favicon.ico' />
			</Head>

			<Header />

			<main className='max-w-screen-2xl mx-auto'>
				<Banner />
			</main>
		</div>
	);
}
