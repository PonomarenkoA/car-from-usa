'use client';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
	items: string[];
};

export const Slider = ({ items }: Props) => {
	const [selectedItem, setSelectedItem] = useState(items[0]);

	return (
		<div className='flex h-[630px] w-[820px] flex-col gap-y-[15px]'>
			<div className='relative h-[515px] w-[820px]'>
				<Image
					src={selectedItem}
					fill
					alt=''
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='h-auto w-auto'
					priority
				/>
			</div>
			<div className='relative flex h-[114px] w-[820px] items-center gap-x-[16px] overflow-x-scroll'>
				{items.map((item, index) => (
					<div
						key={index}
						className='relative h-full min-w-[151px] cursor-pointer'
						onClick={() => setSelectedItem(item)}
					>
						<Image
							src={item}
							fill
							alt=''
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='h-auto w-auto'
							priority
						/>
					</div>
				))}
			</div>
		</div>
	);
};
