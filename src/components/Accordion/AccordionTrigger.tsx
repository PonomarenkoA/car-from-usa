import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const AccordionTrigger = ({ className, children }: Props) => {
	return <div className={cn('', className)}>{children}</div>;
};
