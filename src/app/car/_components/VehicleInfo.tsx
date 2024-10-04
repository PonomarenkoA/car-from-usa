import { SteeringWheel } from '@/assets/svgs';
import { Accordion, List } from '@/components';

export const VehicleInfo = () => {
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
						<span>91 000 miles</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Condition:'
					>
						<span>Run & Drive</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Keys:'
					>
						<span>Yes</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Engine Type:'
					>
						<span>Gasoline, 2.4L</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[187px_1fr]'
						title='Transmission:'
					>
						<span>Automatic</span>
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
