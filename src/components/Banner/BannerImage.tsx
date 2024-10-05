import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
	src: string;
	className?: string;
};

export const BannerImage = ({ src, className }: Props) => {
	return (
		<div className={cn('relative min-h-[240px] min-w-[365px]', className)}>
			<Image
				src={src}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				alt=''
				className='h-auto w-auto'
				priority
			/>
		</div>
	);
};
