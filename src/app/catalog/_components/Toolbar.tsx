import { SearchBar } from '@/components';

type Props = {
	sizeResult: number;
};

export const Toolbar = ({ sizeResult }: Props) => {
	return (
		<div className='flex h-[40px] items-center text-[13px] font-normal leading-[16px]'>
			<div className='flex items-center gap-x-[10px]'>
				<span>Search result:</span>
				<span className='font-medium'>{sizeResult} cars</span>
			</div>
			<SearchBar />
			<div className='ml-[30px] flex h-full items-center gap-x-[10px]'>
				<span className=''>Sorting:</span>
				<span className='flex h-full w-[160px] items-center justify-center rounded-[10px] bg-white text-[#303030]'>
					Lot created date ↑
				</span>
			</div>
		</div>
	);
};
