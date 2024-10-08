'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Email } from '@/assets/icons';
import { Button } from '@/components/ui';

export const Header = () => {
	return (
		<header className='absolute z-20 w-full bg-transparent px-16 py-9 text-white'>
			<nav className='flex items-center'>
				<Link href='/'>
					<Image src='/png-7.svg' alt='' width={220} height={45} />
				</Link>

				<ul className='ml-[168px] flex items-center gap-12 uppercase'>
					<li>
						<a href='#how-it-works'>HOW IT WORKS</a>
					</li>
					<li>
						<a href='#what-is-it-for'>WHAT IS IT FOR</a>
					</li>
					<li>
						<a href='#service-prices'>PRICES</a>
					</li>
					<li>
						<a href='#faq'>FAQ</a>
					</li>
				</ul>

				<a href='#still-have-questions'>
					<Button
						title='CONTACT US'
						leftIcon={<Email fill='#FFFFFF' />}
						onClick={() => {
							console.log('OnClick');
						}}
						className='ml-[50px] gap-2.5 rounded-xl bg-secondary px-7 py-6 text-[13px] font-bold leading-4 text-secondary-foreground'
					/>
				</a>
			</nav>
		</header>
	);
};
