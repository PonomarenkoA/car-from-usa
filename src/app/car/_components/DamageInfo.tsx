import { Accident } from '@/assets/svgs';
import { Accordion, List } from '@/components';

export const DamageInfo = () => {
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
						<span>Collision</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Primary Damage:'
					>
						<span>Right Side</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Secondary Damage:'
					>
						<span>Front end</span>
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
