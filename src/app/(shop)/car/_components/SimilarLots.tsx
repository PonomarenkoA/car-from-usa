'use client';
import { RightArrow } from '@/assets/icons';
import { Accordion, Buy, CarCard } from '@/components';
import { Button } from '@/components/ui';
import { CurrentLots } from '@/lib/data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Lot } from '@/types';
import { useEffect, useState } from 'react';

const getSimilarLots = async (step: number) => {
	const { data } = CurrentLots;
	return data.slice(step * 3, step * 3 + 3);
};

export const SimilarLots = () => {
	const [step, setStep] = useState(0);
	const [items, setItems] = useState<Lot[]>([]);

	const increase = () => setStep(step + 1);

	const decrease = () => {
		if (step === 0) return;
		setStep(step - 1);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await getSimilarLots(step);
			setItems(result);
		};
		fetchData();
	}, [step]);

	return (
		<Accordion className='space-y-[20px] bg-[#FAFAFA]'>
			<Accordion.Header>
				<span className='text-[27px] font-semibold leading-[33px] text-[#303030]'>
					Similar Lots
				</span>
				<div className='flex items-center gap-x-[20px]'>
					<Button
						className='h-[40px] w-[40px] rotate-180 bg-white'
						onClick={decrease}
					>
						<RightArrow width='12' height='12' fill='#818181' />
					</Button>
					<Button
						className='h-[40px] w-[40px] bg-white'
						onClick={increase}
						disabled={items.length < 3}
					>
						<RightArrow width='12' height='12' fill='#818181' />
					</Button>
				</div>
			</Accordion.Header>
			<Accordion.Content className='grid grid-cols-3 gap-x-[25px]'>
				{items.map(item => (
					<CarCard
						key={item.lot_id}
						className='grid h-full w-[390px] grid-rows-[1fr_80px]'
					>
						<CarCard.Body className='flex-col'>
							<CarCard.Image
								src={item.images[0]}
								className='h-[250px] w-[350px]'
							/>
							<CarCard.Content className='mt-[20px]'>
								<CarCard.Title>Title</CarCard.Title>
								<CarCard.Details
									item={item}
									className='justify-between'
								/>
							</CarCard.Content>
						</CarCard.Body>
						<Buy className='flex items-center rounded-[0] border-l-0 border-t-[1px] pt-[25px]'>
							<Buy.Price className='mt-0 text-[21px] leading-[26px]'>
								{formatCurrency(item.price_buynow)}
							</Buy.Price>
							<Buy.Button className='ml-[22px] h-[50px] w-[120px]'>
								BUY A CAR
							</Buy.Button>
							<Buy.Date className='ml-[15px]'>
								{formatDate(item.auction_date)}
							</Buy.Date>
						</Buy>
					</CarCard>
				))}
			</Accordion.Content>
		</Accordion>
	);
};
