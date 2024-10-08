'use client';
import { Breadcrumbs } from '@/components';
import { Cars, Pagination, Toolbar } from './_components';
import { Filter } from './_components/Filter';
import { CurrentLots } from '@/lib/data';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Lot } from '@/types';
import useDebounce from '@/hooks/useDebounce';

const getCars = (search: string) => {
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
		const { size, data } = getCars(debouncedSearch);
		setSize(size);
		setItems(data);
	}, [debouncedSearch]);

	return (
		<>
			<Breadcrumbs />
			<section className='mt-[27px] grid grid-cols-[260px_1fr] gap-x-[29px]'>
				<Filter />

				<div>
					<Toolbar sizeResult={size} />
					<Cars items={items} className='mt-[20px]' />
					<Pagination className='mt-[40px]' />
				</div>
			</section>
		</>
	);
};

export default CatalogPage;
