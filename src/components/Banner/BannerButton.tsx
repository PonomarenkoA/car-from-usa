'use client';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

type Props = {
	title: string;
	className?: string;
};

export const BannerButton = ({ title, className }: Props) => {
	return (
		<Button
			title={title} //'Fill out the form'
			onClick={() => {
				console.log('OnClick');
			}}
			className={cn(
				'h-[50px] w-[160px] text-nowrap bg-secondary text-[13px] font-semibold leading-[16px] text-secondary-foreground',
				className
			)}
		/>
	);
};
