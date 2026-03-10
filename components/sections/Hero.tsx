'use client';

import { useEffect, useState } from 'react';
import SacredCircle from '../common/SacredCircle';

export default function Hero() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(t);
	}, []);

	return (
		<section
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-[88px]'
			style={{ background: 'var(--gradient-hero)' }}
		>
			{/* Radial glow */}
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(ellipse 70% 60% at 50% 60%, var(--color-gold-07) 0%, transparent 70%)',
				}}
			/>

			{/* Spinning sacred geometry */}
			<SacredCircle
				className='absolute opacity-60 animate-spin-slow'
				style={{
					width: 'min(700px, 90vw)',
					height: 'min(700px, 90vw)',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>

			{/* Content */}
			<div
				className='relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-[1400ms]'
				style={{
					opacity: visible ? 1 : 0,
					transform: visible ? 'translateY(0)' : 'translateY(30px)',
				}}
			>
				{/* Eyebrow label */}
				<div
					className='mb-8 inline-flex items-center gap-3 transition-opacity duration-[1800ms] delay-300'
					style={{ opacity: visible ? 1 : 0 }}
				>
					<span
						className='text-[10px] tracking-[0.35em]'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						✦ SHREE YOGMAYA MEDITATION CENTRE ✦
					</span>
				</div>

				{/* Heading */}
				<h1
					className='mb-6 leading-[1.1] tracking-[-0.01em]'
					style={{
						fontFamily: 'var(--font-cinzel-deco)',
						fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
						color: 'var(--color-text-primary)',
					}}
				>
					Align With the{' '}
					<span
						style={{
							background: 'var(--gradient-gold)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						Cosmos
					</span>
					,<br />
					Awaken Your Soul
				</h1>

				{/* Tagline */}
				<p
					className='mb-12 mx-auto max-w-xl italic leading-[1.8] transition-opacity duration-[1800ms] delay-[600ms]'
					style={{
						fontFamily: 'var(--font-cormorant)',
						fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
						color: 'var(--color-text-muted)',
						opacity: visible ? 1 : 0,
					}}
				>
					Ancient wisdom meets modern healing — through astrology, meditation,
					and conscious life guidance at SYMC.
				</p>

				{/* CTAs */}
				<div
					className='flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-[1800ms] delay-[900ms]'
					style={{ opacity: visible ? 1 : 0 }}
				>
					<a
						href='#'
						className='px-10 py-4 text-[11px] font-bold tracking-[0.2em] transition-opacity duration-300 hover:opacity-85'
						style={{
							background: 'var(--gradient-gold-btn)',
							color: 'var(--color-bg-deep)',
							fontFamily: 'var(--font-cinzel)',
							letterSpacing: '0.2em',
						}}
					>
						BEGIN YOUR JOURNEY
					</a>
					<a
						href='#'
						className='px-10 py-4 text-[11px] tracking-[0.2em] border transition-all duration-300
                       hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
						style={{
							borderColor: 'var(--color-gold-40)',
							color: 'var(--color-gold-40)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						EXPLORE SERVICES
					</a>
				</div>

				{/* Scroll indicator */}
				<div className='mt-20 flex flex-col items-center gap-2 opacity-40 animate-float'>
					<span
						className='text-[10px] tracking-[0.25em]'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						SCROLL
					</span>
					<div
						className='w-px h-10'
						style={{
							background:
								'linear-gradient(to bottom, var(--color-gold), transparent)',
						}}
					/>
				</div>
			</div>
		</section>
	);
}
