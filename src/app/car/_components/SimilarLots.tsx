import { RightArrow } from '@/assets/svgs';
import { Buy } from '@/components/Buy';
import { CarCard } from '@/components/CarCard';

export const SimilarLots = () => {
	return (
		<div className='space-y-[20px]'>
			<div className='flex items-center justify-between'>
				<span className='text-[27px] font-semibold leading-[33px] text-[#303030]'>
					Similar Lots
				</span>
				<div className='flex items-center gap-x-[20px]'>
					<button className='flex h-[40px] w-[40px] rotate-180 items-center justify-center rounded-[10px] bg-white'>
						<RightArrow width='12' height='12' fill='#818181' />
					</button>
					<button className='flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white'>
						<RightArrow width='12' height='12' fill='#818181' />
					</button>
				</div>
			</div>
			<div className='flex flex-wrap'>
				<CarCard className='h-[594px] w-[390px]'>
					<CarCard.Body className='flex-col'>
						<CarCard.Image className='h-[250px] w-[350px]' />
						<CarCard.Content className='mt-[20px]'>
							<CarCard.Title />
							<CarCard.Details className='justify-between' />
						</CarCard.Content>
					</CarCard.Body>
					<Buy className='flex items-center rounded-[0] border-l-0 border-t-[1px] pt-[25px]'>
						<Buy.Price className='mt-0 text-[21px] leading-[26px]'>
							$3,150
						</Buy.Price>
						<Buy.Button className='ml-[22px] h-[50px] w-[120px]'>
							BUY A CAR
						</Buy.Button>
						<Buy.Date className='ml-[15px]'>25.09.2023</Buy.Date>
					</Buy>
				</CarCard>
			</div>
		</div>
	);
};
