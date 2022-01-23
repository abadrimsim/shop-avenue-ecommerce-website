import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
	return (
		<div>
			<Carousel
				autoPlay
				infiniteLoop
				autoFocus={true}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div className='flex bg-white h-128 gap-12'>
					<div className='flex flex-col justify-center flex-1 text-left'>
						<h1 className='text-3xl text-shop_ave font-sans tracking-wide mb-3 md:text-5xl'>
							Feel good deals for all
						</h1>
						<h1 className='text-3xl md:text-5xl text-shop_ave font-sans uppercase font-bold tracking-wide mb-5'>
							Up to 50% off
						</h1>
						<p className='text-gray-500 font-sans tracking-wider line-clamp-2 '>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum!
						</p>

						<button className='button'>Shop Now</button>
					</div>

					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='/banner-1.png'
							alt='Female Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>

				<div className='flex bg-white h-128 gap-12'>
					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='/banner-2.png'
							alt='Female Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>

					<div className='flex flex-col justify-center flex-1 text-left'>
						<h1 className='text-3xl md:text-5xl text-shop_ave font-sans tracking-wide mb-4'>
							Feel good deals for all
						</h1>
						<h1 className='text-3xl md:text-5xl text-shop_ave font-sans uppercase font-bold tracking-wide mb-5'>
							Up to 50% off
						</h1>
						<p className='text-gray-500 font-sans tracking-wider line-clamp-2 '>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum!
						</p>

						<button className='button'>Shop Now</button>
					</div>
				</div>

				<div className='flex bg-white h-128 gap-12'>
					<div className='flex flex-col justify-center flex-1 text-left'>
						<h1 className='text-3xl md:text-5xl text-shop_ave font-sans tracking-wide mb-4'>
							Feel good deals for all
						</h1>
						<h1 className='text-3xl md:text-5xl text-shop_ave font-sans uppercase font-bold tracking-wide mb-5'>
							Up to 50% off
						</h1>
						<p className='text-gray-500 font-sans tracking-wider line-clamp-2 '>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum!
						</p>

						<button className='button'>Shop Now</button>
					</div>

					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='/banner-3.png'
							alt='Female Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;
