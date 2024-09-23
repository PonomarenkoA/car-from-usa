import { HowItWorkItem } from '@/types';

interface HowItWorkCardProps {
	item: HowItWorkItem;
}

export const HowItWorkCard = (props: HowItWorkCardProps) => {
	const { title, icon: Icon, description } = props.item;

	return (
		<div className='w-[258px]'>
			<Icon />
			<h3 className='mt-7'>{title}</h3>
			<p className='mt-[10px] text-[15px] font-medium leading-6'>
				{description}
			</p>
		</div>
	);
};
