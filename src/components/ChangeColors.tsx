import { Accept } from '@/assets/svgs';

export const ChangeColors = () => {
	return (
		<div className='flex items-center gap-x-[30px]'>
			<span className='text-[18px] font-medium leading-[22px] text-[#303030]'>
				Change Colors:
			</span>
			<ul className='flex items-center gap-x-[30px]'>
				<li className='relative flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#4BAE4F]'>
					<div className='h-[20px] w-[20px] rounded-tl-[4px] bg-[#FFE600]'></div>
					<div className='h-[20px] w-[20px] rounded-tr-[4px] bg-[#0075FF]'></div>
					<div className=''></div>
					<div className='absolute -bottom-[8px] left-[35%]'>
						<Accept width='16' height='16' />
					</div>
				</li>
				<li className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'>
					<div className='h-[20px] w-[20px] rounded-tl-[4px] bg-[#EF1B1A]'></div>
					<div className='h-[20px] w-[20px] rounded-tr-[4px] bg-[#003688]'></div>
					<div className=''></div>
				</li>
				<li className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'>
					<div className='h-[20px] w-[20px] rounded-tl-[4px] bg-[#00C96E]'></div>
					<div className='h-[20px] w-[20px] rounded-tr-[4px] bg-[#FFC700]'></div>
					<div className=''></div>
				</li>
				<li className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'>
					<div className='h-[20px] w-[20px] rounded-tl-[4px] bg-[#0042D7]'></div>
					<div className='h-[20px] w-[20px] rounded-tr-[4px] bg-[#FF8500]'></div>
					<div className=''></div>
				</li>
				<li className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'>
					<div className='h-[20px] w-[20px] rounded-tl-[4px] bg-[#8600CB]'></div>
					<div className='h-[20px] w-[20px] rounded-tr-[4px] bg-[#FFDE00]'></div>
					<div className=''></div>
				</li>
			</ul>
		</div>
	);
};
