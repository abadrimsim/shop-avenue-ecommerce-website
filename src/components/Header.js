import Image from 'next/image';
import {
	SearchIcon,
	ShoppingBagIcon,
	CollectionIcon,
	UserCircleIcon,
	MenuIcon,
} from '@heroicons/react/outline';
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
		<header className='z-40 relative'>
			<div className='fixed w-full'>
				<div className='bg-shop_ave-black text-center py-2'>
					<h3 className='uppercase font-sans text-sm text-gray-400'>
						30% off on your first purchase
					</h3>
				</div>
				<Navbar
					collapseOnSelect
					expand='lg'
					className='bg-white py-0 duration-300'
				>
					<Container className='max-w-full px-2 md:px-4 py-2'>
						<Navbar.Brand
							href='#home'
							className='flex items-center ml-2 md:ml-16'
							onClick={() => router.push('/')}
						>
							<Image
								src='/shopave-logo.svg'
								width={20}
								height={20}
								alt='Shop Avenue Logo'
							/>
							<h2 className='text-gray-800 font-heading uppercase font-bold ml-2 text-xl'>
								Shop Avenue
							</h2>
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

						<Navbar.Collapse
							id='responsive-navbar-nav '
							className='font-sans uppercase text-xs mx-2 md:mx-5'
						>
							<Nav className='me-auto'>
								<Nav.Link>
									<p className='mr-3'>What&#39;s New</p>
								</Nav.Link>
								<Nav.Link>
									<p className='mr-3'>Apparel</p>
								</Nav.Link>
								<Nav.Link>
									<p className='mr-3'>Accessories</p>
								</Nav.Link>
								<Nav.Link>
									<p className='mr-3'>Electronics</p>
								</Nav.Link>
							</Nav>

							<Nav className='mr-14'>
								<Form className='d-flex'>
									<FormControl
										ref={searchInputRef}
										type='search'
										placeholder='Search'
										onKeyPress={handleEnterKeyPress}
										className='hidden lg:block items-center w-full rounded-3xl border-gray-500 focus:ring-0 my-1 px-3 h-9 font-sans text-sm mr-1'
										aria-label='Search'
									/>
									<SearchIcon
										onClick={handleSearch}
										className='hidden lg:block h-6 mx-1 mt-2.5 cursor-pointer text-gray-500'
									/>
								</Form>

								<Nav.Link onClick={() => router.push('/cart')} className='py-1'>
									<p className='font-sans tracking-wide md:hidden text-left hover:text-shop_ave'>
										Shopping Cart
									</p>
									<div className='relative mt-2 hidden md:flex items-center font-sans text-gray-400 font-semibold tracking-wide hover:text-shop_ave'>
										<span className='absolute -bottom-2 left-4 h-4 w-4 bg-shop_ave-black text-center rounded-full text-white text-xs'>
											{items.length}
										</span>
										<ShoppingBagIcon className='nav-icon text-gray-500' />
									</div>
								</Nav.Link>

								{session && (
									<Nav.Link onClick={() => router.push('/purchases')}>
										<p className='font-sans tracking-wide md:hidden text-left hover:text-shop_ave'>
											My Purchases
										</p>
										<div className='relative mt-1 hidden md:flex items-center font-sans text-gray-400 font-semibold tracking-wide hover:text-shop_ave'>
											<CollectionIcon className='hidden md:block nav-icon text-gray-500' />
										</div>
									</Nav.Link>
								)}

								<Nav.Link
									onClick={!session ? signIn : signOut}
									className='py-1'
								>
									<p className='font-sans tracking-wide md:hidden text-left hover:text-shop_ave'>
										{session ? `Logged in as ${session.user.name}` : 'Sign In'}
									</p>
									<div className='hidden mt-1 md:block'>
										{session ? (
											<Image
												src={session.user.image}
												width={30}
												height={30}
												className='rounded-2xl'
												alt={session.user.name}
											/>
										) : (
											<UserCircleIcon className='nav-icon text-gray-500 mt-2' />
										)}
									</div>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</header>
	);
}

export default Header;
