import { Accident } from '@/assets/svgs';
import { Accordion, List } from '@/components';
import { Lot } from '@/types';

type Props = {
	item: Lot;
};

export const DamageInfo = async ({ item }: Props) => {
	return (
		<Accordion className='w-full'>
			<Accordion.Header className='border-b-[1px] border-[#E9E9E9] px-[30px] py-[22px]'>
				<span>Damage Info:</span>
				<Accident width='24' heigth='24' />
			</Accordion.Header>
			<Accordion.Content className='px-[30px] py-[22px]'>
				<List className='space-y-[13px]'>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Loss:'
					>
						{item.loss}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Primary Damage:'
					>
						{item.damage_first}
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Secondary Damage:'
					>
						{item.damage_second}
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
