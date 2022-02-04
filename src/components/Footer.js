import Image from 'next/image';

function Footer() {
	return (
		<div className='static bottom-0 w-full mt-28 bg-shop_ave-black'>
			<div className='flex flex-col md:flex-row py-14 px-4 max-w-screen-2xl mx-auto font-sans tracking-wider  text-white uppercase'>
				<div className='flex-grow'>
					<div className='flex items-center mt-5 mb-4 '>
						<h3 className='text-xl uppercase ml-2 font-bold font-heading'>
							Shop Avenue
						</h3>
					</div>
				</div>
				<div className='flex-grow'>
					<h4 className='text-base mt-5 mb-4'>Info</h4>
					<ul className='text-xs leading-6'>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Work With Us</li>
						<li>TS & CS</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className='flex-grow'>
					<h4 className='text-base mt-5 mb-4'>Customer Care</h4>
					<ul className='text-xs leading-6'>
						<li>Shipping</li>
						<li>Returns</li>
						<li>Payment Methods</li>
						<li>Gift Cards</li>
						<li>Outlet</li>
					</ul>
				</div>
				<div className='flex-grow'>
					<h4 className='text-base mt-5 mb-4'>Work</h4>
					<span className='flex text-xs leading-6'>
						<p className='text-gray-400 mr-2'>Monday - Friday:</p>
						<p>9AM - 7PM</p>
					</span>
					<span className='flex text-xs leading-6'>
						<p className='text-gray-400 mr-2'>Saturday: </p>
						<p>9AM - 5PM</p>
					</span>
					<span className='flex text-xs leading-6'>
						<p className='text-gray-400 mr-2'>Sunday: </p>
						<p>Closed</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
