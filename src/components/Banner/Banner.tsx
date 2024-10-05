import { cn } from '@/lib/utils';
import { BannerButton } from './BannerButton';
import { BannerContent } from './BannerContent';
import { BannerImage } from './BannerImage';
import { BannerTitle } from './BannerTitle';

type Props = {
	className?: string;
	children: React.ReactNode;
};

const Banner = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'flex gap-x-[70px] rounded-[10px] bg-primary px-[52px]',
				className
			)}
		>
			{children}
		</div>
	);
};

Banner.Image = BannerImage;
Banner.Content = BannerContent;
Banner.Title = BannerTitle;
Banner.Button = BannerButton;

export default Banner;
