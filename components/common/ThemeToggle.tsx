'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const [spinning, setSpinning] = useState(false);

	const handleToggle = () => {
		setSpinning(true);
		toggleTheme();
		setTimeout(() => setSpinning(false), 500);
	};

	return (
		<button
			onClick={handleToggle}
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
			className='flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.15em] font-cinzel font-semibold
                 text-gold border border-gold-60
                 hover:bg-gold hover:text-deep hover:border-gold
                 transition-all duration-300 cursor-pointer'
		>
			<span className={`flex ${spinning ? 'animate-toggle-spin' : ''}`}>
				{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
			</span>
			<span className='hidden lg:inline'>
				{theme === 'dark' ? 'LIGHT' : 'DARK'}
			</span>
		</button>
	);
};

export default ThemeToggle;
