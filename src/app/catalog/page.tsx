'use client';
import { Breadcrumbs, Header } from '@/components';
import { Cars, Pagination, Toolbar } from './_components';
import { Filter } from './_components/Filter';
import { CurrentLots } from '../../lib/data';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Lot } from '@/types';
import useDebounce from '@/hooks/useDebounce';

const getCars = async (search: string) => {
	if (!search) {
		return CurrentLots;
	}

	const result = CurrentLots.data.filter(item =>
		item.title
			.toLowerCase()
			.replace(/\s+/g, '')
			.includes(search.toLowerCase().replace(/\s+/g, ''))
	);

	return { page: 1, size: result.length, data: result };
};

const CatalogPage = () => {
	const params = useSearchParams();
	const search = params.get('search') ?? '';
	const debouncedSearch = useDebounce(search, 1000);

	const [size, setSize] = useState(0);
	const [items, setItems] = useState<Lot[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const { size, data } = await getCars(debouncedSearch);
			setSize(size);
			setItems(data);
		};

		fetchData();
	}, [debouncedSearch]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Header />
				<div className='flex-1 space-y-[27px] bg-[#FAFAFA] px-[30px] pb-[106px] pt-[16px]'>
					<Breadcrumbs />
					<div className='flex gap-x-[29px]'>
						<div className='w-[260px]'>
							<Filter />
						</div>
						<div className='flex-1'>
							<Toolbar sizeResult={size} />
							<Cars items={items} className='mt-[20px]' />
							<Pagination className='mt-[40px]' />
						</div>
					</div>
				</div>
			</div>
		</Suspense>
	);
};

export default CatalogPage;
