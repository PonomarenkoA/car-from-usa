import { cn } from '@/lib/utils';
import { BuyDateTimer } from './BuyDateTimer';
import { BuyDate } from './BuyDate';
import { BuyPrice } from './BuyPrice';
import { BuyButtons } from './BuyButtons';
import { BuyButton } from './BuyButton';

type Props = {
	className?: string;
	children: React.ReactNode;
};

const Buy = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'rounded-[10px] bg-white p-[20px] text-center text-[15px] leading-[18px]',
				className
			)}
		>
			{children}
		</div>
	);
};

Buy.DateTimer = BuyDateTimer;
Buy.Date = BuyDate;
Buy.Price = BuyPrice;
Buy.Buttons = BuyButtons;
Buy.Button = BuyButton;

export default Buy;
