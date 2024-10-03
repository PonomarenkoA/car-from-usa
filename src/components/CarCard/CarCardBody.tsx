import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardBody = ({ className, children }: Props) => {
	return (
		<div className={cn('flex gap-x-[20px] p-[20px]', className)}>
			{children}
		</div>
	);
};
