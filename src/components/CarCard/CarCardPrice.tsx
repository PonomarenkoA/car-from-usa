import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const CarCardPrice = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center text-[24px] leading-[29px]',
				className
			)}
		>
			<span className='font-semibold text-[#0075FF]'>$3,150</span>
			<span className='text-[13px] font-normal leading-[16px] text-[#818181]'>
				Current value
			</span>
		</div>
	);
};
