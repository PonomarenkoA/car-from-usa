'use client';

import { cn } from '@/lib/utils';

interface ButtonProps {
	title?: string;
	children?: React.ReactNode;
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
		rightIcon: RightIcon,
		children
	} = props;
	return (
		<button
			onClick={onClick}
			className={cn(
				'flex flex-row items-center justify-center rounded-[10px]',
				className
			)}
		>
			{LeftIcon ? LeftIcon : null}
			{title ? <span>{title}</span> : null}
			{children ? children : null}
			{RightIcon ? RightIcon : null}
		</button>
	);
};
