import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Suspense } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CarLink',
	description: 'CarLink - Car from USA'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} relative mx-auto max-w-[1280px] overflow-x-hidden pb-[70px] antialiased`}
			>
				<Providers>
					<Suspense fallback={<div>Loading...</div>}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
