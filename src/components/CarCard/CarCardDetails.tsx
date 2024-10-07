import { cn } from '@/lib/utils';
import { List } from '../List';
import { Lot } from '@/types';

type Props = {
	item: Lot;
	className?: string;
};

export const CarCardDetails = ({ item, className }: Props) => {
	return (
		<List
			className={cn(
				'mt-[16px] grid grid-cols-[140px_170px] gap-x-[20px] gap-y-[10px]',
				className
			)}
		>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='Condition:'
			>
				{item.status}
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='VIN Code:'
			>
				{item.vin}
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='Location:'
			>
				{item.location}
			</List.Item>
			<List.Item className='flex flex-col leading-[20px]' title='Lot ID:'>
				{item.lot_id}
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='Odometer:'
			>
				<span>{item.odometer} miles</span>
			</List.Item>
			<List.Item className='flex flex-col leading-[20px]' title='Damage:'>
				{item.damage_first}
			</List.Item>
		</List>
	);
};
