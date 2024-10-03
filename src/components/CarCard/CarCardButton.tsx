'use client';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardButton = ({ className, children }: Props) => {
	return (
		<Button
			onClick={() => {
				console.log('OnClick');
			}}
			className={cn(
				'h-full w-full text-nowrap rounded-[10px] bg-primary text-center text-[13px] font-bold leading-[16px] text-[#303030]',
				className
			)}
		>
			<span className='flex-1 text-center'>{children}</span>
		</Button>
	);
};
