import Image from 'next/image';
import Header from '../../components/Header';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { StarIcon } from '@heroicons/react/solid';
import Zoom from 'react-img-zoom';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

const MAX_RATING = 5;

function ProductItem({ product }) {
	const { id, title, price, description, category, image, rating } = product;
	const dispatch = useDispatch();

	const rate = Math.round(rating.rate);
	const ratingFiller = MAX_RATING - rate;

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

		// Sending the produtc as an action to the REDUX store
		dispatch(addToCart(product));
	};

	return (
		<div>
			<Header />

			<main className='flex max-w-screen-2xl mx-auto mt-32 mb-72 gap-10 font-sans tracking-wider leading-7'>
				<div className='border-1 hover:border-shop_ave-yellow rounded relative cursor-crosshair'>
					<Zoom img={image} zoomScale={2} width={600} height={600} />
				</div>
				<div className=''>
					<p className='text-gray-500 mb-3'>{category}</p>
					<h3 className='text-3xl font-semibold mb-2'>{title}</h3>
					<span className='flex gap-2 font-semibold'>
						<p className='text-gray-400'>Availability:</p>
						<p>In Stock</p>
					</span>
					<div className='flex justify-start mb-10'>
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
					<p className='mb-3'>{description}</p>
					<hr className='text-gray-400' />
					<div className='my-5 justify-start font-semibold'>
						<p className='text-gray-400'>Price:</p>
						<NumberFormat
							value={price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							className='text-2xl'
						/>
					</div>

					<hr className='mb-5 text-gray-400' />
					<button onClick={addItemToCart} className='button mr-5'>
						Add to Cart
					</button>
					<button className='button'>Buy Now</button>
				</div>
			</main>

			<Footer />
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
