import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';

function CartItem({ id, title, price, rating, description, category, image }) {
	const dispatch = useDispatch();

	const addItemToCart = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
		};

		// Push item into redux
		dispatch(addToCart(product));
	};

	const removeItemFromCart = () => {
		dispatch(removeFromCart({ id }));
	};

	return (
		<div className='grid grid-cols-5 font-sans tracking-wider'>
			<Image
				src={image}
				height={100}
				width={100}
				alt={title}
				objectFit='contain'
			/>

			{/* Middle */}
			<div className='col-span-3 mx-5'>
				<p className='font-semibold'>{title}</p>
				<p className='text-gray-400'>{category}</p>

				<NumberFormat
					value={price}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
					className='font-semibold'
				/>
			</div>

			{/* Right add/remove buttons */}
			<div className='flex justify-self-end items-center'>
				<button
					className='button px-3 py-1 my-auto text-sm text-center'
					onClick={removeItemFromCart}
				>
					-
				</button>
				<input
					type='text'
					className='border-1 border-shop_ave h-7 w-8 mx-0.5'
				/>
				<button
					className='button px-3 py-1 my-auto text-sm text-center ml-0'
					onClick={addItemToCart}
				>
					+
				</button>
			</div>
		</div>
	);
}

// py-2 mt-8 ml-1 w-2/4 md:w-1/5 text-white text-sm font-sans tracking-widest font-semibold md:text-base rounded-sm focus:outline-none bg-shop_ave hover:bg-white hover:ring-1 hover:ring-shop_ave hover:text-shop_ave

export default CartItem;
