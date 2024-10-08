'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from '..';

type Props = {
	items: string[];
};

export const Slider = ({ items }: Props) => {
	const [selectedItem, setSelectedItem] = useState(items[0]);

	const handleSelected = (img: string) => setSelectedItem(img);

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

			<Carousel onSelected={handleSelected} sliders={items} />
		</div>
	);
};
