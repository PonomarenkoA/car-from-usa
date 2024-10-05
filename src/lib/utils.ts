import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	}).format(value);

export const formatNumber = (value: number) =>
	new Intl.NumberFormat('en-US').format(value);

export const formatDate = (value: string) =>
	new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	})
		.format(new Date(value))
		.split('/')
		.join('.');

export const formatMiles = (value: number) =>
	Intl.NumberFormat('en-US', {
		style: 'unit',
		unit: 'mile',
		unitDisplay: 'short'
	})
		.format(value)
		.split(',')
		.join(' ');
