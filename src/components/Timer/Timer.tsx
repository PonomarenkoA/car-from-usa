'use client';
import { cn } from '@/lib/utils';
import { useTimer } from './useTimer';

type Props = {
	deadline: string;
	className?: string;
};

export const Timer = ({ deadline, className }: Props) => {
	const { days, hours, minutes } = useTimer(deadline);

	return (
		<span
			className={cn(
				'text-[24px] font-semibold leading-[29px] text-[#303030]',
				className
			)}
		>
			{days} d : {hours} h : {minutes} m
		</span>
	);
};
