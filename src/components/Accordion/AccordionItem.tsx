import { cn } from '@/lib/utils';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const AccordionItem = ({ className, children }: Props) => {
	return <div className={cn('', className)}>{children}</div>;
};
