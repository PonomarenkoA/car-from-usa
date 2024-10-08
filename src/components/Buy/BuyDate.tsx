import { cn } from '@/lib/utils';
import { Calendar } from '@/assets/icons';

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const BuyDate = ({ className, children }: Props) => {
	return (
		<span className={cn('flex gap-x-[8px]', className)}>
			<Calendar width='15' height='15' className='inline' />
			<span className='text-[15px] font-normal leading-[18px] text-[#818181]'>
				{children}
			</span>
		</span>
	);
};
