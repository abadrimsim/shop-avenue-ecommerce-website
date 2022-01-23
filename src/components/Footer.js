function Footer() {
	return (
		<div className='mt-28'>
			<hr />
			<div className='flex flex-col md:flex-row py-20 max-w-screen-2xl mx-auto font-sans tracking-wider font-semibold text-shop_ave'>
				<div className='flex-grow'>
					<h3 className='text-2xl mb-5'>Shop Avenue</h3>
				</div>
				<div className='flex-grow'>
					<h4 className='text-lg mb-4'>Menu</h4>
					<ul className='text-sm leading-6'>
						<li>Home</li>
						<li>New Arrivals</li>
						<li>Categories</li>
						<li>Sales</li>
						<li>Brands</li>
						<li>Sport</li>
						<li>Blog</li>
						<li>About Us</li>
					</ul>
				</div>
				<div className='flex-grow'>
					<h4 className='text-lg mb-4'>Information</h4>
					<ul className='text-sm leading-6'>
						<li>Terms & Conditions</li>
						<li>FAQ</li>
						<li>Authenticity</li>
						<li>Delivery & Returns</li>
						<li>Gift Cards</li>
					</ul>
				</div>
				<div className='flex-grow'>
					<h4 className='text-lg mb-4'>Work</h4>
					<span className='flex text-sm leading-6'>
						<p className='text-gray-400 mr-2'>Monday - Friday:</p>
						<p>9AM - 7PM</p>
					</span>
					<span className='flex text-sm leading-6'>
						<p className='text-gray-400 mr-2'>Saturday: </p>
						<p>9AM - 5PM</p>
					</span>
					<span className='flex text-sm leading-6'>
						<p className='text-gray-400 mr-2'>Sunday: </p>
						<p>Closed</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
