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

export type Lot = {
	lot_id: string;
	title: string;
	auction: string;
	status: string;
	location: string;
	odometer: number;
	vin: string;
	damage_first: string;
	auction_date: string;
	price_buynow: number;
	images: string[];
	loss: string;
	damage_second: string | null;
	state: string;
	document: string;
	seller: string | null;
	keys: string;
	engine: string;
	transmission: string;
};
