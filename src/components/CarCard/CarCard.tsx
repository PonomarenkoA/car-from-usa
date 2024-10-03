import { CarCardImage } from './CarCardImage';
import { CarCardContent } from './CarCardContent';
import { CarCardBuy } from './CarCardBuy';
import { CarCardTitle } from './CarCardTitle';
import { CarCardDetails } from './CarCardDetails';
import { cn } from '@/lib/utils';
import { CarCardButtons } from './CarCardButtons';
import { CarCardButton } from './CarCardButton';
import { CarCardPrice } from './CarCardPrice';
import { CarCardDateTimer } from './CarCardDateTimer';
import { CarCardDate } from './CarCardDate';
import { CarCardTimer } from './CarCardTimer';
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
CarCard.Buy = CarCardBuy;
CarCard.Title = CarCardTitle;
CarCard.Details = CarCardDetails;
CarCard.Buttons = CarCardButtons;
CarCard.Button = CarCardButton;
CarCard.Price = CarCardPrice;
CarCard.DateTimer = CarCardDateTimer;
CarCard.Date = CarCardDate;
CarCard.Timer = CarCardTimer;

export default CarCard;
