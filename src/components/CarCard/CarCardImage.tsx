import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
	className?: string;
};

export const CarCardImage = ({ className }: Props) => {
	return (
		<div className={cn('relative h-[195px] w-[280px]', className)}>
			<Image src='/foto1.png' fill alt='' className='object-cover' />
		</div>
	);
};
