'use client';
import { Minus, Plus } from '@/assets/icons';
import { FaqItem } from '@/types';
import { useState } from 'react';

type FaqCardProps = FaqItem & {};

export const FaqCard = (props: FaqCardProps) => {
	const { title, description } = props;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className='flex justify-between rounded-[15px] bg-[#F9F9F9] px-[70px] py-[30px] text-[#303030]'>
				<p className='text-[15px] font-bold leading-[18px]'>{title}</p>
				<button onClick={() => setIsOpen(prevState => !prevState)}>
					{isOpen ? <Minus /> : <Plus />}
				</button>
			</div>
			{isOpen ? (
				<div className='px-[70px] py-[27px]'>
					<p className='text-[15px] font-medium leading-[18px]'>
						{description}
					</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};
