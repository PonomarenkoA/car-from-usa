import {
	Header,
	Footer,
	HowItWorks,
	WhatIsItFor,
	ServicePrices,
	Faq,
	StillHaveQuestions,
	Hero
} from './_components';

export default function Home() {
	return (
		<>
			<Header />

			<main className='relative'>
				<Hero />
				<div className='space-y-[63px] px-[70px]'>
					<HowItWorks />

					<WhatIsItFor />

					<ServicePrices />

					<Faq />

					<StillHaveQuestions />
				</div>
			</main>

			<Footer />
		</>
	);
}
