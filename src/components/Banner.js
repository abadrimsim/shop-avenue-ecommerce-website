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
				<div className='flex bg-gray-800 gap-10 h-96'>
					<div className='flex flex-col items-center justify-center flex-1 w-20 px-14 text-left md:px-24 md:items-start md:ml-20'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400 line-clamp-2'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum? Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Accusantium, ab!
						</p>

						<button className='button'>Shop Now</button>
					</div>

					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='https://i.ibb.co/wW80ZCQ/banner-img-3.png'
							alt='Female Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>

				<div className='flex bg-gray-800 gap-10 h-96'>
					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='https://i.ibb.co/MCqnn6G/banner-img-1.png'
							alt='Unisex Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>

					<div className='flex flex-col items-center justify-center flex-1 w-20 px-14 text-left md:px-24 md:items-start md:mr-20'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400 line-clamp-2'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nisi nemo dicta iure expedita quia aperiam.
						</p>

						<button className='button'>Get 30% Off</button>
					</div>
				</div>

				<div className='flex bg-gray-800 gap-10 h-96'>
					<div className='flex flex-col items-center justify-center flex-1 w-20 px-14 text-left md:px-24 md:items-start md:ml-20'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400 line-clamp-2'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum?
						</p>

						<button className='button'>View Products</button>
					</div>

					<div className='hidden md:block flex-1 h-128 relative'>
						<Image
							loading='lazy'
							src='https://i.ibb.co/kmFj6kN/banner-img-2.png'
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
