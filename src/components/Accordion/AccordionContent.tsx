import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const AccordionContent = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'text-[15px] leading-[24px] text-[#818181]',
				className
			)}
		>
			{children}
		</div>
	);
};
