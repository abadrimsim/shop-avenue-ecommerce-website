import Image from 'next/image';
import Header from '../../components/Header';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { StarIcon } from '@heroicons/react/solid';
import Zoom from 'react-img-zoom';
import Product from '../../components/Product';

const MAX_RATING = 5;

function ProductItem({ product }) {
	const { id, title, price, description, category, image, rating } = product;

	const rate = Math.round(rating.rate);
	const ratingFiller = MAX_RATING - rate;

	return (
		<div>
			<Header />

			<main className='flex max-w-screen-2xl mx-auto my-32 gap-10 px-36'>
				<div className='border-1 hover:border-shop_ave-yellow rounded relative cursor-crosshair'>
					<Zoom img={image} zoomScale={2} width={600} height={600} />
				</div>
				<div className=''>
					<p className='text-gray-500 mb-3'>{category}</p>
					<h3 className='font-heading text-3xl'>{title}</h3>
					<div className='flex justify-start mt-2 mb-3'>
						{Array(rate)
							.fill()
							.map((_, i) => (
								<StarIcon key={i} className='h-6 text-shop_ave-yellow' />
							))}
						{Array(ratingFiller)
							.fill()
							.map((_, i) => (
								<StarIcon key={i} className='h-6 text-gray-300' />
							))}
					</div>
					<div className='flex mb-5 justify-start text-2xl'>
						<NumberFormat
							value={price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							className='font-semibold'
						/>
					</div>

					<p>{description}</p>
					<hr className='mt-5 mb-4' />
					<button className='button-white'>Add to Cart</button>
				</div>
			</main>
		</div>
	);
}

export default ProductItem;

export async function getServerSideProps(context) {
	const { id } = context.params;
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await res.json();

	return {
		props: { product },
	};
}
