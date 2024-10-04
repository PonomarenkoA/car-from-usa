import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BuyDateTimer = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center gap-y-[12px] rounded-[10px] bg-[#F7F7F7] py-[30px]',
				className
			)}
		>
			{children}
		</div>
	);
};
