'use client';
import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5';

export const defaultTheme = 'theme1';

export interface ThemeContextType {
	theme?: Theme | null;
	setTheme: React.Dispatch<SetStateAction<string>>;
}

const initialContext: ThemeContextType = {
	theme: null,
	setTheme: () => ''
};

const ThemeContext = createContext(initialContext);

const storageKey = 'Theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme | undefined>(undefined);

	useEffect(() => {
		const oldTheme = localStorage.getItem(storageKey);
		if (oldTheme) {
			document.documentElement.classList.remove(oldTheme);
		}

		document.documentElement.classList.add(theme);
		localStorage.setItem(storageKey, theme);

		//document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
