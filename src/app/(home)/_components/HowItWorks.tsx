import { HowItWorkCard } from '@/components/HowItWorkCard';
import { HowItWorkItems } from '@/constants';

export const HowItWorks = () => {
	return (
		<div
			className='relative z-20 -mt-[196px] rounded-[30px] bg-secondary p-16 text-white'
			id='how-it-works'
		>
			<h2 className='text-center uppercase'>HOW IT WORKS</h2>
			<div className='mt-11 flex flex-row justify-between'>
				{HowItWorkItems.map((item, index) => (
					<HowItWorkCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};
