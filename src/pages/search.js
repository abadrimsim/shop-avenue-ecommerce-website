import Fuse from 'fuse.js';
import { getSession } from 'next-auth/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';
import ProductFeed from '../components/ProductFeed';

function Search({ data, keyword }) {
	// Search if keyword exists from these object keys
	const options = {
		includeScore: true,
		keys: ['category', 'title', 'description'],
	};

	// Search for items
	const fuse = new Fuse(data, options);
	const result = fuse.search(keyword);
	// console.log(result);

	return (
		<div>
			<Header />

			<main className='max-w-screen-2xl mx-auto '>
				<h2 className='font-heading text-2xl text-shop_ave mt-20 tracking-wide px-2 pb-14'>
					{result.length} results for &quot;{keyword}&quot;
				</h2>

				{/* Render products that matches the keyword */}
				<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{result.map(({ item }) => (
						<Product
							key={item.id}
							id={item.id}
							title={item.title}
							price={item.price}
							description={item.description}
							category={item.category}
							image={item.image}
							rating={item.rating}
						/>
					))}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const res = await fetch(`https://fakestoreapi.com/products`);
	const data = await res.json();

	const keyword = context.query.q;

	return {
		props: {
			data,
			session,
			keyword,
		},
	};
}
