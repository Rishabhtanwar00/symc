'use client';

import { useEffect, useState } from 'react';
import SacredCircle from '../common/SacredCircle';
import Link from 'next/link';

const Hero = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(t);
	}, []);

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-[88px]'>
			{/* Radial glow */}
			<div className='absolute inset-0 bg-hero-glow pointer-events-none' />

			{/* Spinning sacred geometry */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<SacredCircle className='opacity-60 h-[700px] max-h-[90vw] w-[700px] max-w-[90vw] animate-spin-slow origin-center' />
			</div>

			{/* Content */}
			<div
				className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-[1400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
			>
				{/* Eyebrow */}
				<div
					className={`mb-8 inline-flex items-center gap-3 transition-opacity duration-[1800ms] delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
				>
					<span className='text-[10px] tracking-[0.35em] font-cinzel text-gold font-semibold'>
						✦ SHREE YOGMAYA MEDITATION CENTRE ✦
					</span>
				</div>

				{/* Heading */}
				<h1 className='mb-6 leading-[1.1] tracking-[-0.01em] font-cinzel-deco text-primary text-[clamp(2.8rem,_7vw,_5.5rem)]'>
					Align With the{' '}
					<span className='bg-gradient-gold bg-clip-text text-transparent'>
						Cosmos
					</span>
					,<br />
					Awaken Your Soul
				</h1>

				{/* Tagline */}
				<p
					className={`mb-12 mx-auto max-w-xl italic leading-[1.8] font-cormorant text-muted text-[clamp(1rem,_2.2vw,_1.25rem)] transition-opacity duration-[1800ms] delay-[600ms] ${visible ? 'opacity-100' : 'opacity-0'}`}
				>
					Ancient wisdom meets modern healing — through astrology, meditation,
					and conscious life guidance at SYMC.
				</p>

				{/* CTAs */}
				<div
					className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-[1800ms] delay-[900ms] ${visible ? 'opacity-100' : 'opacity-0'}`}
				>
					<Link
						href='#'
						className='px-10 py-4 text-[11px] font-bold tracking-[0.2em] font-cinzel bg-gradient-gold-btn text-deep hover:opacity-85 transition-opacity duration-300'
					>
						BEGIN YOUR JOURNEY
					</Link>
					<Link
						href='#'
						className='px-10 py-4 text-[11px] tracking-[0.2em] font-cinzel
                       text-gold-80 border border-gold-80
                       hover:border-gold hover:text-gold
                       transition-all duration-300'
					>
						EXPLORE SERVICES
					</Link>
				</div>

				{/* Scroll indicator */}
				<div className='mt-20 flex flex-col items-center gap-2 opacity-40 animate-float'>
					<span className='text-[10px] tracking-[0.25em] font-cinzel text-gold'>
						SCROLL
					</span>
					<div className='w-px h-10 bg-gradient-to-b from-gold to-transparent' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
