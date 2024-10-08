import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
	src: string;
	className?: string;
};

export const CarCardImage = ({ src, className }: Props) => {
	return (
		<div className={cn('relative h-full w-[280px]', className)}>
			<Image
				src={src}
				fill
				alt=''
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				className='h-auto w-auto object-cover'
				priority
			/>
		</div>
	);
};
