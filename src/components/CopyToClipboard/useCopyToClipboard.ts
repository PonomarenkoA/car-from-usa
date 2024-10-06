import { useEffect, useState } from 'react';

export const useCopyToClipboard = () => {
	const [copied, setCopied] = useState<boolean>(false);

	const writeText = async (text: string) => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
	};

	useEffect(() => {
		if (!copied) return;

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}, [copied]);

	return {
		copied,
		writeText
	};
};
