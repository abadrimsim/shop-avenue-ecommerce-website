import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	UserIcon,
	MenuIcon,
	ChevronDownIcon,
} from '@heroicons/react/solid';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/cartSlice';

function Header() {
	const { data: session } = useSession();
	const router = useRouter();
	const items = useSelector(selectItems);

	return (
		<header className='z-10 mb-2'>
			<Navbar collapseOnSelect expand='lg' className='bg-white border-b py-1'>
				<Container className='max-w-screen-2xl px-0'>
					<Navbar.Brand
						href='#home'
						className='flex items-center content-center'
						onClick={() => router.push('/')}
					>
						<p className='text-gray-800 font-heading uppercase font-bold ml-3 md:ml-0'>
							Shop Avenue
						</p>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						className='mr-3 md:mr-0'
					>
						<MenuIcon
							className='text-base text-gray-300'
							width={25}
							height={25}
						/>
					</Navbar.Toggle>
					<Navbar.Collapse id='responsive-navbar-nav ' className='justify-end'>
						<Nav className='mx-3'>
							<Form className='d-flex'>
								<FormControl
									type='search'
									placeholder='Search'
									className='items-center w-full rounded-3xl focus:ring-0 my-1 font-sans'
									aria-label='Search'
								/>
								<SearchIcon className='h-6 mx-1 mt-2.5 cursor-pointer text-shop_ave' />
							</Form>
							<Nav.Link onClick={() => router.push('/cart')}>
								<p className='font-sans text-gray-500 font-semibold tracking-wide md:hidden text-left hover:text-shop_ave'>
									Shopping Cart
								</p>
								<div className='relative hidden md:flex items-center font-sans text-gray-500 font-semibold tracking-wide border-l border-l-gray-400 hover:text-shop_ave'>
									<span className='absolute -top-1 left-3 h-4 w-4 bg-yellow-400 text-center  rounded-full text-black font-bold text-xs'>
										{items.length}
									</span>
									<ShoppingBagIcon className='hidden md:block nav-icon' />
									<p>Shopping Cart</p>
								</div>
							</Nav.Link>
							<Nav.Link onClick={!session ? signIn : signOut}>
								<p className='font-sans text-gray-500 font-semibold tracking-wide md:hidden text-left hover:text-shop_ave'>
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
										<span className='flex font-sans text-gray-500 font-semibold tracking-wide border-l border-l-gray-400 hover:text-shop_ave'>
											<UserIcon className='nav-icon' />
											<p>Sign In</p>
										</span>
									)}
								</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='hidden md:block h-16 shadow-md py-3 cursor-default'>
				<ul className='flex items-center gap-5 font-sans tracking-wide font-semibold max-w-screen-2xl mx-auto'>
					<li className='flex items-center'>
						New Arrivals
						<ChevronDownIcon className='h-4 ml-2' />
					</li>
					<li className='flex items-center'>
						Categories
						<ChevronDownIcon className='h-4 ml-2' />
					</li>
					<li className='flex items-center'>
						Sales
						<ChevronDownIcon className='h-4 ml-2' />
					</li>
					<li className='flex items-center'>
						Brands
						<ChevronDownIcon className='h-4 ml-2' />
					</li>
					<li>Blog</li>
					<li>About Us</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
