import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function PageNotFound() {
	const router = useRouter();

	return (
		<div>
			<Header />

			<main className='flex flex-col md:flex-row items-center justify-center gap-10 max-w-screen-2xl px-4 mx-auto my-32 font-sans tracking-wider'>
				<Image
					src='/not-found.png'
					width={400}
					height={400}
					alt='Page Not Found'
				/>
				<div>
					<h1 className='text-3xl font-bold mb-3'>Oops! Nothing here...</h1>
					<p>
						Sorry but the page you are looking for does not exist or is
						temporarily unavailable.
					</p>
					<button onClick={() => router.push('/')} className='button w-44'>
						Go Back to Homepage
					</button>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default PageNotFound;
