'use client';

import { useEffect, useState } from 'react';

const TESTIMONIALS = [
	{
		quote:
			'My astrology reading with SYMC was a turning point. I finally understood the patterns that were holding me back.',
		name: 'Priya Sharma',
		role: 'Meditation Student',
	},
	{
		quote:
			'The Yoga Nidra sessions have transformed how I sleep and how I relate to stress. I feel deeply anchored now.',
		name: 'Arjun Mehta',
		role: 'Life Coaching Client',
	},
	{
		quote:
			"SYMC doesn't just teach — they create space for genuine inner transformation. Truly a sacred place.",
		name: 'Kavita Rao',
		role: 'Astrology Consultation',
	},
];

export default function Testimonials() {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const t = setInterval(
			() => setActive((a) => (a + 1) % TESTIMONIALS.length),
			5000,
		);
		return () => clearInterval(t);
	}, []);

	return (
		<section
			className='relative py-32 px-6 text-center'
			style={{ background: 'var(--gradient-section-b)' }}
		>
			<div className='max-w-3xl mx-auto'>
				<p
					className='mb-12 text-[11px] tracking-[0.3em]'
					style={{
						color: 'var(--color-gold)',
						fontFamily: 'var(--font-cinzel)',
					}}
				>
					✦ VOICES FROM THE JOURNEY ✦
				</p>

				{/* Quote */}
				<div style={{ minHeight: '150px' }}>
					<p
						key={active}
						className='italic leading-[1.8] animate-fade-up'
						style={{
							fontFamily: 'var(--font-cormorant)',
							fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
							color: 'var(--color-text-muted)',
						}}
					>
						&quot;{TESTIMONIALS[active].quote}&quot;
					</p>
				</div>

				{/* Attribution */}
				<div className='mt-8'>
					<div
						className='text-[13px]'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						{TESTIMONIALS[active].name}
					</div>
					<div
						className='text-[13px] mt-1'
						style={{
							color: 'var(--color-text-subtle)',
							fontFamily: 'var(--font-cormorant)',
						}}
					>
						{TESTIMONIALS[active].role}
					</div>
				</div>

				{/* Dots */}
				<div className='flex justify-center gap-2 mt-10'>
					{TESTIMONIALS.map((_, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className='h-1.5 transition-all duration-300 border-none cursor-pointer'
							style={{
								width: i === active ? '24px' : '6px',
								background:
									i === active ? 'var(--color-gold)' : 'var(--color-gold-25)',
							}}
							aria-label={`Testimonial ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
