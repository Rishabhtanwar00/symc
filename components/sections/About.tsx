import Link from 'next/link';
import SacredCircle from '../common/SacredCircle';
import { STATS } from '@/lib/Data';

const About = () => {
	return (
		<section className='relative py-32 px-6 overflow-hidden bg-deep'>
			<SacredCircle className='absolute opacity-20 w-[500px] h-[500px] -right-[120px] top-1/2 -translate-y-1/2 pointer-events-none' />

			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center'>
				<div>
					<p className='mb-5 text-[11px] tracking-[0.3em] font-cinzel text-gold font-semibold'>
						✦ OUR STORY ✦
					</p>

					<h2 className='mb-8 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,_3.5vw,_2.8rem)]'>
						Where Stars Meet <br />
						<span className='text-gold'>Stillness</span>
					</h2>

					<p className='mb-6 italic text-[1.1rem] leading-[1.9] font-cormorant text-muted'>
						SYMC was founded on a simple belief — that the universe speaks to
						each of us, and that true healing begins when we learn to listen.
						Our centre blends Vedic astrology, yogic meditation, and
						heart-centred life coaching into a unified path of awakening.
					</p>

					<p className='text-[1.1rem] leading-[1.9] font-cormorant text-subtle'>
						Rooted in ancient Indian wisdom and guided by compassion, we walk
						with you — from confusion to clarity, from anxiety to peace, from
						seeking to becoming.
					</p>

					<Link
						href='#'
						className='mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.2em] font-cinzel text-gold hover:opacity-80 transition-opacity duration-300'
					>
						DISCOVER OUR PHILOSOPHY <span>→</span>
					</Link>
				</div>

				<div className='grid grid-cols-2 gap-px border border-gold-12 bg-gold-12'>
					{STATS.map((s) => (
						<div key={s.label} className='p-10 flex flex-col gap-3 bg-deep'>
							<div className='leading-none font-cinzel-deco text-gold text-[2.2rem]'>
								{s.num}+
							</div>
							<div className='text-[0.85rem] tracking-[0.05em] font-cormorant text-subtle'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
