'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
	theme: 'dark',
	toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark');

	// Persist across reloads
	useEffect(() => {
		const saved = localStorage.getItem('symc-theme') as Theme | null;
		if (saved) setTheme(saved);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute('data-theme', theme);
		localStorage.setItem('symc-theme', theme);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
