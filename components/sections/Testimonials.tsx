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
			style={{ background: 'var(--rt-gradient-section-b)' }}
		>
			<div className='max-w-3xl mx-auto'>
				<p className='mb-12 text-[11px] tracking-[0.3em] font-cinzel text-gold'>
					✦ VOICES FROM THE JOURNEY ✦
				</p>

				<div className='min-h-[150px]'>
					<p
						key={active}
						className='italic leading-[1.8] font-cormorant text-muted animate-fade-up'
						style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
					>
						&quot;{TESTIMONIALS[active].quote}&quot;
					</p>
				</div>

				<div className='mt-8'>
					<div className='text-[13px] font-cinzel text-gold'>
						{TESTIMONIALS[active].name}
					</div>
					<div className='text-[13px] mt-1 font-cormorant text-subtle'>
						{TESTIMONIALS[active].role}
					</div>
				</div>

				<div className='flex justify-center gap-2 mt-10'>
					{TESTIMONIALS.map((_, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className={`h-1.5 border-none cursor-pointer transition-all duration-300 ${i === active ? 'w-6 bg-gold' : 'w-1.5 bg-gold-25'}`}
							aria-label={`Testimonial ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
