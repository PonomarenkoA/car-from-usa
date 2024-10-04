import { cn } from '@/lib/utils';
import { List } from '../List';

type Props = {
	className?: string;
};

export const CarCardDetails = ({ className }: Props) => {
	return (
		// <ul
		// 	className={cn(
		// 		'mt-[16px] grid grid-cols-[140px_170px] gap-x-[20px] gap-y-[10px] text-[15px] font-normal leading-[20px]',
		// 		className
		// 	)}
		// >
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>Condition:</span>
		// 		<span className='font-medium text-[#303030]'>Run & Drive</span>
		// 	</li>
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>VIN Code:</span>
		// 		<span className='font-medium text-[#303030]'>
		// 			1HGCV2F38MA025435
		// 		</span>
		// 	</li>
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>Location:</span>
		// 		<span className='font-medium text-[#303030]'>
		// 			Indianapolis (IN)
		// 		</span>
		// 	</li>
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>Lot ID:</span>
		// 		<span className='font-medium text-[#303030]'>37544645</span>
		// 	</li>
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>Odometer:</span>
		// 		<span className='font-medium text-[#303030]'>97 000 miles</span>
		// 	</li>
		// 	<li className='flex flex-col'>
		// 		<span className='text-[#818181]'>Damage:</span>
		// 		<span className='font-medium text-[#303030]'>Front end</span>
		// 	</li>
		// </ul>

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
				<span>Run & Drive</span>
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='VIN Code:'
			>
				<span>1HGCV2F38MA025435</span>
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='Location:'
			>
				<span>Indianapolis (IN)</span>
			</List.Item>
			<List.Item className='flex flex-col leading-[20px]' title='Lot ID:'>
				<span>37544645</span>
			</List.Item>
			<List.Item
				className='flex flex-col leading-[20px]'
				title='Odometer:'
			>
				<span>97 000 miles</span>
			</List.Item>
			<List.Item className='flex flex-col leading-[20px]' title='Damage:'>
				<span>Front end</span>
			</List.Item>
		</List>
	);
};
