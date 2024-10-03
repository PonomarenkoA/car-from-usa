import { Info } from '@/assets/svgs';
import { CopyToClipboard } from '@/components';

export const AuctionInfo = () => {
	return (
		<>
			<div className='flex items-center justify-between border-b-[1px] border-b-[#E9E9E9] px-[29px] py-[22px]'>
				<span className='text-[15px] font-semibold leading-[18px] text-[#303030]'>
					Auction info:
				</span>
				<Info width='23' height='24' />
			</div>
			<ul className='space-y-[13px] px-[29px] py-[22px] text-[15px] leading-[18px]'>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						VIN Code:
					</span>
					<span className='flex items-center gap-x-[5px] font-medium text-[#303030]'>
						<CopyToClipboard text='1HGCV2F38MA025435' />
					</span>
				</li>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						Lot ID:
					</span>
					<span className='font-medium text-[#303030]'>
						<CopyToClipboard text='374556699' />
					</span>
				</li>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						State:
					</span>
					<span className='font-medium text-[#303030]'>IN</span>
				</li>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						Location:
					</span>
					<span className='font-medium text-[#303030]'>
						Indianapolis
					</span>
				</li>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						Documet:
					</span>
					<span className='font-medium text-[#303030]'>Clean</span>
				</li>
				<li className='flex items-center gap-x-[12px]'>
					<span className='w-[425px] font-normal text-[#818181]'>
						Seller:
					</span>
					<span className='font-medium text-[#303030]'>
						VRD Wholesale Dealer
					</span>
				</li>
			</ul>
		</>
	);
};
