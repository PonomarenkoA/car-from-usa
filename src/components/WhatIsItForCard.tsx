import { WhatIsItForItem } from '@/types';

interface HowItWorkCardProps {
	item: WhatIsItForItem;
}

export const WhatIsItForCard = (props: HowItWorkCardProps) => {
	const { title, description, icon: Icon } = props.item;
	return (
		<div className='w-[258px]'>
			<Icon />
			<h3 className='mt-7 text-[15px] font-bold leading-[18px]'>
				{title}
			</h3>
			<p className='mt-[10px] text-[15px] font-medium leading-6'>
				{description}
			</p>
		</div>
	);
};
