import { useState, useEffect } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (deadline: string) => {
	const [timespan, setTimespan] = useState(Date.parse(deadline) - Date.now());

	useEffect(() => {
		const interval = setInterval(() => {
			setTimespan(Date.parse(deadline) - Date.now());
		}, MINUTE);

		return () => {
			clearInterval(interval);
		};
	}, [deadline]);

	return {
		days: Math.floor(timespan / DAY),
		hours: Math.floor((timespan / HOUR) % 24),
		minutes: Math.floor((timespan / MINUTE) % 60)
	};
};
