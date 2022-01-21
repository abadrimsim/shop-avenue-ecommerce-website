import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import NumberFormat from 'react-number-format';

const MAX_RATING = 5;
const DISCOUNT = 0.3;

function Product({ id, title, price, description, category, image, rating }) {
	const rate = Math.round(rating.rate);
	const ratingFiller = MAX_RATING - rate;

	const [isOnSale] = useState(Math.random() < 0.5);
	const discountCalc = price * DISCOUNT + price;

	return (
		<Link href={`/products/${id}`} key={id} passHref>
			<div className=' flex flex-col m-4 bg-white z-30 p-8 cursor-pointer'>
				<div className='border-1 mx-auto p-4 hover:border-shop_ave-yellow rounded relative'>
					<Image
						src={image}
						height={400}
						width={400}
						alt={title}
						objectFit='contain'
					/>

					{isOnSale && (
						<p className='absolute top-4 right-4 text-xs text-shop_ave font-bold bg-shop_ave-yellow p-2'>
							-30%
						</p>
					)}
				</div>

				<h4 className='mb-2 mt-3 font-semibold text-base text-shop_ave text-center'>
					{title}
				</h4>
				<div className='flex mb-2 justify-center'>
					<NumberFormat
						value={price}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'$'}
						className='font-semibold mr-2'
					/>

					{isOnSale ? (
						<NumberFormat
							value={discountCalc.toFixed(2)}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							className='line-through text-gray-400'
						/>
					) : (
						''
					)}
				</div>

				<div className='flex justify-center'>
					{Array(rate)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className='h-5 text-shop_ave-yellow' />
						))}
					{Array(ratingFiller)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className='h-5 text-gray-300' />
						))}
				</div>
			</div>
		</Link>
	);
}

export default Product;
