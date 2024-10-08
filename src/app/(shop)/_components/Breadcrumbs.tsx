import { RightArrow } from '@/assets/icons';
import Link from 'next/link';

export const Breadcrumbs = () => {
	return (
		<ul className='flex gap-[7px] text-[13px] font-normal leading-[16px] text-[#818181]'>
			<li className='flex items-center gap-[7px]'>
				<Link href='/'>Home</Link>
				<RightArrow width='7' height='7' />
			</li>
			<li className='flex items-center gap-[7px]'>
				<Link href='/search'>Search</Link>
				<RightArrow width='7' height='7' />
			</li>
			<li className='flex items-center gap-[7px]'>
				<span>Honda</span>
				<RightArrow width='7' height='7' />
			</li>
			<li className='flex items-center gap-[7px] text-[#0075FF]'>
				<span>Accord</span>
			</li>
		</ul>
	);
};
