import { Info } from '@/assets/svgs';
import { Accordion, CopyToClipboard, List } from '@/components';

export const AuctionInfo = () => {
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
						<CopyToClipboard text='1HGCV2F38MA025435' />
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Lot ID:'
					>
						<CopyToClipboard text='374556699' />
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='State:'
					>
						<span>IN</span>
					</List.Item>

					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Location:'
					>
						<span>Indianapolis</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Documet:'
					>
						<span>Clean</span>
					</List.Item>
					<List.Item
						className='grid grid-cols-[425px_1fr]'
						title='Seller:'
					>
						<span>VRD Wholesale Dealer</span>
					</List.Item>
				</List>
			</Accordion.Content>
		</Accordion>
	);
};
