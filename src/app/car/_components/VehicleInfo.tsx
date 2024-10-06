import { SteeringWheel } from '@/assets/svgs';
import { Accordion, List } from '@/components';
import { formatMiles } from '@/lib/utils';
import { Lot } from '@/types';

type Props = {
	item: Lot;
};

export const VehicleInfo = ({ item }: Props) => {
	return (
		<Accordion className='w-[370px]'>
			<Accordion.Header className='border-b-[1px] border-[#E9E9E9] px-[30px] py-[22px]'>
				<span>Damage Info:</span>
				<SteeringWheel width='24' heigth='24' />
			</Accordion.Header>
			<Accordion.Content className='px-[30px] py-[22px]'>
				<List className='space-y-[13px]'>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Odometer:'
					>
						{formatMiles(item.odometer)}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Condition:'
					>
						{item.status}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Keys:'
					>
						{item.keys}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Engine Type:'
					>
						{item.engine}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Transmission:'
					>
						{item.transmission}
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
