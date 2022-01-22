import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	UserIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
	const { data: session } = useSession();

	return (
		<header>
			<Navbar collapseOnSelect expand='lg' className='bg-gray-900 p-3'>
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
						<Nav className='ml-auto items-center'>
							<Nav.Link href='/'>
								<p className='link md:hidden'>Search</p>
								<SearchIcon className='hidden md:block nav-icon' />
							</Nav.Link>
							<Nav.Link href='/'>
								<p className='link md:hidden'>Shopping Cart</p>
								<div className='relative flex items-center'>
									<span className='absolute -top-2 right-1 h-4 w-4 bg-yellow-400 text-center  rounded-full text-black font-bold text-xs'>
										0
									</span>
									<ShoppingBagIcon className='hidden md:block nav-icon' />
								</div>
							</Nav.Link>
							<Nav.Link onClick={!session ? signIn : signOut}>
								<p className='link md:hidden'>
									{session ? `Logged in as ${session.user.name}` : 'Sign In'}
								</p>
								<div className='hidden md:block'>
									{session ? (
										<img
											src={session.user.image}
											width={30}
											height={30}
											className='rounded-2xl'
										/>
									) : (
										<UserIcon className='nav-icon' />
									)}
								</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
