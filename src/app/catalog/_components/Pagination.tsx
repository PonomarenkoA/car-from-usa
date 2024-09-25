import { RightArrow } from '@/assets/svgs';

export const Pagination = () => {
	return (
		<ul className='flex items-center gap-x-[10px] text-[15px] font-medium leading-[18px] text-[#818181]'>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white text-secondary'>
				1
			</li>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
				2
			</li>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
				3
			</li>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
				4
			</li>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
				5
			</li>
			<li className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
				<RightArrow width='11' height='11' fill='#818181' />
			</li>
		</ul>
	);
};
