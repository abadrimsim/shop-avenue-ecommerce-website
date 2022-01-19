import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	UserIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<header>
			<nav className='flex bg-shop_ave justify-around flex-grow py-4'>
				<div className='flex'>
					<Image
						src='https://i.ibb.co/6R1zGbj/shop-logo-light.png'
						// src='https://i.ibb.co/1rD37Z8/shop-logo.png'
						height={10}
						width={20}
						alt='Shop Avenue Logo'
					/>
					<p className='link mx-2'>Shop Avenue</p>
				</div>
				<ul className='flex items-center text-base'>
					<li className='link'>Shop</li>
					<li className='link'>About</li>
					<li className='link'>Contact</li>
				</ul>
				<div className='flex'>
					<SearchIcon className='nav-icon' />
					<ShoppingBagIcon className='nav-icon' />
					<UserIcon className='nav-icon' />
				</div>
			</nav>
		</header>
	);
}

export default Header;
