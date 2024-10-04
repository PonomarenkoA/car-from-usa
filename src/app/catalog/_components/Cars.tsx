import { CarCard } from '@/components';
import { Buy } from '@/components/Buy';
import Link from 'next/link';

export const Cars = async () => {
	return (
		<div className='space-y-[15px]'>
			<Link href={'/car'}>
				<CarCard className='flex'>
					<CarCard.Body>
						<CarCard.Image />
						<CarCard.Content>
							<CarCard.Title />
							<CarCard.Details />
						</CarCard.Content>
					</CarCard.Body>
					<Buy className='w-full border-l-[1px] border-[#E9E9E9] px-[20px] pt-[27px]'>
						<Buy.DateTimer className='bg-transparent p-0'>
							<Buy.Date>25.09.2023</Buy.Date>
							<Buy.Timer className='text-[18px] leading-[22px]' />
						</Buy.DateTimer>
						<Buy.Price className='mt-[23px] text-[22px] leading-[29px]'>
							$3,150
						</Buy.Price>
						<Buy.Buttons className='mt-[17px] h-[50px] gap-x-[10px]'>
							<Buy.Button>BUY A CAR</Buy.Button>
							<Buy.Button className='text-secondary-foreground bg-secondary'>
								$4.200 <br /> BUY NOW
							</Buy.Button>
						</Buy.Buttons>
					</Buy>
				</CarCard>
			</Link>
		</div>
	);
};
