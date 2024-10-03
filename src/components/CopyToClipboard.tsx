'use client';
import { Check, Copy } from '@/assets/svgs';
import { useEffect, useState } from 'react';

interface Props {
	text: string;
}

export const CopyToClipboard = ({ text }: Props) => {
	const [copied, setCopied] = useState<boolean>(false);

	useEffect(() => {
		if (!copied) return;

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}, [copied]);

	return (
		<div className='flex items-center gap-x-[5px]'>
			<span>{text}</span>
			<button
				onClick={async () => {
					await navigator.clipboard.writeText(text);
					setCopied(true);
				}}
			>
				{copied ? (
					<Check width='15' height='15' fill='#00C96E' />
				) : (
					<Copy width='15' height='15' />
				)}
			</button>
		</div>
	);
};
