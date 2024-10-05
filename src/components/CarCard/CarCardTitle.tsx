type Props = {
	children: React.ReactNode;
};

export const CarCardTitle = ({ children }: Props) => {
	return (
		<p className='texy-[21px] font-semibold leading-[26px] text-[#303030]'>
			{children}
		</p>
	);
};
