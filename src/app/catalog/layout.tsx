import { Header } from '@/components';

export const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
