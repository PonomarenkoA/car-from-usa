import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const CarCardTimer = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'text-center font-semibold text-[#303030]',
				className
			)}
		>
			3 d : 23 h : 45 m
		</div>
	);
};
