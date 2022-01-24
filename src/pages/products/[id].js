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
import Link from 'next/link';

const MAX_RATING = 5;

function ProductItem({ singleProduct, allProducts }) {
	const { id, title, price, description, category, image, rating } =
		singleProduct;
	const dispatch = useDispatch();

	console.log(singleProduct);

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
			<main className='max-w-screen-2xl mx-auto'>
				<div className='flex flex-col md:flex-row my-32 gap-10 font-sans tracking-wider leading-7 p-4'>
					<div className='border-1 mx-auto hover:border-shop_ave-yellow rounded cursor-crosshair w-2/4 relative'>
						<Image src={image} layout='fill' alt={title} objectFit='contain' />
					</div>
					<div className='w-2/4'>
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
						<Link href={'/cart'} passHref>
							<button onClick={addItemToCart} className='button'>
								Buy Now
							</button>
						</Link>
					</div>
				</div>

				<hr className='text-gray-400' />

				<h2 className='font-sans font-semibold text-2xl text-shop_ave mt-20 tracking-wider'>
					More to Consider
				</h2>
				<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{allProducts
						.slice(0, 8)
						.map(
							({ id, title, price, description, category, image, rating }) => (
								<Product
									key={id}
									id={id}
									title={title}
									price={price}
									description={description}
									category={category}
									image={image}
									rating={rating}
								/>
							)
						)}

					<img
						className='md:col-span-full'
						src='/advertisement-1.jpg'
						alt='Advertisement Banner'
					/>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default ProductItem;

export async function getServerSideProps(context) {
	const { id } = context.params;

	const [singleProductRes, allProductsRes] = await Promise.all([
		fetch(`https://fakestoreapi.com/products/${id}`),
		fetch(`https://fakestoreapi.com/products/`),
	]);
	const [singleProduct, allProducts] = await Promise.all([
		singleProductRes.json(),
		allProductsRes.json(),
	]);

	// const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	// const product = await res.json();

	// const allRes = await fetch(`https://fakestoreapi.com/products/`);
	// const allProducts = await allRes.json();

	return {
		props: { singleProduct, allProducts },
	};
}
