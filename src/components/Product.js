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
				<div className='mx-auto duration-200 rounded relative hover:opacity-90 hover:scale-105'>
					<Image
						src={image}
						height={400}
						width={400}
						alt={title}
						objectFit='contain'
					/>

					{isOnSale && (
						<p className='absolute top-1 right-1 text-xs text-white font-sans tracking-wider bg-shop_ave p-2'>
							-30%
						</p>
					)}
				</div>

				<div>
					<h4 className=' mt-5 font-sans uppercase tracking-wider text-sm text-shop_ave-black'>
						{title}
					</h4>
					<p className='font-sans text-shop_ave-tan uppercase text-xs tracking-wider'>
						{category}
					</p>

					<div className='flex mt-3 mb-2 font-sans tracking-wider text-sm'>
						<NumberFormat
							value={price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							className='text-shop_ave mr-2'
						/>

						{isOnSale ? (
							<NumberFormat
								value={discountCalc.toFixed(2)}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'$'}
								className='line-through text-gray-400 '
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
