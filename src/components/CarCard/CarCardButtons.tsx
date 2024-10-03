import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardButtons = ({ className, children }: Props) => {
	return (
		<div
			className={cn('flex h-[50px] items-center gap-x-[10px]', className)}
		>
			{children}
		</div>
	);
};
