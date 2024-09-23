'use client';
import { clsx } from 'clsx';

interface ButtonProps {
	title: string;
	onClick: () => void;
	className?: string;
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
}

export const Button = (props: ButtonProps) => {
	const {
		title,
		onClick,
		className,
		leftIcon: LeftIcon,
		rightIcon: RightIcon
	} = props;
	return (
		<button
			onClick={onClick}
			className={clsx('flex flex-row items-center uppercase', className)}
		>
			{LeftIcon ? LeftIcon : null}
			<span>{title}</span>
			{RightIcon ? RightIcon : null}
		</button>
	);
};
