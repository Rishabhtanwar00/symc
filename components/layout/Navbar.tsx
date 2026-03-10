'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useEffect, useState } from 'react';

const NAV_LINKS = ['Home', 'Services', 'About', 'Astrology', 'Contact'];

/* ── Sun icon ── */
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

/* ── Moon icon ── */
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

/* ── Theme Toggle Button ── */
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const [spinning, setSpinning] = useState(false);

	const handleToggle = () => {
		setSpinning(true);
		toggleTheme();
		setTimeout(() => setSpinning(false), 500);
	};

	const isDark = theme === 'dark';

	return (
		<button
			onClick={handleToggle}
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
			className={`
        relative flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.15em]
        border transition-all duration-300 cursor-pointer
        hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-deep)] hover:border-[var(--color-gold)]
      `}
			style={{
				borderColor: 'var(--color-gold-40)',
				color: 'var(--color-gold)',
				fontFamily: 'var(--font-cinzel)',
			}}
		>
			<span
				className={spinning ? 'animate-toggle-spin' : ''}
				style={{ display: 'flex' }}
			>
				{isDark ? <SunIcon /> : <MoonIcon />}
			</span>
			<span className='hidden lg:inline'>{isDark ? 'LIGHT' : 'DARK'}</span>
		</button>
	);
}

/* ── Navbar ── */
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
				background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
				backdropFilter: scrolled ? 'blur(16px)' : 'none',
				borderBottom: scrolled ? '1px solid var(--color-gold-12)' : 'none',
			}}
		>
			<div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
				{/* ── Logo ── */}
				<div className='flex items-center gap-3'>
					<span className='text-2xl' style={{ color: 'var(--color-gold)' }}>
						☽
					</span>
					<div>
						<div
							className='font-bold text-sm'
							style={{
								color: 'var(--color-gold)',
								fontFamily: 'var(--font-cinzel)',
								letterSpacing: '0.2em',
							}}
						>
							SYMC
						</div>
						<div
							className='text-[9px]'
							style={{
								color: 'var(--color-text-subtle)',
								letterSpacing: '0.15em',
							}}
						>
							SHREE YOGMAYA
						</div>
					</div>
				</div>

				{/* ── Desktop Links ── */}
				<div className='hidden md:flex items-center gap-8'>
					{NAV_LINKS.map((item) => (
						<a
							key={item}
							href='#'
							className='text-[13px] transition-colors duration-300 hover:text-[var(--color-gold)]'
							style={{
								color: 'var(--color-text-muted)',
								fontFamily: 'var(--font-cormorant)',
								letterSpacing: '0.15em',
							}}
						>
							{item.toUpperCase()}
						</a>
					))}

					{/* Theme Toggle */}
					<ThemeToggle />

					<a
						href='#'
						className='px-5 py-2 text-[11px] tracking-widest border transition-all duration-300
                       hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-deep)]'
						style={{
							borderColor: 'var(--color-gold)',
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
							letterSpacing: '0.15em',
						}}
					>
						BOOK SESSION
					</a>
				</div>

				{/* ── Mobile: Theme Toggle + Hamburger ── */}
				<div className='md:hidden flex items-center gap-4'>
					<ThemeToggle />
					<button
						className='flex flex-col gap-1.5'
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label='Toggle menu'
					>
						{[0, 1, 2].map((i) => (
							<span
								key={i}
								className='block w-6 h-px'
								style={{ background: 'var(--color-gold)' }}
							/>
						))}
					</button>
				</div>
			</div>

			{/* ── Mobile Menu ── */}
			{menuOpen && (
				<div
					className='md:hidden px-6 py-6 flex flex-col gap-5'
					style={{ background: 'var(--nav-mobile-bg)' }}
				>
					{[...NAV_LINKS, 'Book Session'].map((item) => (
						<a
							key={item}
							href='#'
							className='text-[11px] tracking-widest'
							style={{
								color: 'var(--color-gold)',
								fontFamily: 'var(--font-cinzel)',
								letterSpacing: '0.2em',
							}}
						>
							{item.toUpperCase()}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
