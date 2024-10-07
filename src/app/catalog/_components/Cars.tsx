import { Banner, CarCard, Timer } from '@/components';
import { Buy } from '@/components/Buy';
import { cn, formatCurrency, formatDate } from '@/lib/utils';
import { Lot } from '@/types';
import Link from 'next/link';

type Props = {
	items: Lot[];
	className?: string;
};

export const Cars = ({ items, className }: Props) => {
	return (
		<div className={cn('flex flex-col gap-y-[15px]', className)}>
			{items.map((item: Lot, index) => (
				<>
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
								<Link
									key={item.lot_id}
									href={`/car/${item.lot_id}`}
								>
									<Buy.Button>BUY A CAR</Buy.Button>
								</Link>
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

					{index === 7 ? (
						<Banner className='mt-[15px]'>
							<Banner.Image src='/83d13d22-f975-44d9-beb8-16d8fa5fef12.png' />
							<Banner.Content>
								<Banner.Title>
									Do you want to connect our specialist to the
									search{' '}
									<span className='text-secondary'>
										for free
									</span>
									?<br /> Fill the form!
								</Banner.Title>
								<Banner.Button title='Fill out the form' />
							</Banner.Content>
						</Banner>
					) : (
						''
					)}
				</>
			))}
		</div>
	);
};
