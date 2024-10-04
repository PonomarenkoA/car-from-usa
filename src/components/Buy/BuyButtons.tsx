import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BuyButtons = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'mt-[20px] flex h-[60px] items-center gap-x-[20px]',
				className
			)}
		>
			{children}
		</div>
	);
};
