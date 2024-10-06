'use client';
import { Loupe } from '@/assets/svgs';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
	sizeResult: number;
};

export const Toolbar = ({ sizeResult }: Props) => {
	const params = useSearchParams();
	const search = params.get('search') ?? '';
	const router = useRouter();

	return (
		<div className='flex h-[40px] items-center text-[13px] font-normal leading-[16px]'>
			<div className='flex items-center gap-x-[10px]'>
				<span>Search result:</span>
				<span className='font-medium'>{sizeResult} cars</span>
			</div>
			<div className='ml-auto flex h-full w-[350px] items-center gap-x-[12px] rounded-[10px] bg-white px-[20px] py-[12px]'>
				<input
					className='flex-1 outline-none'
					placeholder='Search'
					value={search}
					onChange={e => {
						const search = e.target.value;

						if (search) {
							router.push(`/catalog?search=${search}`);
						} else {
							router.push('/catalog');
						}
					}}
				/>
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
