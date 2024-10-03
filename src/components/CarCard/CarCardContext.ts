import { createContext } from 'react';

type CarCardContext = {
	car: string;
};

export const CarCardContext = createContext<CarCardContext | undefined>(
	undefined
);
