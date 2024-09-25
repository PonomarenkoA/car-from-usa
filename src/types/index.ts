export type FaqItem = {
	title: string;
	description: string;
};

export type ServicePriceItem = {
	title: string;
	period: string;
	price: string;
	items: {
		title: string;
		value: string;
	}[];
};

export type HowItWorkItem = {
	title: string;
	description: string;
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type WhatIsItForItem = {
	title: string;
	description: string;
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type FilterItem = {
	title: string;
	isSelected: boolean;
};
