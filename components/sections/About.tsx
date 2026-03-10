import SacredCircle from '../common/SacredCircle';

const STATS = [
	{ num: '12+', label: 'Years of Practice' },
	{ num: '3000+', label: 'Souls Guided' },
	{ num: '200+', label: 'Meditation Sessions' },
	{ num: '40+', label: 'Astrology Reports' },
];

export default function About() {
	return (
		<section
			className='relative py-32 px-6 overflow-hidden'
			style={{ background: 'var(--color-bg-deep)' }}
		>
			{/* Background mandala */}
			<SacredCircle
				className='absolute opacity-10 pointer-events-none'
				style={{
					width: '500px',
					height: '500px',
					right: '-120px',
					top: '50%',
					transform: 'translateY(-50%)',
				}}
			/>

			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center'>
				{/* ── Text ── */}
				<div>
					<p
						className='mb-5 text-[11px] tracking-[0.3em]'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						✦ OUR STORY
					</p>

					<h2
						className='mb-8 leading-[1.2]'
						style={{
							fontFamily: 'var(--font-cinzel-deco)',
							fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
							color: 'var(--color-text-primary)',
						}}
					>
						Where Stars Meet <br />
						<span style={{ color: 'var(--color-gold)' }}>Stillness</span>
					</h2>

					<p
						className='mb-6 italic text-[1.1rem] leading-[1.9]'
						style={{
							fontFamily: 'var(--font-cormorant)',
							color: 'var(--color-text-muted)',
						}}
					>
						SYMC was founded on a simple belief — that the universe speaks to
						each of us, and that true healing begins when we learn to listen.
						Our centre blends Vedic astrology, yogic meditation, and
						heart-centred life coaching into a unified path of awakening.
					</p>

					<p
						className='text-[1.1rem] leading-[1.9]'
						style={{
							fontFamily: 'var(--font-cormorant)',
							color: 'var(--color-text-subtle)',
						}}
					>
						Rooted in ancient Indian wisdom and guided by compassion, we walk
						with you — from confusion to clarity, from anxiety to peace, from
						seeking to becoming.
					</p>

					<a
						href='#'
						className='mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.2em]
                       transition-colors duration-300 hover:opacity-80'
						style={{
							color: 'var(--color-gold)',
							fontFamily: 'var(--font-cinzel)',
						}}
					>
						DISCOVER OUR PHILOSOPHY <span>→</span>
					</a>
				</div>

				{/* ── Stats Grid ── */}
				<div
					className='grid grid-cols-2 gap-px'
					style={{
						border: '1px solid var(--color-gold-12)',
						background: 'var(--color-gold-12)',
					}}
				>
					{STATS.map((s) => (
						<div
							key={s.label}
							className='p-10 flex flex-col gap-3'
							style={{ background: 'var(--color-bg-deep)' }}
						>
							<div
								className='leading-none'
								style={{
									fontFamily: 'var(--font-cinzel-deco)',
									fontSize: '2.2rem',
									color: 'var(--color-gold)',
								}}
							>
								{s.num}
							</div>
							<div
								className='text-[0.85rem] tracking-[0.05em]'
								style={{
									fontFamily: 'var(--font-cormorant)',
									color: 'var(--color-text-subtle)',
								}}
							>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
