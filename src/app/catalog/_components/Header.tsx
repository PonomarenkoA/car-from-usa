'use client';
import { Email } from '@/assets/svgs';
import { ChangeColors } from '@/components';
import { Button } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<div className='flex items-center bg-white px-[30px] py-[25px]'>
			<Link href='/'>
				<Image src='/PNG-4.png' width={220} height={45} alt='' />
			</Link>
			<div className='ml-[170px]'>
				<ChangeColors />
			</div>
			<Button
				title='CONTACT US'
				leftIcon={<Email width='15' height='15' fill='#FFFFFF' />}
				onClick={() => {
					console.log('OnClick');
				}}
				className='ml-auto flex h-[60px] w-[170px] items-center gap-x-[10px] text-nowrap rounded-[10px] bg-secondary text-[13px] font-bold leading-[16px] text-white'
			/>
		</div>
	);
};
