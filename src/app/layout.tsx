import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

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
				className={`${montserrat.className} relative mx-auto max-w-[1280px] overflow-x-hidden antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
