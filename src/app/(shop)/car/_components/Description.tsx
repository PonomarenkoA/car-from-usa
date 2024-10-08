import { Accordion } from '@/components';
import { Lot } from '@/types';

type Props = {
	item: Lot;
};

export const Description = ({ item }: Props) => {
	return (
		<Accordion className='w-full px-[30px]'>
			<Accordion.Header className='border-b-[1px] border-[#E9E9E9] py-[22px]'>
				<span>Description</span>
			</Accordion.Header>
			<Accordion.Content className='py-[22px]'>
				<p>
					{item.title} can be purchased at a US auction. The
					company&apos;s managers CarLink will help you with the
					application and safe delivery of the selected lot. We will
					bring the car at the best price. We have our own parking
					lots in ports. Therefore, the buyer receives a guarantee of
					reliable storage of the vehicle and control over the
					delivery of the car from the moment of purchase to its
					delivery to the customer. Our manager will help calculate:
					cost of a car with delivery; possible car repair costs;
					amount of collateral; cost of brokerage services; the amount
					of customs duties and payments when registering a car. Our
					employees inspect the car on the spot. Therefore, the buyer
					learns reliable information about the car. And thanks to
					well-established logistics, we will deliver the selected car
					quickly. Approximate delivery times are suggested to be
					specified in consultation with the company&apos;s manager
					CarLink.
				</p>
			</Accordion.Content>
		</Accordion>
	);
};
