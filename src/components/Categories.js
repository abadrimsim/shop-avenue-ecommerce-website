import Image from 'next/image';

function Categories() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16'>
			<div className='relative'>
				<Image
					src='https://i.ibb.co/ZRQLz99/category-1.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 1'
					className='transition duration-300 cursor-pointer hover:brightness-75'
				/>
				<h3 className='absolute bottom-7 left-4 uppercase font-sans text-white'>
					What&#39;s New
				</h3>
			</div>
			<div className='relative'>
				<Image
					src='https://i.ibb.co/hLB7Ctk/category-2.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 2'
					className='transition duration-300 cursor-pointer hover:brightness-75'
				/>
				<h3 className='absolute bottom-7 left-4 uppercase font-sans text-white'>
					Apparel
				</h3>
			</div>
			<div className='relative'>
				<Image
					src='https://i.ibb.co/kcvzwNP/category-3.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 3'
					className='transition duration-300 cursor-pointer hover:brightness-75'
				/>
				<h3 className='absolute bottom-7 left-4 uppercase font-sans text-white'>
					Accessories
				</h3>
			</div>
			<div className='relative'>
				<Image
					src='https://i.ibb.co/Xx6Q2Fm/category-4.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 4'
					className='transition duration-300 cursor-pointer hover:brightness-75'
				/>
				<h3 className='absolute bottom-7 left-4 uppercase font-sans text-white'>
					Electronics
				</h3>
			</div>
		</div>
	);
}

export default Categories;
