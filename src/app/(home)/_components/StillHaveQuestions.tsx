'use client';
import React from 'react';
import Image from 'next/image';
import { Email } from '@/assets/svgs';
import { Button } from '@/components/ui';

export const StillHaveQuestions = () => {
	return (
		<div className='space-y-11' id='still-have-questions'>
			<h2 className='text-center uppercase'>STILL HAVE QUESTIONS?</h2>

			<div className='relative h-[533px] w-[1140px] rounded-[30px] bg-secondary py-[75px] text-white'>
				<Image
					src='/Free_MacBook_Pro_1.svg'
					width={806}
					height={604}
					alt=''
					className='absolute -left-20 -top-6'
				/>
				<div className='relative ml-auto w-[570px] space-y-10 px-11'>
					<p className='w-[460px] text-center text-[21px] font-bold leading-[26px]'>
						Fill out the application and we will contact you within
						6 hours
					</p>
					<form>
						<div className='space-y-9'>
							<input
								type='text'
								placeholder='Your Name'
								className='h-9 w-full border-b-[1px] border-b-white bg-transparent px-5 outline-none placeholder:text-[#D2E7FF]'
							/>
							<input
								type='tel'
								placeholder='+1 (555) 555 1234'
								className='h-9 w-full border-b-[1px] border-b-white bg-transparent px-5 outline-none placeholder:text-[#D2E7FF]'
							/>
							<select className='h-9 w-full border-b-[1px] border-b-white bg-transparent px-4 outline-none placeholder:text-[#D2E7FF]'>
								<option>Telegram</option>
							</select>
						</div>

						<Button
							title='SEND A REQUEST'
							leftIcon={<Email />}
							onClick={() => console.log('OnClick')}
							className='mx-auto mt-[50px] gap-[17px] rounded-[15px] bg-primary px-[45px] py-[26px] text-[15px] font-bold leading-[18px] text-primary-foreground'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
