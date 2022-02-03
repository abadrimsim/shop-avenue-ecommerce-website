import Image from 'next/image';

function Categories() {
	return (
		<div className='grid grid-cols-4 mt-16'>
			<div className='transition duration-300 cursor-pointer hover:brightness-75'>
				<Image
					src='https://i.ibb.co/ZRQLz99/category-1.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 1'
				/>
			</div>
			<div className='transition duration-300 cursor-pointer hover:brightness-75'>
				<Image
					src='https://i.ibb.co/hLB7Ctk/category-2.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 1'
				/>
			</div>
			<div className='transition duration-300 cursor-pointer hover:brightness-75'>
				<Image
					src='https://i.ibb.co/kcvzwNP/category-3.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 1'
				/>
			</div>
			<div className='transition duration-300 cursor-pointer hover:brightness-75'>
				<Image
					src='https://i.ibb.co/Xx6Q2Fm/category-4.jpg'
					width={500}
					height={700}
					objectFit='cover'
					alt='Category 1'
				/>
			</div>
		</div>
	);
}

export default Categories;
