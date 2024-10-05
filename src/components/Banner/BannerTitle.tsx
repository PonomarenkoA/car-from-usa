import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BannerTitle = ({ className, children }: Props) => {
	return (
		<p
			className={cn(
				'text-[20px] font-bold leading-[30px] text-[#303030]',
				className
			)}
		>
			{children}
		</p>
	);
};
