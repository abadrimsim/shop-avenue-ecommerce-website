import moment from 'moment';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { TruckIcon } from '@heroicons/react/solid';

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
		<div className='relative border rounded-md'>
			<div className='flex items-center space-x-10 px-3 py-2 border-b text-sm text-gray-600 font-sans tracking-wider'>
				<h2 className='grow text-sm md:text-lg font-semibold text-shop_ave'>
					<TruckIcon className='h-6 pb-1 mr-2 hidden md:inline' /> Shipping{' '}
					{items.length} item/s
				</h2>
				<div className='grow hidden md:flex'>
					<p className='font-semibold text-sm text-shop_ave mr-1'>
						Order placed on:
					</p>
					<p className='font-semibold text-sm text-gray-400'>
						{moment.unix(timestamp).format('MM/DD/YYYY')}
					</p>
				</div>

				<div className='grow hidden md:flex'>
					<p className='font-semibold text-sm text-shop_ave mr-1'>Total: </p>
					<p className='font-semibold text-sm text-gray-400'>
						<NumberFormat
							value={amount}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/>
					</p>
				</div>

				<div className='relative justify-self-end text-right'>
					<p className='font-semibold text-sm text-shop_ave'>Order# {str}</p>
				</div>
			</div>

			<div className='p-3 sm:p-10'>
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
