import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BannerContent = ({ className, children }: Props) => {
	return (
		<div className={cn('space-y-[22px] py-[33px]', className)}>
			{children}
		</div>
	);
};
