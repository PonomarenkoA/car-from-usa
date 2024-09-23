import { WhatIsItForCard } from '@/components/WhatIsItForCard';
import { WhatIsItForItems } from '@/constants';

export const WhatIsItFor = () => {
	return (
		<div className='bg-white px-16 text-[#303030]' id='what-is-it-for'>
			<h2 className='text-center uppercase'>WHAT IS IT FOR</h2>
			<div className='mt-[44px] flex flex-row justify-between'>
				{WhatIsItForItems.map((item, index) => (
					<WhatIsItForCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};
