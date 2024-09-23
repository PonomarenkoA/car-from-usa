'use client';
import { RightArrow } from '@/assets/svgs';
import { ServicePriceItem } from '@/types';
import { Button } from './ui';

interface ServicePriceCardProps {
	item: ServicePriceItem;
}

export const ServicePriceCard = (props: ServicePriceCardProps) => {
	const { item } = props;

	return (
		<div className='w-[300px]'>
			<div className='rounded-xl bg-secondary p-4 text-white'>
				<span className='block text-center text-[21px] font-semibold leading-[26px]'>
					{item.title}
				</span>
			</div>

			<div className='mt-[27px]'>
				<span className='text-12 leading-15 block text-center font-bold'>
					{item.price}
				</span>
				<p className='text-center text-[13px] font-medium leading-4'>
					{item.period}
				</p>

				<ul className='mt-9 space-y-6'>
					{item.items.map((subItem, index) => (
						<li key={index} className='flex justify-between'>
							<span className='text-[13px] font-medium leading-4 text-[#818181]'>
								{subItem.title}
							</span>
							<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
								{subItem.value}
							</span>
						</li>
					))}
				</ul>

				<Button
					title='ORDER PLAN'
					rightIcon={<RightArrow />}
					onClick={() => {
						console.log('OnClick');
					}}
					className='m-auto mt-12 gap-4 rounded-[15px] bg-primary px-[34px] py-[26px] text-[15px] font-bold leading-[18px] text-[#303030]'
				/>
			</div>
		</div>
	);
};
