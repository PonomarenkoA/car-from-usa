'use client';
import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';

export const defaultTheme = 'theme1';

export interface ThemeContextType {
	theme?: string | undefined;
	setTheme: React.Dispatch<SetStateAction<string | undefined>>;
}

const initialContext: ThemeContextType = {
	theme: undefined,
	setTheme: () => ''
};

const ThemeContext = createContext(initialContext);

const storageKey = 'Theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<string | undefined>(undefined);

	useEffect(() => {
		const oldTheme = localStorage.getItem(storageKey);
		let newTheme = '';

		if (oldTheme) {
			newTheme = oldTheme;
		} else {
			newTheme = defaultTheme;
		}

		setTheme(newTheme);
		localStorage.setItem(storageKey, newTheme as string);
		document.documentElement.classList.add(newTheme as string);
	}, []);

	useEffect(() => {
		const oldTheme = localStorage.getItem(storageKey);

		if (theme) {
			if (oldTheme) {
				document.documentElement.classList.remove(oldTheme);
			}

			localStorage.setItem(storageKey, theme as string);
			document.documentElement.classList.add(theme as string);
		}
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
