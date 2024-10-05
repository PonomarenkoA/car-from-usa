import { CarCard, Timer } from '@/components';
import { Buy } from '@/components/Buy';
import { Lot } from '@/lib/data';
import { formatCurrency, formatDate } from '@/lib/utils';
import Link from 'next/link';

type Props = {
	items: Lot[];
};

export const Cars = async ({ items }: Props) => {
	return (
		<div className='flex flex-col gap-y-[15px]'>
			{items.map((item: Lot) => (
				<Link key={item.lot_id} href={'/car'}>
					<CarCard className='flex'>
						<CarCard.Body>
							<CarCard.Image src={item.images[0]} />
							<CarCard.Content>
								<CarCard.Title>{item.title}</CarCard.Title>
								<CarCard.Details item={item} />
							</CarCard.Content>
						</CarCard.Body>
						<Buy className='w-full border-l-[1px] border-[#E9E9E9] px-[20px] pt-[27px]'>
							<Buy.DateTimer className='bg-transparent p-0'>
								<Buy.Date>
									{formatDate(item.auction_date)}
								</Buy.Date>
								<Timer
									deadline={item.auction_date}
									className='text-[18px] leading-[22px]'
								/>
							</Buy.DateTimer>
							<Buy.Price className='mt-[23px] text-[22px] leading-[29px]'>
								{formatCurrency(item.price_buynow)}
							</Buy.Price>
							<Buy.Buttons className='mt-[17px] h-[50px] gap-x-[10px]'>
								<Buy.Button>BUY A CAR</Buy.Button>
								{item.price_buynow !== 0 ? (
									<Buy.Button className='bg-secondary text-secondary-foreground'>
										{formatCurrency(item.price_buynow)}{' '}
										<br /> BUY NOW
									</Buy.Button>
								) : (
									''
								)}
							</Buy.Buttons>
						</Buy>
					</CarCard>
				</Link>
			))}
		</div>
	);
};
