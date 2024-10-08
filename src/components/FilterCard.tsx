'use client';
import { Cancel, DownArrow } from '@/assets/icons';
import { FilterItem } from '@/types';
import { useEffect, useState } from 'react';

interface FilterCardProps {
	title: string;
	items: FilterItem[];
}

export const FilterCard = ({ title, items }: FilterCardProps) => {
	const [isOpen, setIsOpen] = useState(true);
	const [values, setValues] = useState<FilterItem[]>(items || []);
	const [filteredValues, setFilteredValues] = useState<FilterItem[]>([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		if (filter) {
			return setFilteredValues(
				values.filter(f =>
					f.title
						.toLocaleLowerCase()
						.includes(filter.toLocaleLowerCase())
				)
			);
		}

		setFilteredValues(values);
	}, [values, filter]);

	const onDelete = (value: string) => {
		setValues(prevState => {
			const newState = [...prevState];
			const newVal = newState.find(f => f.title === value);
			if (newVal) {
				newVal.isSelected = false;
			}
			return newState;
		});
	};

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		value: string
	) => {
		setValues(prevState => {
			const newState = [...prevState];
			const newVal = newState.find(f => f.title === value);
			if (newVal) {
				newVal.isSelected = e.target.checked;
			}
			return newState;
		});
	};

	return (
		<div className='space-y-[16px] border-b-[1px] border-[#E9E9E9] p-[30px]'>
			<div className='space-y-[15px]'>
				<div className='flex items-center justify-between'>
					<span className='leading-18px text-[15px] font-semibold text-[#303030]'>
						{title}
					</span>
					<button onClick={() => setIsOpen(prevState => !prevState)}>
						<DownArrow width='10' height='10' />
					</button>
				</div>
				<ul className='space-y-[11px] text-[13px] font-normal leading-[16px] text-[#303030]'>
					{values
						? values
								.filter(f => f.isSelected)
								.map(val => (
									<li
										className='flex items-center gap-x-[10px]'
										key={val.title}
									>
										<label>{val.title}</label>
										<button
											onClick={() => onDelete(val.title)}
										>
											<Cancel
												width='11'
												height='11'
												fill='#F72525'
											/>
										</button>
									</li>
								))
						: null}
				</ul>
			</div>
			{isOpen ? (
				<div className='space-y-[20px]'>
					{values.length > 10 ? (
						<input
							className='rounded-[3px] border-[1px] border-[#E9E9E9] px-[20px] py-[12px] text-[13px] font-normal leading-[16px] text-[#818181] outline-none'
							placeholder='Search'
							value={filter}
							onChange={e => setFilter(e.target.value)}
						/>
					) : null}
					<ul className='max-h-[250px] space-y-[10px] overflow-y-auto'>
						{filteredValues
							? filteredValues.map(val => (
									<li
										key={val.title}
										className='flex items-center gap-x-[10px]'
									>
										<input
											type='checkbox'
											className='h-[15px] w-[15px] border-[1px] border-[#E9E9E9]'
											checked={val.isSelected}
											onChange={e =>
												onChange(e, val.title)
											}
										/>
										<label className='text-[13px] font-normal leading-[16px] text-[#303030]'>
											{val.title}
										</label>
									</li>
								))
							: null}
					</ul>
				</div>
			) : null}
		</div>
	);
};
