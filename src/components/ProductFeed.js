import Product from './Product';
import Image from 'next/image';

function ProductFeed({ products }) {
	return (
		<>
			<h2 className='font-sans font-semibold text-2xl text-shop_ave mt-20 tracking-wider'>
				Featured Products
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

				<img
					className='md:col-span-full'
					src='/advertisement-2.jpg'
					alt='Advertisement Banner'
				/>

				<h2 className='font-sans font-semibold text-2xl text-shop_ave mt-20 tracking-wider md:col-span-full'>
					More Products
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

				<img
					className='md:col-span-full'
					src='/advertisement-3.jpg'
					alt='Advertisement Banner'
				/>

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

				{products
					.slice(8, 12)
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
