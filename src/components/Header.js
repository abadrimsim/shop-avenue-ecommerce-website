import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UserIcon,
	MenuIcon,
	ChevronDownIcon,
} from '@heroicons/react/solid';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/cartSlice';
import { useRef } from 'react';

function Header() {
	const { data: session } = useSession();
	const router = useRouter();
	const items = useSelector(selectItems);

	const searchInputRef = useRef(null);

	const handleSearch = (e) => {
		e.preventDefault();

		const searchKeyword = searchInputRef.current.value;
		if (!searchKeyword) return;

		router.push(`/search?q=${searchKeyword}`);
	};

	const handleEnterKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch(e);
		}
	};

	return (
		<header className='z-10 mb-2'>
			<Navbar
				collapseOnSelect
				expand='lg'
				className='bg-white border-b py-0 duration-300'
			>
				<Container className='max-w-screen-2xl px-0'>
					<Navbar.Brand
						href='#home'
						className='flex items-center content-center ml-3 md:ml-0'
						onClick={() => router.push('/')}
					>
						<Image
							src='/shopave-logo.svg'
							width={20}
							height={20}
							alt='Shop Avenue Logo'
						/>
						<p className='text-gray-800 font-sans uppercase font-bold ml-2'>
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
							<Form className='d-flex mt-2'>
								<FormControl
									ref={searchInputRef}
									type='search'
									placeholder='Search'
									onKeyPress={handleEnterKeyPress}
									className='items-center w-full rounded-3xl border-shop_ave focus:ring-0 my-1 px-3 h-9 font-sans tracking-wider mr-1'
									aria-label='Search'
								/>
								<SearchIcon
									onClick={handleSearch}
									className='h-6 mx-1 mt-2.5 cursor-pointer text-shop_ave'
								/>
							</Form>

							<Nav.Link onClick={() => router.push('/cart')}>
								<p className='font-sans text-gray-400 font-semibold tracking-wide md:hidden text-left hover:text-shop_ave'>
									Shopping Cart
								</p>
								<div className='relative mt-2 hidden md:flex items-center font-sans text-gray-400 font-semibold tracking-wide border-l border-l-gray-400 hover:text-shop_ave'>
									<span className='absolute -top-1 left-3 h-4 w-4 bg-yellow-400 text-center  rounded-full text-black font-bold text-xs'>
										{items.length}
									</span>
									<ShoppingCartIcon className='hidden md:block nav-icon' />
									<p>Shopping Cart</p>
								</div>
							</Nav.Link>

							{session && (
								<Nav.Link onClick={() => router.push('/purchases')}>
									<p className='font-sans text-gray-400 font-semibold tracking-wide md:hidden text-left hover:text-shop_ave'>
										My Purchases
									</p>
									<div className='relative mt-2 hidden md:flex items-center font-sans text-gray-400 font-semibold tracking-wide border-l border-l-gray-400 hover:text-shop_ave'>
										<ShoppingBagIcon className='hidden md:block nav-icon' />
										<p>My Purchases</p>
									</div>
								</Nav.Link>
							)}

							<Nav.Link onClick={!session ? signIn : signOut}>
								<p className='font-sans text-gray-400 font-semibold tracking-wide md:hidden text-left hover:text-shop_ave'>
									{session ? `Logged in as ${session.user.name}` : 'Sign In'}
								</p>
								<div className='hidden mt-2 md:block'>
									{session ? (
										<Image
											src={session.user.image}
											width={30}
											height={30}
											className='rounded-2xl'
											alt={session.user.name}
										/>
									) : (
										<span className='flex font-sans text-gray-400 font-semibold tracking-wide border-l border-l-gray-400 hover:text-shop_ave'>
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
			<div className='hidden md:block h-20 shadow-md py-4 cursor-default'>
				<ul className='flex items-center gap-5 font-sans tracking-wider font-semibold max-w-screen-2xl mx-auto text-shop_ave'>
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
