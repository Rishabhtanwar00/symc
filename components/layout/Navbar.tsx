'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '../common/ThemeToggle';

const NAV_LINKS = ['Home', 'Services', 'About', 'Astrology', 'Contact'];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-nav-scrolled backdrop-blur-[16px] border border-gold-12' : 'bg-transparent backdrop-blur-none border-none'}`}
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
				<div className='md:hidden bg-nav-mobile px-6 py-6 flex flex-col gap-5'>
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
};

export default Navbar;
