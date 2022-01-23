import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/cartSlice';
import NumberFormat from 'react-number-format';

function Cart() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);

	// console.log(items);
	// const count = {};

	// const countItems = () => {
	// 	items.forEach(function (x) {
	// 		console.log(x);
	// 		{
	// 			count[x] = (count[x] || 0) + 1;
	// 		}
	// 	});
	// };
	// countItems();
	// console.log({ count });

	return (
		<div>
			<Header />

			<main className='lg:flex max-w-screen-2xl mx-auto'>
				{/* Left */}
				<div className='flex-grow m-5'>
					<div className='flex flex-col p-5 space-y-10'>
						<h1 className='text-2xl border-b pb-4 font-sans tracking-wider font-semibold'>
							{items.length === 0
								? 'Your cart is empty.'
								: `Your Cart (${items.length} items)`}
						</h1>

						{items.map((item, i) => (
							<CartItem
								key={i}
								id={item.id}
								title={item.title}
								rating={item.rating}
								price={item.price}
								description={item.description}
								category={item.category}
								image={item.image}
							/>
						))}
					</div>
				</div>

				{/* Right */}
				<div className='flex flex-col bg-white p-10 font-sans tracking-wider'>
					{items.length > 0 && (
						<>
							<h3 className='font-semibold border-b pb-4'>Order Summary</h3>
							<h2 className='whitespace-nowrap mt-4'>
								Subtotal ({items.length} items):{' '}
								<span className='font-bold'>
									<NumberFormat
										value={total.toFixed(2)}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'$'}
									/>
								</span>
							</h2>
							<button className='button w-full'>Proceed to checkout</button>
						</>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Cart;
