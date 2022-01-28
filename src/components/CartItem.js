import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';

function CartItem({ id, title, price, rating, description, category, image }) {
	console.log(id, title, price, rating, description, category, image);
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
		<div className='grid grid-cols-1 md:grid-cols-5 font-sans tracking-wider bg-gray-100 p-5 rounded-md'>
			<Image
				src={image}
				height={150}
				width={150}
				alt={title}
				objectFit='contain'
			/>

			{/* Middle */}
			<div className='col-span-3 mx-4'>
				<p className='font-semibold mb-3'>{title}</p>
				<p className='text-gray-500 mb-4'>{description}</p>

				<NumberFormat
					value={price}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
					className='font-semibold'
				/>
			</div>

			{/* Right add/remove buttons */}
			<div className='flex flex-col w-full justify-self-end items-center'>
				<button className='button w-full m-2' onClick={addItemToCart}>
					Add to Cart
				</button>

				<button className='button w-full m-2' onClick={removeItemFromCart}>
					Remove from Cart
				</button>
			</div>
		</div>
	);
}

export default CartItem;
