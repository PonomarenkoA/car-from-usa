import { Info } from '@/assets/icons';
import { Accordion, CopyToClipboard, List } from '@/components';
import { Lot } from '@/types';

type Props = {
	item: Lot;
};

export const AuctionInfo = async ({ item }: Props) => {
	return (
		<Accordion className='w-[820px]'>
			<Accordion.Header className='border-b-[1px] border-[#E9E9E9] px-[30px] py-[22px]'>
				<span>Auction info:</span>
				<Info width='24' heigth='24' />
			</Accordion.Header>
			<Accordion.Content className='px-[30px] py-[22px]'>
				<List className='space-y-[13px]'>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='VIN Code:'
					>
						<CopyToClipboard text={item.vin} />
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Lot ID:'
					>
						<CopyToClipboard text={item.lot_id} />
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='State:'
					>
						{item.state}
					</List.Item>

					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Location:'
					>
						{item.location}
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Documet:'
					>
						{item.document}
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Seller:'
					>
						{item.seller}
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
