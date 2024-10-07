import { Header } from '@/components';

export default function CatalogLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}
