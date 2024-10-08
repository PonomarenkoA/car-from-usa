import { FilterCard } from '@/components';
import {
	CarBrandItems,
	AuctionTypeItems,
	CarModelItems,
	DamageItems,
	ConditionItems,
	DocumentTypeItems
} from '@/constants';

export const Filter = () => {
	return (
		<div className='rounded-[10px] bg-white'>
			<FilterCard title='Auction Type' items={AuctionTypeItems} />
			<FilterCard title='Car Brand' items={CarBrandItems} />
			<FilterCard title='Car Model' items={CarModelItems} />
			<FilterCard title='Damage' items={DamageItems} />
			<FilterCard title='Condition' items={ConditionItems} />
			<FilterCard title='Document Type' items={DocumentTypeItems} />
		</div>
	);
};
