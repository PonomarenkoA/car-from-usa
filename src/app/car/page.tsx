import { Banner, Breadcrumbs, Header } from '@/components';
import Image from 'next/image';
import {
	DamageInfo,
	AuctionInfo,
	VehicleInfo,
	Description,
	SimilarLots
} from './_components';
import { Buy } from '@/components/Buy';

const CarPage = () => {
	return (
		<div className='min-h-screen bg-[#FAFAFA]'>
			<Header />
			<div className='flex-1 space-y-[20px] px-[30px] py-[20px]'>
				<div className=''>
					<Breadcrumbs />
				</div>
				<div className='space-y-[40px]'>
					<div className='flex flex-col gap-[23px]'>
						<h2 className='font-semibold'>
							2018 Honda Accord Sport
						</h2>
						<div className='flex flex-wrap items-start gap-[30px]'>
							<div className='flex h-[630px] w-[820px] flex-col gap-y-[15px]'>
								<div className='relative h-[515px] w-[820px]'>
									<Image
										src='/foto-main.png'
										fill
										alt=''
										className='object-cover'
										priority
									/>
								</div>
								<div className='relative flex items-center gap-x-[16px]'>
									<div className='relative h-[114px] w-[151px]'>
										<Image
											src='/foto-1.png'
											fill
											alt=''
											className='object-cover'
											priority
										/>
									</div>
									<div className='relative h-[114px] w-[151px]'>
										<Image
											src='/foto-2.png'
											fill
											alt=''
											className='object-cover'
											priority
										/>
									</div>
									<div className='relative h-[114px] w-[151px]'>
										<Image
											src='/foto-3.png'
											fill
											alt=''
											className='object-cover'
											priority
										/>
									</div>
									<div className='relative h-[114px] w-[151px]'>
										<Image
											src='/foto-4.png'
											fill
											alt=''
											className='object-cover'
											priority
										/>
									</div>
									<div className='relative h-[114px] w-[151px]'>
										<Image
											src='/foto-5.png'
											fill
											alt=''
											className='object-cover'
											priority
										/>
									</div>
								</div>
							</div>
							<div className='w-[370px] space-y-[34px]'>
								<Buy className='w-[370px]'>
									<Buy.DateTimer>
										<Buy.Date>25.09.2023</Buy.Date>
										<Buy.Timer></Buy.Timer>
									</Buy.DateTimer>
									<Buy.Price>$3,150</Buy.Price>
									<Buy.Buttons>
										<Buy.Button>ORDER A CAR</Buy.Button>
										<Buy.Button className='text-secondary-foreground bg-secondary'>
											$4,200
											<br /> BUY IT NOW
										</Buy.Button>
									</Buy.Buttons>
								</Buy>

								<DamageInfo />
							</div>
							<AuctionInfo />
							<VehicleInfo />
							<Description />
						</div>
					</div>
					<Banner />
					<SimilarLots />
				</div>
			</div>
		</div>
	);
};

export default CarPage;
