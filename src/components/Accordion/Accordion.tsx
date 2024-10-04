import { cn } from '@/lib/utils';
import { AccordionHeader } from './AccordionHeader';
import { AccordionItem } from './AccordionItem';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';

type Props = {
	className?: string;
	children: React.ReactNode;
};

const Accordion = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'rounded-[10px] bg-white text-[15px] leading-[18px]',
				className
			)}
		>
			{children}
		</div>
	);
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
Accordion.Trigger = AccordionTrigger;

export default Accordion;
