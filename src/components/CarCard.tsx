'use client';
import { Calendar } from '@/assets/svgs';
import { Button } from './ui';
import Image from 'next/image';

export const CarCard = () => {
	return (
		<div className='flex h-[235px] w-full rounded-[10px] border-[1px] border-[#E9E9E9] bg-white'>
			<div className='flex gap-x-[20px] p-[20px]'>
				<Image
					src='/foto1.png'
					width='280'
					height='195'
					alt=''
					className='h-auto w-auto'
				/>
				<div className='flex-1'>
					<p className='texy-[21px] font-semibold leading-[26px] text-[#303030]'>
						2021 Honda Accord Sport
					</p>
					<ul className='mt-[16px] grid grid-cols-[140px_170px] gap-x-[20px] gap-y-[10px] text-[15px] font-normal leading-[20px]'>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>Condition:</span>
							<span className='font-medium text-[#303030]'>
								Run & Drive
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>VIN Code:</span>
							<span className='font-medium text-[#303030]'>
								1HGCV2F38MA025435
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>Location:</span>
							<span className='font-medium text-[#303030]'>
								Indianapolis (IN)
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>Lot ID:</span>
							<span className='font-medium text-[#303030]'>
								37544645
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>Odometer:</span>
							<span className='font-medium text-[#303030]'>
								97 000 miles
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-[#818181]'>Damage:</span>
							<span className='font-medium text-[#303030]'>
								Front end
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='flex-1 border-l-[1px] border-l-[#E9E9E9] p-[20px]'>
				<div className='space-y-[12px]'>
					<div className='flex items-center justify-center gap-x-[8px]'>
						<Calendar width='15' height='15' />
						<span className='text-[15px] font-normal leading-[18px] text-[#818181]'>
							25.09.2023
						</span>
					</div>
					<div className='text-center text-[18px] font-semibold leading-[22px] text-[#303030]'>
						3 d : 23 h : 45 m
					</div>
				</div>
				<div className='mt-[23px] flex flex-col items-center'>
					<span className='text-[24px] font-semibold leading-[29px] text-[#0075FF]'>
						$3,150
					</span>
					<span className='text-[13px] font-normal leading-[16px] text-[#818181]'>
						Current value
					</span>
				</div>
				<div className='mt-[17px] flex items-center justify-center gap-x-[10px]'>
					<Button
						onClick={() => {
							console.log('OnClick');
						}}
						className='h-[50px] w-[100px] text-nowrap rounded-[10px] bg-primary text-center text-[13px] font-bold leading-[16px] text-[#303030]'
					>
						<span className='flex-1 text-center'>BUY A CAR</span>
					</Button>
					<Button
						onClick={() => {
							console.log('OnClick');
						}}
						className='h-[50px] w-[100px] rounded-[10px] bg-secondary text-[13px] font-bold leading-[16px] text-white'
					>
						<span className='flex-1 text-center'>
							$4,200 <br />
							BUY NOW
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};
