import { FaqCard } from '@/components/FaqCard';
import { FaqItems } from '@/constants';

export const Faq = () => {
	return (
		<div className='space-y-11' id='faq'>
			<h2 className='text-center uppercase'>FAQ</h2>

			<div className='space-y-5'>
				{FaqItems.map((item, index) => (
					<FaqCard
						key={index}
						title={`${index + 1}. ${item.title}`}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};
