const SERVICES = [
	{
		icon: '☽',
		title: 'Astrology Readings',
		desc: 'Decode the celestial map of your birth chart. Discover karmic patterns, planetary influences, and the cosmic timing shaping your destiny.',
		tag: 'NATAL · TRANSIT · SYNASTRY',
	},
	{
		icon: '◎',
		title: 'Meditation Classes',
		desc: 'From breath awareness to deep Yoga Nidra — guided sessions that dissolve mental noise and anchor you in profound stillness.',
		tag: 'BEGINNERS · ADVANCED · ONLINE',
	},
	{
		icon: '∞',
		title: 'Life Coaching',
		desc: 'Conscious guidance woven with Vedic philosophy, mindset science, and intuitive insight — to help you live with clarity and purpose.',
		tag: '1-ON-1 · GROUP · RETREATS',
	},
];

export default function Services() {
	return (
		<section
			className='relative py-32 px-6'
			style={{ background: 'var(--gradient-section-a)' }}
		>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-20'>
					<p
						className='mb-4 text-[11px] tracking-[0.3em]'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						✦ WHAT WE OFFER ✦
					</p>
					<h2
						className='leading-[1.2]'
						style={{
							fontFamily: 'var(--font-cinzel-deco)',
							fontSize: 'clamp(1.8rem, 4vw, 3rem)',
							color: 'var(--color-text-primary)',
						}}
					>
						Sacred Pathways
					</h2>
					<p
						className='mt-4 max-w-lg mx-auto italic text-[1.05rem]'
						style={{
							fontFamily: 'var(--font-cormorant)',
							color: 'var(--color-text-subtle)',
						}}
					>
						Three doorways to self-discovery, aligned with ancient Yogic and
						Vedic traditions.
					</p>
				</div>

				{/* Grid */}
				<div
					className='grid md:grid-cols-3 gap-px border border-gold-10'
					style={{
						border: '1px solid var(--color-gold-10)',
						background: 'var(--color-gold-10)',
					}}
				>
					{SERVICES.map((s) => (
						<div
							key={s.title}
							className='group relative p-10 flex flex-col gap-5 cursor-pointer transition-colors duration-500 hover:bg-color-gold-04'
						>
							{/* Corner accents */}
							<div
								className='absolute top-0 left-0 w-6 h-6 transition-all duration-500 group-hover:w-10 group-hover:h-10'
								style={{
									borderTop: '1px solid var(--color-gold)',
									borderLeft: '1px solid var(--color-gold)',
								}}
							/>
							<div
								className='absolute bottom-0 right-0 w-6 h-6 transition-all duration-500 group-hover:w-10 group-hover:h-10'
								style={{
									borderBottom: '1px solid var(--color-gold)',
									borderRight: '1px solid var(--color-gold)',
								}}
							/>

							<div
								className='text-[28px] leading-none'
								style={{ color: 'var(--color-gold)' }}
							>
								{s.icon}
							</div>

							<h3
								className='text-base tracking-[0.05em]'
								style={{
									fontFamily: 'var(--font-cinzel)',
									color: 'var(--color-text-primary)',
								}}
							>
								{s.title}
							</h3>

							<p
								className='italic text-base leading-[1.75] flex-1'
								style={{
									fontFamily: 'var(--font-cormorant)',
									color: 'var(--color-text-subtle)',
								}}
							>
								{s.desc}
							</p>

							<div
								className='text-[9px] tracking-[0.25em] opacity-60'
								style={{
									color: 'var(--color-gold)',
									fontFamily: 'var(--font-cinzel)',
								}}
							>
								{s.tag}
							</div>

							<div
								className='flex items-center gap-2 text-[11px] tracking-[0.15em] transition-all duration-300'
								style={{
									color: 'var(--color-gold)',
									fontFamily: 'var(--font-cinzel)',
								}}
							>
								LEARN MORE <span>→</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
