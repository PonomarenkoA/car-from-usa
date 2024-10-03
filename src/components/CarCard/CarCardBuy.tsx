import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardBuy = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'w-full border-l-[1px] border-l-[#E9E9E9] ps-[20px]',
				className
			)}
		>
			{children}
		</div>
	);
};
