import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { StarIcon } from '@heroicons/react/solid';
import Zoom from 'react-img-zoom';
import Product from '../../components/Product';
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
			<main className='mx-auto px-12'>
				<div className='flex flex-col md:flex-row gap-10 mt-40 mb-32 font-sans tracking-wider leading-7 pt-4 px-36'>
					<div className='flex justify-center border-1 mx-auto duration-300 rounded cursor-crosshair w-full md:w-auto '>
						<div className='md:hidden'>
							<Image
								src={image}
								width={500}
								height={500}
								alt={title}
								objectFit='contain'
							/>
						</div>
						<div className='hidden md:block'>
							<Zoom
								img={image}
								key={id}
								zoomScale={3}
								width={600}
								height={600}
								transitionTime={0.5}
							/>
						</div>
					</div>
					<div className='w-full md:w-1/3'>
						<h3 className='text-xl md:text-2xl font-heading mb-1'>{title}</h3>
						<p className='text-gray-500 uppercase mb-1 text-xs'>{category}</p>

						<div className='flex'>
							{Array(rate)
								.fill()
								.map((_, i) => (
									<StarIcon key={i} className='h-4 text-shop_ave-tan' />
								))}
							{Array(ratingFiller)
								.fill()
								.map((_, i) => (
									<StarIcon key={i} className='h-4 text-gray-300' />
								))}
						</div>

						<div className='justify-start font-semibold mt-3'>
							<NumberFormat
								value={price}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'$'}
							/>
						</div>

						<p className='text-xs md:text-sm border-y py-4 my-5'>
							{description}
						</p>

						<div className='flex flex-row'>
							<button
								onClick={addItemToCart}
								className='button text-xs ml-0 mr-2'
							>
								Add to Cart
							</button>
							<Link href={'/cart'} passHref>
								<button onClick={addItemToCart} className='button text-xs'>
									Buy Now
								</button>
							</Link>
						</div>
					</div>
				</div>

				<hr className='text-gray-400' />

				<h2 className='font-heading text-2xl text-shop_ave my-20 tracking-wide text-center'>
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
						src='/advertisement-2.jpg'
						alt='Advertisement Banner'
					/>
				</div>
			</main>
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
