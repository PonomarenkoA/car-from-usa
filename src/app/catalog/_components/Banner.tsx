'use client';
import { Button } from '@/components/ui';
import Image from 'next/image';

export const Banner = () => {
	return (
		<div className='flex gap-x-[70px] rounded-[10px] bg-primary px-[52px]'>
			<Image
				src='/83d13d22-f975-44d9-beb8-16d8fa5fef12.png'
				width='365'
				height='240'
				alt=''
				className='h-auto w-auto'
				priority
			/>

			<div className='space-y-[22px] py-[33px]'>
				<p className='text-[20px] font-bold leading-[30px] text-[#303030]'>
					Do you want to connect our specialist to the search{' '}
					<span className='text-secondary'>for free</span>? <br />
					Fill the form!
				</p>
				<Button
					title='Fill out the form'
					onClick={() => {
						console.log('OnClick');
					}}
					className='h-[50px] w-[160px] text-nowrap rounded-[10px] bg-secondary text-[13px] font-semibold leading-[16px] text-white'
				/>
			</div>
		</div>
	);
};
