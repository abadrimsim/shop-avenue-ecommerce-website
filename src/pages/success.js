import { useRouter } from 'next/router';

function Success() {
	const router = useRouter();
	return (
		<div>
			<main className='max-w-screen-lg mx-auto mt-28'>
				<div className='flex flex-col p-10 text-center items-center'>
					<div className='flex flex-col md:flex-row items-center space-x-2 mb-5'>
						<h1 className='text-2xl md:text-3xl text-shop_ave-black font-heading'>
							Thank you for your purchase!
						</h1>
					</div>
					<p className='text-xs font-sans md:text-sm'>
						Thank you for shopping with us. We{"'"}ll send a confirmation once
						your item has been shipped. If you would like to check the status of
						your order(s) please check the link below.
					</p>
					<button
						onClick={() => router.push('/purchases')}
						className='button w-1/3 text-xs mt-8'
					>
						Go to My Purchases
					</button>
				</div>
			</main>
		</div>
	);
}

export default Success;
