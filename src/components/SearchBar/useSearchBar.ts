import { useRouter, useSearchParams } from 'next/navigation';

export const useSearchBar = () => {
	const params = useSearchParams();
	const search = params.get('search') ?? '';
	const router = useRouter();

	const setSearch = (value: string) => {
		if (value) {
			router.push(`/catalog?search=${value}`);
		} else {
			router.push('/catalog');
		}
	};

	return {
		search,
		setSearch
	};
};
