'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import Link from 'next/link';

const NAV_LINKS = ['Home', 'Services', 'About', 'Astrology', 'Contact'];

function SunIcon() {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='4' />
			<line x1='12' y1='2' x2='12' y2='5' />
			<line x1='12' y1='19' x2='12' y2='22' />
			<line x1='4.22' y1='4.22' x2='6.34' y2='6.34' />
			<line x1='17.66' y1='17.66' x2='19.78' y2='19.78' />
			<line x1='2' y1='12' x2='5' y2='12' />
			<line x1='19' y1='12' x2='22' y2='12' />
			<line x1='4.22' y1='19.78' x2='6.34' y2='17.66' />
			<line x1='17.66' y1='6.34' x2='19.78' y2='4.22' />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			width='15'
			height='15'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
		</svg>
	);
}

function ThemeToggle() {
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
}

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav
			className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
			style={{
				/* Dynamic scrolled state — can't be static Tailwind classes */
				background: scrolled ? 'var(--nav-scrolled)' : 'transparent',
				backdropFilter: scrolled ? 'blur(16px)' : 'none',
				borderBottom: scrolled ? '1px solid var(--color-gold-12)' : 'none',
			}}
		>
			<div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
				{/* Logo */}
				<div className='flex items-center gap-3'>
					<span className='text-2xl text-gold'>☽</span>
					<div>
						<div className='font-bold text-sm font-cinzel text-gold tracking-[0.2em]'>
							SYMC
						</div>
						<div className='text-[9px] text-subtle tracking-[0.15em]'>
							SHREE YOGMAYA
						</div>
					</div>
				</div>

				{/* Desktop Links */}
				<div className='hidden md:flex items-center gap-8'>
					{NAV_LINKS.map((item) => (
						<Link
							key={item}
							href='#'
							className='text-[13px] font-cormorant text-muted tracking-[0.15em] hover:text-gold transition-colors duration-300'
						>
							{item.toUpperCase()}
						</Link>
					))}

					<ThemeToggle />

					<Link
						href='/'
						className='px-5 py-2 text-[11px] font-cinzel tracking-[0.15em]
                       text-gold border border-gold
                       hover:bg-gold hover:text-deep
                       transition-all duration-300'
					>
						BOOK SESSION
					</Link>
				</div>

				{/* Mobile: Toggle + Hamburger */}
				<div className='md:hidden flex items-center gap-4'>
					<ThemeToggle />

					<button
						className='relative flex flex-col justify-center items-center w-8 h-8'
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label='Toggle menu'
					>
						<span
							className={`absolute w-6 h-[1.5px] bg-gold rounded-full transition-all duration-300 ${
								menuOpen ? 'rotate-45' : '-translate-y-2'
							}`}
						/>

						<span
							className={`absolute w-6 h-[1.5px] bg-gold rounded-full transition-all duration-300 ${
								menuOpen ? 'opacity-0' : 'opacity-100'
							}`}
						/>

						<span
							className={`absolute w-6 h-[1.5px] bg-gold rounded-full transition-all duration-300 ${
								menuOpen ? '-rotate-45' : 'translate-y-2'
							}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					className='md:hidden px-6 py-6 flex flex-col gap-5'
					style={{ background: 'var(--nav-mobile)' }}
				>
					{[...NAV_LINKS, 'Book Session'].map((item) => (
						<a
							key={item}
							href='#'
							className='text-[11px] font-cinzel text-gold tracking-[0.2em]'
						>
							{item.toUpperCase()}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
