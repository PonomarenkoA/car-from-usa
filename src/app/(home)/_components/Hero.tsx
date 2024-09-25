'use client';
import { RightArrow } from '@/assets/svgs';
import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';

export const Hero = () => {
	const router = useRouter();

	return (
		<div
			className='relative h-[832px] after:absolute after:inset-0 after:z-10 after:bg-[#142539] after:opacity-75'
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: 'url(/homepage-seen-on-laptop-screen.png)'
			}}
		>
			<div className='relative left-[140px] top-[228px] z-20 text-white'>
				<h1 className='w-[618px]'>
					Ready Catalog of Cars for Your Website
				</h1>
				<p className='text-5 mt-[30px] font-bold leading-6'>
					from Auto Auctions Copart and IAAI
				</p>
				<Button
					title='DEMO VERSION'
					rightIcon={<RightArrow width='11' height='11' />}
					onClick={() => {
						router.push('/catalog');
					}}
					className='mt-[55px] gap-4 rounded-[15px] bg-primary px-10 py-7 text-[15px] font-bold leading-[18px] text-[#303030]'
				/>
			</div>
		</div>
	);
};
