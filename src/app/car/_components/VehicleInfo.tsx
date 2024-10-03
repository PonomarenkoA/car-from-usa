import { SteeringWheel } from '@/assets/svgs';

export const VehicleInfo = () => {
	return (
		<>
			<div className='flex items-center justify-between border-b-[1px] border-b-[#E9E9E9] px-[29px] py-[22px]'>
				<span className='text-[15px] font-semibold leading-[18px] text-[#303030]'>
					Vehicle info:
				</span>
				<SteeringWheel width='24' height='24' />
			</div>
			<ul className='space-y-[13px] px-[29px] py-[22px] text-[15px] leading-[18px]'>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[187px] font-normal text-[#818181]'>
						Odometer:
					</span>
					<span className='font-medium text-[#303030]'>
						91 000 miles
					</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Condition:
					</span>
					<span className='font-medium text-[#303030]'>
						Run & Drive
					</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Keys:
					</span>
					<span className='font-medium text-[#303030]'>Yes</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Engine Type:
					</span>
					<span className='font-medium text-[#303030]'>
						Gasoline, 2.4L
					</span>
				</li>
				<li className='space-x-[12px]'>
					<span className='inline-block w-[188px] font-normal text-[#818181]'>
						Transmission:
					</span>
					<span className='font-medium text-[#303030]'>
						Automatic
					</span>
				</li>
			</ul>
		</>
	);
};
