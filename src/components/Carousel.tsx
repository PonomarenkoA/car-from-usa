'use client';
import { RightArrow } from '@/assets/icons';
import Image from 'next/image';
import { useCallback, useState } from 'react';

type Props = {
	sliders: string[];
	autoSlide?: boolean;
	autoSlideInterval?: number;
	onSelected: (img: string) => void;
};

export const Carousel = ({ sliders, onSelected }: Props) => {
	const [curr, setCurr] = useState(0);

	const prev = useCallback(
		() => setCurr(curr => (curr === 0 ? sliders.length - 5 : curr - 1)),
		[sliders]
	);
	const next = useCallback(
		() => setCurr(curr => (curr === sliders.length - 5 ? 0 : curr + 1)),
		[sliders]
	);

	return (
		<div className='group relative flex h-[114px] w-[820px] overflow-hidden'>
			<div
				className='flex h-full gap-x-[15px] transition-transform duration-500 ease-out'
				style={{
					transform: `translateX(-${(curr * 100) / sliders.length}%)`
				}}
			>
				{sliders.map((img, i) => (
					<div
						key={i}
						className='h-[114px] w-[152px]'
						onClick={() => onSelected(img)}
					>
						<Image
							src={img}
							alt=''
							width={152}
							height={114}
							className='h-full w-full'
							priority
						/>
					</div>
				))}
			</div>

			<button
				onClick={prev}
				className='text-gray-80 absolute left-4 top-1/3 rounded-full bg-white/80 p-1 opacity-0 shadow hover:bg-white group-hover:opacity-100'
			>
				<RightArrow width='20' heigth='20' className='rotate-180' />
			</button>
			<button
				onClick={next}
				className='text-gray-80 absolute right-4 top-1/3 rounded-full bg-white/80 p-1 opacity-0 shadow hover:bg-white group-hover:opacity-100'
			>
				<RightArrow width='20' heigth='20' />
			</button>
		</div>
	);
};
