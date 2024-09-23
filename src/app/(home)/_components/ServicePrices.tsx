import { ServicePriceCard } from '@/components';
import { ServicePricesItems } from '@/constants';

export const ServicePrices = () => {
	return (
		<div
			className='rounded-[30px] bg-[#F9F9F9] p-16 text-[#303030]'
			id='service-prices'
		>
			<h2 className='text-center uppercase'>SERVICE PRICES</h2>
			<div className='mt-11 flex justify-between'>
				{ServicePricesItems.map((item, index) => (
					<ServicePriceCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};
