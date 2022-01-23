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
			<div className='flex flex-col z-30 p-4 my-2 mb:my-5 cursor-pointer'>
				<div className='border-1 mx-auto hover:border-shop_ave-yellow rounded relative'>
					<Image
						src={image}
						height={400}
						width={400}
						alt={title}
						objectFit='contain'
					/>

					{isOnSale && (
						<p className='absolute top-2 right-2 text-xs text-white font-sans tracking-widest font-semibold bg-shop_ave p-2'>
							-30%
						</p>
					)}
				</div>

				<div>
					<h4 className=' mt-3 font-semibold font-sans tracking-wider text-base text-shop_ave'>
						{title}
					</h4>
					<p className='font-sans text-gray-500 tracking-wider'>{category}</p>

					<div className='flex'>
						{Array(rate)
							.fill()
							.map((_, i) => (
								<StarIcon key={i} className='h-4 text-shop_ave-yellow' />
							))}
						{Array(ratingFiller)
							.fill()
							.map((_, i) => (
								<StarIcon key={i} className='h-4 text-gray-300' />
							))}
					</div>

					<div className='flex mt-4 mb-2 font-sans text-lg tracking-wider'>
						<NumberFormat
							value={price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							className='font-semibold text-shop_ave mr-2'
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
				</div>
			</div>
		</Link>
	);
}

export default Product;
