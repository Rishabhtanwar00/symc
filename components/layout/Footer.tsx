import Divider from '../common/Divider';

const FOOTER_COLS = [
	{
		title: 'PATHS',
		links: [
			'Astrology Readings',
			'Meditation Classes',
			'Life Coaching',
			'Retreats',
		],
	},
	{
		title: 'CONNECT',
		links: ['About Us', 'Our Guide', 'Testimonials', 'Contact'],
	},
];

export default function Footer() {
	return (
		<footer
			className='py-16 px-6'
			style={{
				background: 'var(--color-bg-deepest)',
				borderTop: '1px solid var(--color-gold-08)',
			}}
		>
			<div className='max-w-6xl mx-auto'>
				<div className='grid md:grid-cols-4 gap-12 mb-16'>
					{/* Brand */}
					<div className='md:col-span-2'>
						<div className='flex items-center gap-3 mb-5'>
							<span className='text-xl' style={{ color: 'var(--color-gold)' }}>
								☽
							</span>
							<div>
								<div
									className='text-sm font-bold'
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
									SHREE YOGMAYA MEDITATION CENTRE
								</div>
							</div>
						</div>
						<p
							className='italic text-[0.95rem] leading-[1.8] max-w-[280px]'
							style={{
								fontFamily: 'var(--font-cormorant)',
								color: 'var(--color-text-subtle)',
							}}
						>
							A sacred space where the stars, breath, and self converge into the
							art of living well.
						</p>
					</div>

					{/* Link columns */}
					{FOOTER_COLS.map((col) => (
						<div key={col.title}>
							<h4
								className='text-[10px] tracking-[0.3em] mb-5'
								style={{
									color: 'var(--color-gold)',
									fontFamily: 'var(--font-cinzel)',
								}}
							>
								{col.title}
							</h4>
							<ul className='flex flex-col gap-3'>
								{col.links.map((l) => (
									<li key={l}>
										<a
											href='#'
											className='text-[0.95rem] transition-colors duration-300 hover:text-[var(--color-gold)]'
											style={{
												color: 'var(--color-text-subtle)',
												fontFamily: 'var(--font-cormorant)',
											}}
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<Divider />

				<div className='mt-10 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p
						className='text-[11px]'
						style={{
							color: 'var(--color-text-faint)',
							fontFamily: 'var(--font-cormorant)',
						}}
					>
						© 2025 Shree Yogmaya Meditation Centre. All rights reserved.
					</p>
					<div className='flex gap-6'>
						{['Privacy', 'Terms', 'Sitemap'].map((l) => (
							<a
								key={l}
								href='#'
								className='text-[11px] hover:text-[var(--color-gold)] transition-colors duration-300'
								style={{
									color: 'var(--color-text-faint)',
									fontFamily: 'var(--font-cormorant)',
								}}
							>
								{l}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
