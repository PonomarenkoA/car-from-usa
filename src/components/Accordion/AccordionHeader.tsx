import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const AccordionHeader = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'flex items-center justify-between font-semibold text-[#303030]',
				className
			)}
		>
			{children}
		</div>
	);
};
