import { Banner, Breadcrumbs, Header } from '@/components';
import { Cars, Pagination, Toolbar } from './_components';
import { Filter } from './_components/Filter';
import { CurrentLots } from '../../lib/data';

const getCars = async () => {
	return CurrentLots.data;
};

const CatalogPage = async () => {
	const items = await getCars();

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
							<Cars items={items} />

							<Banner>
								<Banner.Image src='/83d13d22-f975-44d9-beb8-16d8fa5fef12.png' />
								<Banner.Content>
									<Banner.Title>
										Do you want to connect our specialist to
										the search{' '}
										<span className='text-secondary'>
											for free
										</span>
										?<br /> Fill the form!
									</Banner.Title>
									<Banner.Button title='Fill out the form' />
								</Banner.Content>
							</Banner>

							{/* <Cars /> */}
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
