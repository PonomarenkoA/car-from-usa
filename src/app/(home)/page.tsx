import {
	HowItWorks,
	WhatIsItFor,
	ServicePrices,
	Faq,
	StillHaveQuestions,
	Hero
} from './_components';

const HomePage = () => {
	return (
		<section className='relative'>
			<Hero />
			<div className='space-y-[63px] px-[70px]'>
				<HowItWorks />

				<WhatIsItFor />

				<ServicePrices />

				<Faq />

				<StillHaveQuestions />
			</div>
		</section>
	);
};

export default HomePage;
