import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	UserIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
	return (
		<header className='p-0'>
			<Navbar collapseOnSelect expand='lg' className='bg-shop_ave-dark pb-3'>
				<Container className='max-w-screen-2xl px-0'>
					<Navbar.Brand
						href='#home'
						className='flex items-center content-center mr-14'
					>
						<Image
							src={'/shop-logo-light.ico'}
							width={20}
							height={20}
							alt='Shop Avenue Logo'
						/>

						<p className='link mx-2'>Shop Avenue</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav'>
						<MenuIcon
							className='text-base text-gray-300'
							width={25}
							height={25}
						/>
					</Navbar.Toggle>
					<Navbar.Collapse
						id='responsive-navbar-nav '
						className='justify-content-end'
					>
						<Nav>
							<Nav.Link href='/'>
								<p className='link'>Shop</p>
							</Nav.Link>
							<Nav.Link href='/'>
								<p className='link'>About</p>
							</Nav.Link>
							<Nav.Link href='/'>
								<p className='link'>Contact</p>
							</Nav.Link>
						</Nav>
						<Nav className='ml-auto'>
							<Nav.Link href='/'>
								<p className='link md:hidden'>Search</p>
								<SearchIcon className='hidden md:block nav-icon' />
							</Nav.Link>
							<Nav.Link href='/'>
								<p className='link md:hidden'>Shopping Cart</p>
								<ShoppingBagIcon className='hidden md:block nav-icon' />
							</Nav.Link>
							<Nav.Link href='/'>
								<p className='link md:hidden'>Sign In</p>
								<UserIcon className='hidden md:block nav-icon' />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
