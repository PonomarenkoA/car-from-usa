'use client';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BuyButton = ({ className, children }: Props) => {
	return (
		<Button
			onClick={() => {
				console.log('OnClick');
			}}
			className={cn(
				'text-primary-foreground h-full w-full rounded-[10px] bg-primary text-center text-[13px] font-bold leading-[16px]',
				className
			)}
		>
			<span className='flex-1 text-center'>{children}</span>
		</Button>
	);
};
