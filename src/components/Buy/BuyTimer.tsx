import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const BuyTimer = ({ className }: Props) => {
	return (
		<span
			className={cn(
				'text-[24px] font-semibold leading-[29px] text-[#303030]',
				className
			)}
		>
			3 d : 23 h : 45 m
		</span>
	);
};
