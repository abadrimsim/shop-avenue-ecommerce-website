import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function PageNotFound() {
	const router = useRouter();

	return (
		<div>
			<main className='flex flex-col md:flex-row items-center justify-center gap-10 max-w-screen-2xl px-4 mx-auto mt-48 tracking-wide'>
				<Image
					src='/not-found.jpg'
					blurDataURL='/not-found-blur.jpg'
					placeholder='blur'
					width={500}
					height={400}
					objectFit='contain'
					alt='Page Not Found'
				/>
				<div>
					<h1 className='text-xl font-heading mb-3'>Oops! Nothing here...</h1>
					<p className='mb-4 font-sans text-sm'>
						Sorry but the page you are looking for does not exist or is
						temporarily unavailable.
					</p>
					<button
						onClick={() => router.push('/')}
						className='button w-full md:w-1/3 text-xs ml-0'
					>
						Back to Homepage
					</button>
				</div>
			</main>
		</div>
	);
}

export default PageNotFound;
