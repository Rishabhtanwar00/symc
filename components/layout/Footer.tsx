import Link from 'next/link';
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
		<footer className='py-16 px-6 bg-surface-deepest border-t border-gold-08'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid md:grid-cols-4 gap-12 mb-16'>
					<div className='md:col-span-2'>
						<div className='flex items-center gap-3 mb-5'>
							<span className='text-xl text-gold'>☽</span>
							<div>
								<div className='text-sm font-bold font-cinzel text-gold tracking-[0.2em]'>
									SYMC
								</div>
								<div className='text-[9px] text-subtle tracking-[0.15em]'>
									SHREE YOGMAYA MEDITATION CENTRE
								</div>
							</div>
						</div>
						<p className='italic text-[0.95rem] leading-[1.8] max-w-[280px] font-cormorant text-subtle'>
							A sacred space where the stars, breath, and self converge into the
							art of living well.
						</p>
					</div>

					{FOOTER_COLS.map((col) => (
						<div key={col.title}>
							<h4 className='text-[10px] tracking-[0.3em] mb-5 font-cinzel text-gold'>
								{col.title}
							</h4>
							<ul className='flex flex-col gap-3'>
								{col.links.map((l) => (
									<li key={l}>
										<Link
											href='/'
											className='text-[0.95rem] font-cormorant text-subtle hover:text-gold transition-colors duration-300'
										>
											{l}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<Divider />

				<div className='mt-10 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-[12px] font-cormorant text-faint'>
						© 2026 Shree Yogmaya Meditation Centre. All rights reserved.
					</p>
					<div className='flex gap-6'>
						{['Privacy', 'Terms', 'Sitemap'].map((l) => (
							<Link
								key={l}
								href='/'
								className='text-[12px] font-cormorant text-faint hover:text-gold transition-colors duration-300'
							>
								{l}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
