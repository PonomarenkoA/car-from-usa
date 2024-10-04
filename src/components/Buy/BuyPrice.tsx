import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BuyPrice = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'mt-[34px] text-[36px] font-semibold leading-[44px] text-secondary',
				className
			)}
		>
			{children}
			<div className='text-[13px] font-normal leading-[16px] text-[#818181]'>
				Current value
			</div>
		</div>
	);
};
