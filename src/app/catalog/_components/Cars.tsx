import { CarCard } from '@/components';
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
					<CarCard.Buy className='space-y-[20px] p-[20px]'>
						<CarCard.DateTimer>
							<CarCard.Date />
							<CarCard.Timer />
						</CarCard.DateTimer>
						<CarCard.Price />
						<CarCard.Buttons>
							<CarCard.Button>BUY A CAR</CarCard.Button>
							<CarCard.Button className='bg-secondary text-white'>
								$4.200 <br /> BUY NOW
							</CarCard.Button>
						</CarCard.Buttons>
					</CarCard.Buy>
				</CarCard>
			</Link>
		</div>
	);
};
