import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const CarCardContent = ({ className, children }: Props) => {
	return <div className={cn('flex-1', className)}>{children}</div>;
};
