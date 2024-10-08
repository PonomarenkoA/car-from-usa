'use client';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Accept } from '@/assets/svgs';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className='flex items-center gap-x-[30px]'>
			<span className='text-[18px] font-medium leading-[22px] text-[#303030]'>
				Change Colors:
			</span>
			<div className='flex items-center gap-x-[30px]'>
				<Theme
					theme='theme1'
					primaryColor='bg-[#FFE600]'
					secondaryColor='bg-[#0075FF]'
				/>
				<Theme
					theme='theme2'
					primaryColor='bg-[#EF1B1A]'
					secondaryColor='bg-[#3E3E3E]'
				/>
				<Theme
					theme='theme3'
					primaryColor='bg-[#00C96E]'
					secondaryColor='bg-[#929293]'
				/>
				<Theme
					theme='theme4'
					primaryColor='bg-[#0042D7]'
					secondaryColor='bg-[#DF2323]'
				/>
				<Theme
					theme='theme5'
					primaryColor='bg-[#8600CB]'
					secondaryColor='bg-[#FFDE00]'
				/>
			</div>
		</div>
	);
};

type Props = {
	theme: string;
	primaryColor: string;
	secondaryColor: string;
};

const Theme = ({ theme, primaryColor, secondaryColor }: Props) => {
	const { theme: activeTheme, setTheme } = useTheme();

	const isActive = activeTheme === theme;

	return (
		<button
			onClick={() => setTheme(theme)}
			className={cn(
				'relative flex h-[44px] w-[44px] flex-wrap rounded-[5px] border-[2px]',
				`${isActive ? 'border-[#4BAE4F]' : 'border-[#FAFAFA]'}`
			)}
		>
			<div
				className={cn('h-[20px] w-1/2 rounded-tl-[4px]', primaryColor)}
			></div>
			<div
				className={cn(
					'h-[20px] w-1/2 rounded-tr-[4px]',
					secondaryColor
				)}
			></div>
			<div className=''></div>
			{isActive ? (
				<div className='absolute -bottom-[8px] left-[35%]'>
					<Accept width='16' height='16' />
				</div>
			) : (
				''
			)}
		</button>
	);
};
