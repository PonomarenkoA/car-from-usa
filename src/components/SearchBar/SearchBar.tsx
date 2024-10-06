'use client';
import { Loupe } from '@/assets/svgs';
import { useSearchBar } from './useSearchBar';

export const SearchBar = () => {
	const { search, setSearch } = useSearchBar();

	return (
		<div className='ml-auto flex h-full w-[350px] items-center gap-x-[12px] rounded-[10px] bg-white px-[20px] py-[12px]'>
			<input
				className='flex-1 outline-none'
				placeholder='Search'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<Loupe width='10' height='10' />
		</div>
	);
};
