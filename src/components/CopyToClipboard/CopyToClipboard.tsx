'use client';
import { Check, Copy } from '@/assets/svgs';
import { useCopyToClipboard } from './useCopyToClipboard';

interface Props {
	text: string;
}

export const CopyToClipboard = ({ text }: Props) => {
	const { copied, writeText } = useCopyToClipboard();

	return (
		<div className='flex items-center gap-x-[5px]'>
			<span>{text}</span>
			<button
				onClick={async () => {
					await writeText(text);
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
