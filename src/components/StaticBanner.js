function StaticBanner() {
	return (
		<div className="h-[75vh] relative md:pl-10 bg-[url('https://i.ibb.co/BT6cVLk/shop-banner.jpg')]">
			<div className='absolute bottom-1/3 text-center'>
				<h1 className='text-6xl md:text-8xl uppercase text-white font-heading'>
					New Arrivals
				</h1>
				<button className='uppercase border-2 px-6 py-2 mt-4 font-sans text-white text-xl'>
					Shop Now
				</button>
			</div>
		</div>
	);
}

export default StaticBanner;
