import { useContext } from 'react';
import { CarCardContext } from './CarCardContext';

export const useCarCardContext = () => {
	const context = useContext(CarCardContext);

	if (!context) {
		throw new Error('CarCardContext must be used within a CarCard');
	}

	return context;
};
