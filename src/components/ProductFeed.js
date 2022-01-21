import Product from './Product';
import Image from 'next/image';

function ProductFeed({ products }) {
	return (
		<>
			<h2 className='font-heading font-bold text-xl uppercase text-shop_ave mt-20 text-center'>
				Best Seller
			</h2>
			<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{products
					.slice(0, 4)
					.map(({ id, title, price, description, category, image, rating }) => (
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
					))}

				<div className='flex md:col-span-full my-28'>
					<div className='hidden md:block flex-1 h-128 relative '>
						<Image
							loading='lazy'
							src='https://i.ibb.co/tYqM9Tj/sale-ad-female.png'
							alt='Sale Advertisement'
							layout='fill'
							objectFit='cover'
							className='rounded-md'
						/>
					</div>

					<div className='flex flex-col justify-center flex-1 px-10 md:px-24 text-left items-start'>
						<h1 className='uppercase text-2xl font-bold text-shop_ave font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum?
						</p>

						<button className='button hover:bg-white hover:text-shop_ave'>
							Get 30% Off
						</button>
					</div>
				</div>

				<h2 className='font-heading font-bold text-xl uppercase text-shop_ave mt-20 text-center md:col-span-full'>
					New Arrival
				</h2>

				{products
					.slice(4, products.length)
					.map(({ id, title, price, description, category, image, rating }) => (
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
					))}
			</div>
		</>
	);
}

export default ProductFeed;
