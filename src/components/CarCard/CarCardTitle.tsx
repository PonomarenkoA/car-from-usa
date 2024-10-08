type Props = {
	children: React.ReactNode;
};

export const CarCardTitle = ({ children }: Props) => {
	return (
		<div className='flex items-center justify-between text-[21px] font-semibold leading-[26px] text-[#303030]'>
			{children}
		</div>
	);
};
