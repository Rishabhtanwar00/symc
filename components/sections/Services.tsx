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
			style={{ background: 'var(--rt-gradient-section-a)' }}
		>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-20'>
					<p className='mb-4 text-[11px] tracking-[0.3em] font-cinzel text-gold'>
						✦ WHAT WE OFFER ✦
					</p>
					<h2
						className='leading-[1.2] font-cinzel-deco text-primary'
						style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
					>
						Sacred Pathways
					</h2>
					<p className='mt-4 max-w-lg mx-auto italic text-[1.05rem] font-cormorant text-subtle'>
						Three doorways to self-discovery, aligned with ancient Yogic and
						Vedic traditions.
					</p>
				</div>

				{/* Grid */}
				<div className='grid md:grid-cols-3 gap-px border border-gold-10 bg-gold-10'>
					{SERVICES.map((s) => (
						<div
							key={s.title}
							className='group relative p-10 flex flex-col gap-5 cursor-pointer
                         bg-surface-dark hover:bg-gold-04
                         transition-colors duration-500'
						>
							{/* Corner accents */}
							<div className='absolute top-0 left-0 w-6 h-6 border-t border-l border-gold transition-all duration-500 group-hover:w-10 group-hover:h-10' />
							<div className='absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold transition-all duration-500 group-hover:w-10 group-hover:h-10' />

							<div className='text-[28px] leading-none text-gold'>{s.icon}</div>

							<h3 className='text-base tracking-[0.05em] font-cinzel text-primary'>
								{s.title}
							</h3>

							<p className='italic text-base leading-[1.75] flex-1 font-cormorant text-subtle'>
								{s.desc}
							</p>

							<div className='text-[9px] tracking-[0.25em] opacity-80 font-cinzel text-gold'>
								{s.tag}
							</div>

							<div className='flex items-center gap-2 text-[11px] tracking-[0.15em] font-cinzel text-gold transition-all duration-300'>
								LEARN MORE <span>→</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
