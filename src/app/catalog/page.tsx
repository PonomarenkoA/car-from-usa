import { Banner, Breadcrumbs, Header } from '@/components';
import { Cars, Pagination, Toolbar } from './_components';
import { Filter } from './_components/Filter';

const CatalogPage = () => {
	return (
		<div>
			<Header />
			<div className='flex-1 space-y-[27px] bg-[#FAFAFA] px-[30px] pb-[106px] pt-[16px]'>
				<Breadcrumbs />
				<div className='flex gap-x-[29px]'>
					<div className='w-[260px]'>
						<Filter />
					</div>
					<div className='flex-1'>
						<Toolbar />
						<div className='mt-[20px] space-y-[15px]'>
							<Cars />
							<Banner />
							<Cars />
						</div>
						<div className='mt-[40px]'>
							<Pagination />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CatalogPage;
