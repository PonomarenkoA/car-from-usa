import { Header } from '@/components';

export default function CatalogLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen bg-[#FAFAFA]'>
			<Header />
			<main className='flex-1 px-[30px] py-[20px]'>{children}</main>
		</div>
	);
}
