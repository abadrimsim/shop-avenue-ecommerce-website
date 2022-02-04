import { useRouter } from 'next/router';

function StaticBanner() {
	const router = useRouter();

	return (
		<div className="h-[100vh] md:h-[75vh] relative md:pl-10 bg-top bg-cover bg-[url('https://i.ibb.co/BT6cVLk/shop-banner.jpg')]">
			<div className='absolute bottom-1/3 text-center'>
				<h1 className='text-6xl md:text-8xl uppercase text-white font-heading drop-shadow-md'>
					New Arrivals
				</h1>
				<button
					onClick={() => router.push('/shop')}
					className='uppercase border-2 px-6 py-2 mt-4 font-sans text-white text-xl drop-shadow-md'
				>
					Shop Now
				</button>
			</div>
		</div>
	);
}

export default StaticBanner;
