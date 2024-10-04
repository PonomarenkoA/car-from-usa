import { CarCardImage } from './CarCardImage';
import { CarCardContent } from './CarCardContent';
import { CarCardTitle } from './CarCardTitle';
import { CarCardDetails } from './CarCardDetails';
import { cn } from '@/lib/utils';
import { CarCardBody } from './CarCardBody';

type Props = {
	className?: string;
	children: React.ReactNode;
};

const CarCard = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'h-[235px] w-full rounded-[10px] border-[1px] border-[#E9E9E9] bg-white',
				className
			)}
		>
			{children}
		</div>
	);
};

CarCard.Body = CarCardBody;
CarCard.Image = CarCardImage;
CarCard.Content = CarCardContent;
CarCard.Title = CarCardTitle;
CarCard.Details = CarCardDetails;

export default CarCard;
