import { Banner, Slider, Timer } from '@/components';
import {
	DamageInfo,
	AuctionInfo,
	VehicleInfo,
	Description,
	SimilarLots
} from '../_components';
import { Buy } from '@/components/Buy';
import { CurrentLots } from '@/lib/data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Breadcrumbs } from '../../_components';

const getCar = async (lot_id: string) => {
	return CurrentLots.data.find(f => f.lot_id === lot_id);
};

const CarPage = async ({ params }: { params: { id: string } }) => {
	const item = await getCar(params.id);

	if (!item) redirect('/search');

	return (
		<>
			<Breadcrumbs />

			<div className='mt-[20px] space-y-[40px]'>
				<div className='flex flex-col gap-[23px]'>
					<div className='flex items-center gap-x-[20px]'>
						<Image
							src={`/logo-${item.auction.toLowerCase()}.png`}
							width={30}
							height={30}
							alt=''
						/>
						<h2 className='truncate font-semibold'>{item.title}</h2>
					</div>
					<div className='flex flex-wrap items-start gap-[30px]'>
						<Slider items={item.images} />
						<div className='w-[370px] space-y-[34px]'>
							<Buy className='w-[370px]'>
								<Buy.DateTimer>
									<Buy.Date>
										{formatDate(item.auction_date)}
									</Buy.Date>
									<Timer deadline={item.auction_date} />
								</Buy.DateTimer>
								<Buy.Price>
									{formatCurrency(item.price_buynow)}
								</Buy.Price>
								<Buy.Buttons>
									<Buy.Button>ORDER A CAR</Buy.Button>
									<Buy.Button className='bg-secondary text-secondary-foreground'>
										{formatCurrency(item.price_buynow)}
										<br />
										BUY IT NOW
									</Buy.Button>
								</Buy.Buttons>
							</Buy>

							<DamageInfo item={item} />
						</div>
						<AuctionInfo item={item} />
						<VehicleInfo item={item} />
						<Description item={item} />
					</div>
				</div>

				<Banner className="bg-[url('/empty-grey-background.png')]">
					<Banner.Content>
						<Banner.Title>
							Need help finding cars? <br />
							Fill out the application and get a{' '}
							<span className='text-secondary'>
								free consultation
							</span>
							!
						</Banner.Title>
						<Banner.Button title='Fill out the form' />
					</Banner.Content>
					<Banner.Image
						src='/used-cars-at-car-mart.png'
						className='w-full'
					/>
				</Banner>

				<SimilarLots />
			</div>
		</>
	);
};

export default CarPage;
