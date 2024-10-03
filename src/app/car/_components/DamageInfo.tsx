import { Accident } from '@/assets/svgs';

export const DamageInfo = () => {
	return (
		<>
			<div className='flex items-center justify-between border-b-[1px] border-b-[#E9E9E9] px-[29px] py-[22px]'>
				<span className='text-[15px] font-semibold leading-[18px] text-[#303030]'>
					Damage Info:
				</span>
				<Accident width='23' height='24' />
			</div>
			<ul className='space-y-[13px] px-[29px] py-[22px] text-[15px] leading-[18px]'>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[187px] font-normal text-[#818181]'>
						Loss:
					</span>
					<span className='font-medium text-[#303030]'>
						Collision
					</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Primary Damage:
					</span>
					<span className='font-medium text-[#303030]'>
						Right Side
					</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Secondary Damage:
					</span>
					<span className='font-medium text-[#303030]'>
						Front end
					</span>
				</li>
			</ul>
		</>
	);
};
