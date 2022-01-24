import Header from '../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

function Success() {
	const router = useRouter();
	return (
		<div>
			<Header />

			<main className='max-w-screen-lg mx-auto'>
				<div className='flex flex-col p-10 text-center items-center'>
					<div className='flex items-center space-x-2 mb-5'>
						<CheckCircleIcon className='text-green-500 h-10' />
						<h1 className='text-3xl text-green-500'>
							Thank you for your purchase!
						</h1>
					</div>
					<p>
						Thank you for shopping with us. We{"'"}ll send a confirmation once
						your item has been shipped. If you would like to check the status of
						your order(s) please check the link below.
					</p>
					<button
						onClick={() => router.push('/purchases')}
						className='button mt-8'
					>
						Go to My Purchases
					</button>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Success;
