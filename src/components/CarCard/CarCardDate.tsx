import { Calendar } from '@/assets/svgs';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const CarCardDate = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center gap-x-[8px]',
				className
			)}
		>
			<Calendar width='15' height='15' />
			<span className='text-[15px] font-normal leading-[18px] text-[#818181]'>
				25.09.2023
			</span>
		</div>
	);
};
