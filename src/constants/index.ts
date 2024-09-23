import {
	Application,
	Hiring,
	Resume,
	SecureShield,
	Traffic,
	WebDesign
} from '@/assets/svgs';
import {
	FaqItem,
	HowItWorkItem,
	ServicePriceItem,
	WhatIsItForItem
} from '@/types';

export const FaqItems: FaqItem[] = [
	{
		title: 'How often will the list of lots on my website be updated?',
		description:
			'Updates every hour. That is why you are always on the site lots will be relevant.'
	},
	{
		title: 'From which auctions will I receive lots?',
		description: ''
	},
	{
		title: 'Is it possible to connect a calculator to the site so that people can do the math themselves auto?',
		description: ''
	},
	{
		title: 'How will I receive applications?',
		description: ''
	},
	{
		title: 'Where will applications come?',
		description: ''
	},
	{
		title: 'Can I make a notification on my phone if I have an application?',
		description: ''
	},
	{
		title: 'Can I design the catalog myself the way I want?',
		description: ''
	},
	{
		title: 'What do you need to connect? And how long will it take?',
		description: ''
	},
	{
		title: 'If I take the Base tariff, will the catalog be visually different from my site?',
		description: ''
	}
];

export const ServicePricesItems: ServicePriceItem[] = [
	{
		title: 'Base',
		period: 'per month',
		price: '$150',
		items: [
			{ title: 'First Payment:', value: 'No' },
			{ title: 'Unique Design:', value: 'No' },
			{ title: 'History of Car Sales:', value: 'No' },
			{ title: 'Google Indexing:', value: 'Yes' },
			{ title: 'Lot Removal After Bidding:', value: 'Yes' }
		]
	},
	{
		title: 'Profi',
		period: 'per month',
		price: '$150',
		items: [
			{ title: 'First Payment:', value: '$1000' },
			{ title: 'Unique Design:', value: 'Yes' },
			{ title: 'History of Car Sales:', value: 'No' },
			{ title: 'Google Indexing:', value: 'Yes' },
			{ title: 'Lot Removal After Bidding:', value: 'Yes' }
		]
	},
	{
		title: 'Business',
		period: 'per month',
		price: '$500',
		items: [
			{ title: 'First Payment:', value: 'Custom' },
			{ title: 'Unique Design:', value: 'Yes' },
			{ title: 'History of Car Sales:', value: 'Yes' },
			{ title: 'Google Indexing:', value: 'Yes' },
			{ title: 'Lot Removal After Bidding:', value: 'No' }
		]
	}
];

export const HowItWorkItems: HowItWorkItem[] = [
	{
		title: 'Design Adaptation',
		description:
			'We will contact you and tell you all the details, as well as answer all your questions.',
		icon: Resume
	},
	{
		title: 'Catalog Integration',
		description:
			'We adjusts the color of the catalog to your website design, or makes a unique design for you.',
		icon: WebDesign
	},
	{
		title: 'Submit an Application',
		description:
			'The catalog appears on the subdomain of your site and can accept applications customers.',
		icon: Application
	}
];

export const WhatIsItForItems: WhatIsItForItem[] = [
	{
		title: 'Increasing Traffic to Your Site',
		description:
			'The catalog will be available for the Google search engine.',
		icon: Traffic
	},
	{
		title: 'Increase in Potential Customers',
		description: 'People will apply directly from the catalog.',
		icon: Hiring
	},
	{
		title: 'ncreasing Trust in Your Company',
		description:
			'After all, only the big ones companies have car catalogs.',
		icon: SecureShield
	}
];
