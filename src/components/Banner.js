import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/outline';

function Banner() {
	return (
		<div className='relative'>
			<div className='absolute w-full' />
			<Carousel
				autoplay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={3000}
			>
				<div className='flex bg-shop_ave gap-12'>
					<div className='flex flex-col  justify-center flex-1 w-20 px-24 text-left items-start'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum? Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Accusantium, ab!
						</p>

						<button className='button flex'>
							View Products <ChevronDownIcon className='h-4 pl-2 pt-1' />
						</button>
					</div>

					<div className='flex-1 h-96 relative'>
						<Image
							loading='lazy'
							src='https://i.ibb.co/wW80ZCQ/banner-img-3.png'
							alt='Female Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>

				<div className='flex bg-shop_ave'>
					<div className='flex-1 w-auto h-96 relative'>
						<Image
							loading='lazy'
							src='https://i.ibb.co/MCqnn6G/banner-img-1.png'
							alt='Unisex Clothing'
							layout='fill'
							objectFit='cover'
						/>
					</div>

					<div className='flex flex-col  justify-center flex-1 w-20 px-24 text-left items-start'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nisi nemo dicta iure expedita quia aperiam.
						</p>

						<button className='button flex'>
							View Products <ChevronDownIcon className='h-4 pl-2 pt-1' />
						</button>
					</div>
				</div>

				<div className='flex bg-shop_ave gap-12'>
					<div className='flex flex-col  justify-center flex-1 w-20 px-24 text-left items-start'>
						<h1 className='uppercase text-2xl text-gray-200 font-heading'>
							Great shopping deals here at Shop Avenue
						</h1>
						<p className='text-gray-400'>
							Get exclusive discounts at Shop Avenue. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Adipisci nisi iste repellat
							officia blanditiis eum?{' '}
						</p>

						<button className='button flex'>
							View Products <ChevronDownIcon className='h-4 pl-2 pt-1' />
						</button>
					</div>

					<div className='flex-1 w-auto h-96 relative'>
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
