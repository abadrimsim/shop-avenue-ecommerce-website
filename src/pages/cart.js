import Header from '../components/Header';

function Cart() {
	return (
		<div>
			<Header />

			<main className='lg:flex max-w-screen-2xl mx-auto'>
				{/* Left */}
				<div className='flex-grow m-5 shadow-sm'>
					<div className='flex flex-col p-5 space-y-10 bg-white'>
						<h1 className='text-3xl border-b pb-4'>Your cart is empty.</h1>
					</div>
				</div>

				{/* Right */}
				<div className='flex flex-col bg-white p-10 shadow-md'></div>
			</main>
		</div>
	);
}

export default Cart;
