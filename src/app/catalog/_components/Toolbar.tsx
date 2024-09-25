import { Loupe } from '@/assets/svgs';

export const Toolbar = () => {
	return (
		<div className='flex h-[40px] items-center text-[13px] font-normal leading-[16px]'>
			<div className='flex items-center gap-x-[10px]'>
				<span>Search result:</span>
				<span className='font-medium'>1560 cars</span>
			</div>
			<div className='ml-auto flex h-full w-[350px] items-center gap-x-[12px] rounded-[10px] bg-white px-[20px] py-[12px]'>
				<input className='flex-1 outline-none' placeholder='Search' />
				<Loupe width='10' height='10' />
			</div>
			<div className='ml-[30px] flex h-full items-center gap-x-[10px]'>
				<span className=''>Sorting:</span>
				<span className='flex h-full w-[160px] items-center justify-center rounded-[10px] bg-white text-[#303030]'>
					Lot created date ↑
				</span>
			</div>
		</div>
	);
};
