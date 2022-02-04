import moment from 'moment';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { TruckIcon } from '@heroicons/react/outline';

function PurchaseItem({
	id,
	amount,
	amountShipping,
	items,
	timestamp,
	images,
}) {
	const str = id.substring(10, 20);

	return (
		<div className='border my-10'>
			<div className='flex items-center space-x-10 px-3 py-3 border-b text-xs uppercase text-gray-600 font-sans tracking-wide'>
				<h2 className='grow text-shop_ave'>
					<TruckIcon className='h-6 pb-1 mr-2 hidden text-gray-500 md:inline' />{' '}
					Shipping {items.length} item/s
				</h2>
				<div className='grow hidden md:flex'>
					<p className='text-shop_ave mr-1'>Order placed on:</p>
					<p className='text-black'>
						{moment.unix(timestamp).format('MM/DD/YYYY')}
					</p>
				</div>

				<div className='grow hidden md:flex'>
					<p className='text-shop_ave mr-1'>Total: </p>
					<p className='text-black'>
						<NumberFormat
							value={amount}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/>
					</p>
				</div>

				<div className='relative justify-self-end text-right'>
					<p className='text-shop_ave'>Order# {str}</p>
				</div>
			</div>

			<div className='p-5 sm:p-10'>
				<div className='flex gap-3 space-x-6 overflow-x-auto'>
					{images.map((image, i) => (
						<Image
							src={image}
							alt='Purchased Item'
							width={80}
							height={80}
							key={i}
							className='h-20 object-contain'
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default PurchaseItem;
