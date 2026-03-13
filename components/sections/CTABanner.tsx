import Link from 'next/link';

const CTABanner = () => {
	return (
		<section className='relative py-32 px-6 text-center overflow-hidden bg-deep'>
			<div className='absolute inset-0 bg-hero-glow pointer-events-none' />
			<div className='absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none' />

			<div className='relative z-10 max-w-2xl mx-auto'>
				<p className='mb-5 text-[11px] tracking-[0.3em] font-cinzel text-gold font-semibold'>
					✦ TAKE THE FIRST STEP ✦
				</p>

				<h2 className='mb-6 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,_3.5vw,_2.8rem)]'>
					Your Cosmic Journey Begins Here
				</h2>

				<p className='mb-12 italic text-[1.1rem] leading-[1.8] font-cormorant text-subtle'>
					Book a personal session with our guide and receive a complimentary
					birth chart reading with your first consultation.
				</p>

				<Link
					href='#'
					className='inline-block px-12 py-5 text-[11px] font-bold tracking-[0.2em] font-cinzel text-deep bg-gradient-gold-btn hover:opacity-85 transition-opacity duration-300'
				>
					BOOK A FREE CONSULTATION
				</Link>
			</div>
		</section>
	);
};

export default CTABanner;
