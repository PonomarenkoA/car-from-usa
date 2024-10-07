'use client';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

type Props = {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
};

export const BuyButton = ({ onClick, className, children }: Props) => {
	return (
		<Button
			onClick={onClick}
			className={cn(
				'h-full w-full rounded-[10px] bg-primary text-center text-[13px] font-bold leading-[16px] text-primary-foreground',
				className
			)}
		>
			<span className='flex-1 text-center'>{children}</span>
		</Button>
	);
};
