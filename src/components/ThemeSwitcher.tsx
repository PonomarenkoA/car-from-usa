'use client';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Accept } from '@/assets/svgs';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className='flex items-center gap-x-[30px]'>
			<span className='text-[18px] font-medium leading-[22px] text-[#303030]'>
				Change Colors:
			</span>
			<ul className='flex items-center gap-x-[30px]'>
				<li>
					<button
						onClick={() => setTheme('theme1')}
						className='items relative flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#4BAE4F]'
					>
						<div className='h-[20px] w-1/2 rounded-tl-[4px] bg-[#FFE600]'></div>
						<div className='h-[20px] w-1/2 rounded-tr-[4px] bg-[#0075FF]'></div>
						<div className=''></div>
						<div className='absolute -bottom-[8px] left-[35%]'>
							<Accept width='16' height='16' />
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => setTheme('theme2')}
						className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'
					>
						<div className='h-[20px] w-1/2 rounded-tl-[4px] bg-[#EF1B1A]'></div>
						<div className='h-[20px] w-1/2 rounded-tr-[4px] bg-[#3E3E3E]'></div>
						<div className=''></div>
					</button>
				</li>
				<li>
					<button
						onClick={() => setTheme('theme3')}
						className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'
					>
						<div className='h-[20px] w-1/2 rounded-tl-[4px] bg-[#00C96E]'></div>
						<div className='h-[20px] w-1/2 rounded-tr-[4px] bg-[#929293]'></div>
						<div className=''></div>
					</button>
				</li>
				<li>
					<button
						onClick={() => setTheme('theme4')}
						className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'
					>
						<div className='h-[20px] w-1/2 rounded-tl-[4px] bg-[#0042D7]'></div>
						<div className='h-[20px] w-1/2 rounded-tr-[4px] bg-[#DF2323]'></div>
						<div className=''></div>
					</button>
				</li>
				<li>
					<button
						onClick={() => setTheme('theme5')}
						className='flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px] border-[#FAFAFA]'
					>
						<div className='h-[20px] w-1/2 rounded-tl-[4px] bg-[#8600CB]'></div>
						<div className='h-[20px] w-1/2 rounded-tr-[4px] bg-[#FFDE00]'></div>
						<div className=''></div>
					</button>
				</li>
			</ul>
		</div>
	);
};
