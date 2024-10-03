import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardDateTimer = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'space-y-[12px] text-[18px] font-semibold leading-[22px]',
				className
			)}
		>
			{children}
		</div>
	);
};
