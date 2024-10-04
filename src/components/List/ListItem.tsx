import { cn } from '@/lib/utils';

type Props = {
	title: string;
	className?: string;
	children: React.ReactNode;
};

export const ListItem = ({ title, className, children }: Props) => {
	return (
		<li className={cn('text-[15px] leading-[18px]', className)}>
			<span className='font-normal text-[#818181]'>{title}</span>
			<span className='font-medium text-[#303030]'>{children}</span>
		</li>
	);
};
